from datetime import datetime, timedelta
import random

from app import create_app
from models import db, Incident


def add_incidents_db(n: int = 10):
    app = create_app()

    with app.app_context():
        incidents = []

        severity_levels = ["CRITICAL", "WARNING", "INFO"]

        incident_types = ["FLOOD", "FIRE", "ACCIDENT", "PROTEST", "OTHER"]

        descriptions = {
            "FLOOD": [
                "Inundație pe strada principală.",
                "Nivelul apei a crescut în zona de case.",
                "Râul a ieșit din matcă în apropierea cartierului.",
            ],
            "FIRE": [
                "Incendiu la un bloc de locuințe.",
                "Foc de vegetație în apropierea orașului.",
                "Incendiu la o clădire de birouri.",
            ],
            "ACCIDENT": [
                "Accident rutier cu două mașini.",
                "Coliziune la intersecția principală.",
                "Accident cu pieton pe trecerea de pietoni.",
            ],
            "PROTEST": [
                "Protest pașnic în centrul orașului.",
                "Adunare publică pentru schimbări politice.",
                "Manifestație spontană în fața primăriei.",
            ],
            "OTHER": [
                "Activitate suspectă raportată în parc.",
                "Zgomote puternice în cartier, sursă necunoscută.",
                "Pană de curent în mai multe blocuri.",
            ],
        }

        # coordonate aproximative pentru București
        lat_min, lat_max = 44.38, 44.48
        lon_min, lon_max = 26.05, 26.20

        now = datetime.utcnow()

        for i in range(n):
            incident_type = random.choice(incident_types)        # => tag
            severity = random.choice(severity_levels)            # => alert_code
            desc = random.choice(descriptions[incident_type])

            lat = random.uniform(lat_min, lat_max)
            lon = random.uniform(lon_min, lon_max)

            # raportate în ultimele 48h
            reported_at = now - timedelta(
                hours=random.randint(0, 48),
                minutes=random.randint(0, 59),
            )

            incident = Incident(
                reported_at=reported_at,
                lat=lat,
                lon=lon,
                alert_code=severity,          # CRITICAL / WARNING / INFO
                description=desc,
                tag=incident_type,            # FLOOD / FIRE / ACCIDENT / PROTEST / OTHER
                photo_url=None,
                reporter_name=f"User {i+1}",
                reporter_email=f"user{i+1}@example.com",
                reporter_phone=f"+407{random.randint(10000000, 99999999)}",
            )

            incidents.append(incident)

        db.session.add_all(incidents)
        db.session.commit()

        print(f"Inserted {len(incidents)} incidents successfully.")


if __name__ == "__main__":
    add_incidents_db(10)
