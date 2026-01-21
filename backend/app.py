# app.py
import os
import jwt

from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta

from typing import Any, Dict
from sqlalchemy import and_, or_

from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

from config import Config
from models import db, Incident, Admin

from notifications import notify_admins_about_incident
from firebase_client import upload_incident_photo

from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    # CORS(
    #     app,
    #     resources={"/api/*": {"origins": "*"}},
    # )

    CORS(
        app,
        resources={r"/*": {"origins": "*"}},
    )

    db.init_app(app) 

    # ---------- Auth (JWT) ----------
    def _jwt_secret() -> str:
        return os.getenv("JWT_SECRET", "dev-jwt-secret-change-me")

    def _jwt_ttl_minutes() -> int:
        try:
            return int(os.getenv("JWT_TTL_MIN", "60"))
        except ValueError:
            return 60

    def _issue_admin_token(admin: Admin) -> str:
        now = datetime.utcnow()
        exp = now + timedelta(minutes=_jwt_ttl_minutes())
        payload = {
            "sub": str(admin.id),
            "email": admin.email,
            "iat": int(now.timestamp()),
            "exp": int(exp.timestamp()),
            "iss": "eventreport",
        }
        return jwt.encode(payload, _jwt_secret(), algorithm="HS256")
    
    # ---------- Rate limit (optional, disabled by default) ----------
    RATE_LIMIT_ENABLED = os.getenv("RATE_LIMIT_ENABLED", "0") == "1"
    try:
        RATE_LIMIT_POST_INCIDENTS = os.getenv("RATE_LIMIT_POST_INCIDENTS", "10 per minute")
    except Exception:
        RATE_LIMIT_POST_INCIDENTS = "10 per minute"

    limiter = Limiter(
        get_remote_address,
        app=app,
        enabled=RATE_LIMIT_ENABLED,
        storage_uri=os.getenv("RATE_LIMIT_STORAGE_URI", "memory://"),
    )

    @limiter.exempt
    @app.route("/health", methods=["GET"])
    def health():
        return jsonify({"status": "ok"}), 200
    
    @app.route("/api/auth/login", methods=["POST"])
    def admin_login():
        data = request.get_json(silent=True) or {}

        email = (data.get("email") or "").strip().lower()
        password = data.get("password") or ""

        if not email or not password:
            return jsonify({"error": "email and password are required"}), 400

        admin = Admin.query.filter_by(email=email).first()
        if not admin:
            return jsonify({"error": "invalid credentials"}), 401

        if not admin.password_hash:
            # admin existent creat fara parola -> nu poate face login pana nu are parola setata
            return jsonify({"error": "admin has no password set"}), 403

        if not check_password_hash(admin.password_hash, password):
            return jsonify({"error": "invalid credentials"}), 401

        token = _issue_admin_token(admin)
        return jsonify({"access_token": token, "token_type": "Bearer"}), 200

    # ---------- Helpers de validare -----------------

    def _validate_incident_payload(payload: Dict[str, Any]) -> tuple[Dict[str, Any], Dict[str, str] | None]:
        """Valideaza minimal payload-ul de incident. Returneaza (data_curata, errors sau None)."""
        errors: Dict[str, str] = {}

        required_fields = ["lat", "lon", "alert_code", "description"]
        for field in required_fields:
            if field not in payload:
                errors[field] = "This field is required."

        if errors:
            return {}, errors

        data: Dict[str, Any] = {}

        try:
            data["lat"] = float(payload["lat"])
        except (ValueError, TypeError):
            errors["lat"] = "lat must be a number."

        try:
            data["lon"] = float(payload["lon"])
        except (ValueError, TypeError):
            errors["lon"] = "lon must be a number."

        # alert_code & description
        alert_code = str(payload.get("alert_code", "")).strip()
        if not alert_code:
            errors["alert_code"] = "alert_code cannot be empty."
        elif len(alert_code) > 50:
            errors["alert_code"] = "alert_code is too long (max 50 chars)."
        data["alert_code"] = alert_code

        description = str(payload.get("description", "")).strip()
        if not description:
            errors["description"] = "description cannot be empty."
        data["description"] = description

        # optionale
        data["tag"] = payload.get("tag")
        data["photo_url"] = payload.get("photo_url")
        data["reporter_name"] = payload.get("reporter_name")
        data["reporter_email"] = payload.get("reporter_email")
        data["reporter_phone"] = payload.get("reporter_phone")

        if errors:
            return {}, errors

        return data, None

    # ---------- Endpoints ----------

    @app.route("/api/incidents", methods=["POST"])
    # @limiter.limit(RATE_LIMIT_POST_INCIDENTS)
    def create_incident():
        """
        Raportare incident:
            - JSON (application/json) fara poza
            - multipart/form-data cu poza (field: photo)
        """

        def _create_and_persist_incident(data: dict, photo_url: str | None = None):
            # Ataseaza photo_url daca exista
            if photo_url is not None:
                data["photo_url"] = photo_url

            incident = Incident(**data)
            db.session.add(incident)
            db.session.commit()

            # Notificari catre admini
            try:
                admins = Admin.query.order_by(Admin.id.asc()).all()
                admins_payload = [a.to_dict() for a in admins]
                notify_admins_about_incident(admins_payload, incident.to_dict())
            except Exception as e:
                # Nu blocam crearea incidentului daca notificarea esueaza
                print(f"[NOTIFY] Failed: {e}")

            return incident

        # ------------------------------------------------------------
        # 1) multipart/form-data (poate include poza)
        # ------------------------------------------------------------
        content_type = request.content_type or ""
        if content_type.startswith("multipart/form-data"):
            form = request.form

            # Construim payload in format compatibil cu validatorul existent
            payload = {
                "lat": form.get("lat"),
                "lon": form.get("lon"),
                "alert_code": form.get("alert_code"),
                "description": form.get("description"),
                "tag": form.get("tag"),
                "reporter_name": form.get("reporter_name"),
                "reporter_email": form.get("reporter_email"),
                "reporter_phone": form.get("reporter_phone"),
            }

            # Validare folosind functia existenta (ca la JSON)
            data, errors = _validate_incident_payload(payload)
            if errors:
                return jsonify({"errors": errors}), 400

            # Upload foto daca exista
            photo_url = None
            photo_file = request.files.get("photo")
            if photo_file and getattr(photo_file, "filename", ""):
                ts = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
                ext = photo_file.filename.rsplit(".", 1)[-1].lower() if "." in photo_file.filename else "jpg"
                filename = f"incidents/{ts}.{ext}"

                try:
                    photo_url = upload_incident_photo(photo_file, filename)
                except Exception as e:
                    print(f"[FIREBASE] Upload failed: {e}")
                    photo_url = None

            incident = _create_and_persist_incident(data, photo_url=photo_url)
            return jsonify(incident.to_dict()), 201

        # ------------------------------------------------------------
        # 2) JSON (application/json)
        # ------------------------------------------------------------
        if not request.is_json:
            return jsonify({"error": "Request must be JSON or multipart/form-data"}), 400

        payload = request.get_json(silent=True)
        if payload is None:
            return jsonify({"error": "Invalid JSON payload"}), 400

        data, errors = _validate_incident_payload(payload)
        if errors:
            return jsonify({"errors": errors}), 400

        incident = _create_and_persist_incident(data)
        return jsonify(incident.to_dict()), 201


    @app.route("/api/incidents", methods=["GET"])
    def list_incidents():
        """Listare incidente (optional: paginare + filtrare non-breaking)"""

        # Base query
        q = Incident.query

        # -------------------------
        # Optional filters
        # -------------------------
        tag = request.args.get("tag")
        if tag:
            q = q.filter(Incident.tag == tag)

        alert_code = request.args.get("alert_code")
        if alert_code:
            q = q.filter(Incident.alert_code == alert_code)
        
        has_photo = request.args.get("has_photo")
        if has_photo is not None:
            v = has_photo.strip().lower()
            truthy = v in ("1", "true", "yes", "y")
            falsy = v in ("0", "false", "no", "n")

            if truthy:
                q = q.filter(
                    and_(
                        Incident.photo_url.isnot(None),
                        Incident.photo_url != ""
                    )
                )
            elif falsy:
                q = q.filter(
                    or_(
                        Incident.photo_url.is_(None),
                        Incident.photo_url == ""
                    )
                )

        # Optional date filters (ISO): ?from=2026-01-01&to=2026-01-31
        date_from = request.args.get("from")
        if date_from:
            try:
                dt_from = datetime.fromisoformat(date_from)
                q = q.filter(Incident.reported_at >= dt_from)
            except ValueError:
                return jsonify({"error": "Invalid 'from' date. Use ISO format (e.g. 2026-01-01 or 2026-01-01T12:00:00)."}), 400

        date_to = request.args.get("to")
        if date_to:
            try:
                dt_to = datetime.fromisoformat(date_to)
                q = q.filter(Incident.reported_at <= dt_to)
            except ValueError:
                return jsonify({"error": "Invalid 'to' date. Use ISO format (e.g. 2026-01-31 or 2026-01-31T12:00:00)."}), 400

        # Sort (default exactly like before)
        q = q.order_by(Incident.reported_at.desc())

        # -------------------------
        # Pagination trigger rule
        # -------------------------
        has_pagination = any(k in request.args for k in ("page", "limit", "offset"))

        # === OLD BEHAVIOR (no page/limit/offset) ===
        if not has_pagination:
            try:
                limit = int(request.args.get("limit", 100))
            except ValueError:
                limit = 100

            incidents = q.limit(limit).all()
            return jsonify([i.to_dict() for i in incidents]), 200

        # === PAGINATED BEHAVIOR (page/limit/offset present) ===
        def _to_int(name: str, default: int):
            raw = request.args.get(name, None)
            if raw is None or str(raw).strip() == "":
                return default
            try:
                return int(raw)
            except ValueError:
                raise ValueError(f"Invalid '{name}'. Must be integer.")

        try:
            limit = _to_int("limit", 20)
            page = _to_int("page", 1)
            raw_offset = request.args.get("offset", None)
            offset = int(raw_offset) if raw_offset is not None and str(raw_offset).strip() != "" else None
        except ValueError as e:
            return jsonify({"error": str(e)}), 400

        if limit <= 0:
            return jsonify({"error": "Invalid 'limit'. Must be > 0."}), 400
        if limit > 200:
            limit = 200  # cap safety

        if offset is None:
            if page <= 0:
                return jsonify({"error": "Invalid 'page'. Must be > 0."}), 400
            offset = (page - 1) * limit
        else:
            if offset < 0:
                return jsonify({"error": "Invalid 'offset'. Must be >= 0."}), 400
            # page is informational when offset is provided
            page = (offset // limit) + 1

        total = q.order_by(None).count()
        total_pages = (total + limit - 1) // limit if total > 0 else 0

        incidents = q.offset(offset).limit(limit).all()

        resp = make_response(jsonify([i.to_dict() for i in incidents]), 200)
        resp.headers["X-Total-Count"] = str(total)
        resp.headers["X-Page"] = str(page)
        resp.headers["X-Limit"] = str(limit)
        resp.headers["X-Total-Pages"] = str(total_pages)

        # allow browser JS to read these headers (non-breaking)
        expose = "X-Total-Count, X-Page, X-Limit, X-Total-Pages"
        existing = resp.headers.get("Access-Control-Expose-Headers")
        resp.headers["Access-Control-Expose-Headers"] = expose if not existing else f"{existing}, {expose}"

        return resp

    @app.route("/api/incidents/<int:incident_id>", methods=["GET"])
    def get_incident_by_id(incident_id):
        """Returneaza un incident dupa ID"""
        incident = Incident.query.get(incident_id)

        if incident is None:
            return jsonify({"error": "Incident not found"}), 404

        return jsonify(incident.to_dict()), 200
    
    @app.route("/api/incidents/<int:incident_id>", methods=["DELETE"])
    def delete_incident(incident_id):
        incident = Incident.query.get(incident_id)
        if incident is None:
            return jsonify(False), 404

        db.session.delete(incident)
        db.session.commit()
        return jsonify(True), 200
    
    @app.route("/api/incidents/<int:incident_id>", methods=["PATCH"])
    def patch_incident(incident_id):
        """Actualizare partiala incident"""
        incident = Incident.query.get(incident_id)
        if incident is None:
            return jsonify({"error": "Incident not found"}), 404

        data = request.get_json(silent=True)
        if data is None:
            return jsonify({"error": "Invalid JSON payload"}), 400

        allowed = {
            "tag",
            "description",
            "alert_code",
            "photo_url",
            "reporter_name",
            "reporter_email",
            "reporter_phone",
        }

        unknown = [k for k in data.keys() if k not in allowed]
        if unknown:
            return jsonify({"error": f"Unknown field(s): {', '.join(unknown)}"}), 400

        # Validari minimale (aliniate cu create)
        if "alert_code" in data:
            v = str(data.get("alert_code") or "").strip()
            if not v:
                return jsonify({"error": "alert_code cannot be empty."}), 400
            if len(v) > 50:
                return jsonify({"error": "alert_code is too long (max 50 chars)."}), 400
            incident.alert_code = v

        if "description" in data:
            v = str(data.get("description") or "").strip()
            if not v:
                return jsonify({"error": "description cannot be empty."}), 400
            incident.description = v

        # restul: optional, pot deveni si None / ""
        for field in ("tag", "photo_url", "reporter_name", "reporter_email", "reporter_phone"):
            if field in data:
                setattr(incident, field, data.get(field))

        db.session.commit()
        return jsonify(incident.to_dict()), 200

    # ---------- Admins API ----------

    @app.route("/api/admins", methods=["GET"])
    def get_admins():
        admins = Admin.query.order_by(Admin.id.asc()).all()
        return jsonify([a.to_dict() for a in admins]), 200


    @app.route("/api/admins", methods=["POST"])
    def create_admin():
        data = request.get_json(silent=True) or {}

        full_name = (data.get("full_name") or "").strip()
        phone_ro = (data.get("phone_ro") or "").strip()
        email = (data.get("email") or "").strip().lower()
        password = data.get("password")

        if not full_name or not phone_ro or not email:
            return jsonify(
                {"error": "full_name, phone_ro and email are required"}
            ), 400

        existing = Admin.query.filter_by(email=email).first()
        if existing:
            return jsonify(
                {"error": "admin with this email already exists"}
            ), 409

        admin = Admin(
            full_name=full_name,
            phone_ro=phone_ro,
            email=email,
            password_hash=generate_password_hash(password) if password else None,
        )

        db.session.add(admin)
        db.session.commit()

        return jsonify(admin.to_dict()), 201

    return app


if __name__ == "__main__":
    app = create_app()

    with app.app_context():
        db.create_all()

    # app.run(host="0.0.0.0", port=5211, debug=True) 
    app.run(host="0.0.0.0", port=5211, debug=True, use_reloader=False)
