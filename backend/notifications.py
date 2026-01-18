import os
import smtplib
from email.message import EmailMessage
from typing import Iterable, Optional


def _env_bool(name: str, default: str = "0") -> bool:
    return os.getenv(name, default).strip().lower() in {"1", "true", "yes", "y", "on"}


def _smtp_port() -> int:
    try:
        return int(os.getenv("SMTP_PORT", "587"))
    except ValueError:
        return 587


def send_email_smtp(
    to_email: str,
    subject: str,
    body: str,
) -> None:
    """
    Trimite email prin SMTP folosind variabilele de mediu.
    Necesita:
      SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD
    Optional:
      SMTP_FROM (default: SMTP_USERNAME)
      SMTP_USE_TLS (default: 1)
    """
    host = os.getenv("SMTP_HOST", "").strip()
    port = _smtp_port()
    username = os.getenv("SMTP_USERNAME", "").strip()
    password = os.getenv("SMTP_PASSWORD", "").strip()
    from_addr = os.getenv("SMTP_FROM", "").strip() or username
    use_tls = _env_bool("SMTP_USE_TLS", "1")

    if not host or not username or not password:
        raise RuntimeError(
            "SMTP not configured. Set SMTP_HOST, SMTP_USERNAME, SMTP_PASSWORD (and optionally SMTP_PORT/SMTP_FROM)."
        )

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = from_addr
    msg["To"] = to_email
    msg.set_content(body)

    # 587 -> STARTTLS (cel mai comun)
    with smtplib.SMTP(host, port, timeout=20) as server:
        server.ehlo()
        if use_tls:
            server.starttls()
            server.ehlo()
        server.login(username, password)
        server.send_message(msg)


def notify_admins_about_incident(
    admins: Iterable[dict],
    incident: dict,
) -> None:
    """
    Notificari catre admini:
      - by default: MOCK (print in consola)
      - daca NOTIFY_EMAIL_ENABLED=1: trimite email SMTP
    """

    alert = incident.get("alert_code")
    tag = incident.get("tag") or "n/a"
    lat = incident.get("lat")
    lon = incident.get("lon")
    photo_url = incident.get("photo_url")
    incident_id = incident.get("id")

    subject = f"[EventReport] New incident #{incident_id} - {alert} ({tag})"
    body_lines = [
        f"New incident reported:",
        f"- id: {incident_id}",
        f"- alert_code: {alert}",
        f"- tag: {tag}",
        f"- location: ({lat}, {lon})",
        f"- description: {incident.get('description')}",
    ]
    if photo_url:
        body_lines.append(f"- photo_url: {photo_url}")

    body = "\n".join(body_lines)

    email_enabled = _env_bool("NOTIFY_EMAIL_ENABLED", "0")

    for a in admins:
        email = (a.get("email") or "").strip()

        # MOCK (mereu)
        print(
            f"[NOTIFY] Admin={email or 'N/A'} | ALERT={alert} | TAG={tag} | LOCATION=({lat}, {lon})"
        )

        # REAL SMTP (optional)
        if email_enabled and email:
            try:
                send_email_smtp(email, subject, body)
                print(f"[NOTIFY][SMTP] sent to {email}")
            except Exception as exc:
                # Nu vrem sa crape request-ul doar ca SMTP a picat
                print(f"[NOTIFY][SMTP][ERROR] {email}: {exc}")