# app.py
from datetime import datetime
from typing import Any, Dict

from flask import Flask, jsonify, request
from flask_cors import CORS

from config import Config
from models import db, Incident


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(
        app,
        resources={"/api/*": {"origins": "*"}},
    )

    db.init_app(app)

    @app.route("/health", methods=["GET"])
    def health():
        return jsonify({"status": "ok"}), 200

    # ---------- Helpers de validare -----------------

    def _validate_incident_payload(payload: Dict[str, Any]) -> tuple[Dict[str, Any], Dict[str, str] | None]:
        """Validează minimal payload-ul de incident. Returnează (data_curată, errors sau None)."""
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

        # opționale
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
    def create_incident():
        """Raportare incident cu sau fără poză (JSON sau multipart/form-data)."""
        
        # if request.content_type and request.content_type.startswith("multipart/form-data"):

        #     form = request.form

        #     required_fields = ["lat", "lon", "alert_code", "description"]
        #     missing = [f for f in required_fields if f not in form]

        #     if missing:
        #         return jsonify({"error": f"Missing fields: {missing}"}), 400

        #     lat = float(form.get("lat"))
        #     lon = float(form.get("lon"))
        #     alert_code = form.get("alert_code")
        #     description = form.get("description")
        #     tag = form.get("tag")
        #     reporter_name = form.get("reporter_name")
        #     reporter_email = form.get("reporter_email")
        #     reporter_phone = form.get("reporter_phone")

        #     # --- Upload foto dacă există ---
        #     photo_url = None
        #     if "photo" in request.files:
        #         photo_file = request.files["photo"]
        #         if photo_file.filename:
        #             from datetime import datetime
        #             ts = datetime.utcnow().strftime("%Y%m%d%H%M%S%f")
        #             ext = photo_file.filename.rsplit(".", 1)[-1].lower()
        #             filename = f"incidents/{ts}.{ext}"

        #             from firebase_client import upload_incident_photo
        #             photo_url = upload_incident_photo(photo_file, filename)

        #     incident = Incident(
        #         lat=lat,
        #         lon=lon,
        #         alert_code=alert_code,
        #         description=description,
        #         tag=tag,
        #         reporter_name=reporter_name,
        #         reporter_email=reporter_email,
        #         reporter_phone=reporter_phone,
        #         photo_url=photo_url,
        #     )

        #     db.session.add(incident)
        #     db.session.commit()
        #     return jsonify(incident.to_dict()), 201


        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400

        payload = request.get_json(silent=True)
        if payload is None:
            return jsonify({"error": "Invalid JSON payload"}), 400

        data, errors = _validate_incident_payload(payload)
        if errors:
            return jsonify({"errors": errors}), 400

        incident = Incident(**data)
        db.session.add(incident)
        db.session.commit()

        # TODO: integrare SMS/email către administratori
        # print(
        #     f"[NOTIFY] Incident nou #{incident.id} ({incident.alert_code}) "
        #     f"la {incident.reported_at.isoformat()}"
        # )

        return jsonify(incident.to_dict()), 201

    @app.route("/api/incidents", methods=["GET"])
    def list_incidents():
        """Listare incidente"""
        try:
            limit = int(request.args.get("limit", 100))
        except ValueError:
            limit = 100

        incidents = (
            Incident.query
            .order_by(Incident.reported_at.desc())
            .limit(limit)
            .all()
        )
        return jsonify([i.to_dict() for i in incidents]), 200
    
    @app.route("/api/incidents/<int:incident_id>", methods=["GET"])
    def get_incident_by_id(incident_id):
        """Returnează un incident după ID"""
        incident = Incident.query.get(incident_id)

        if incident is None:
            return jsonify({"error": "Incident not found"}), 404

        return jsonify(incident.to_dict()), 200
    
    return app


if __name__ == "__main__":
    app = create_app()

    with app.app_context():
        db.create_all()

    app.run(host="0.0.0.0", port=5000, debug=True)
