from models import Admin


def notify_admins_about_incident(incident):
    """
    Mock notification: simuleaza trimiterea email/SMS catre toti adminii
    """
    admins = Admin.query.all()

    if not admins:
        print("[NOTIFY] No admins configured. Skipping notifications.")
        return

    for admin in admins:
        print(
            f"[NOTIFY] Admin={admin.email} | "
            f"ALERT={incident.alert_code} | "
            f"TAG={incident.tag} | "
            f"LOCATION=({incident.lat}, {incident.lon})"
        )