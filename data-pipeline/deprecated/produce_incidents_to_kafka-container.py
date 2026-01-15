import json
import random
import time
from datetime import datetime

from kafka import KafkaProducer

producer = KafkaProducer(
    bootstrap_servers="localhost:9092",
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)

TOPIC = "incidents_stream"

alert_codes = ["FLOOD", "FIRE", "ACCIDENT", "PROTEST", "OTHER"]
tags = ["critical", "warning", "info"]

# coordonate aproximative (ex: București)
lat_min, lat_max = 44.38, 44.48
lon_min, lon_max = 26.05, 26.20

def generate_random_incident():
    alert = random.choice(alert_codes)

    descriptions = {
        "FLOOD": "Inundație în zonă rezidențială.",
        "FIRE": "Incendiu la o clădire.",
        "ACCIDENT": "Accident rutier la intersecție.",
        "PROTEST": "Protest în centrul orașului.",
        "OTHER": "Incident neclasificat raportat.",
    }

    incident = {
        "id": random.randint(1, 1_000_000),
        "reported_at": datetime.utcnow().isoformat(),
        "lat": round(random.uniform(lat_min, lat_max), 6),
        "lon": round(random.uniform(lon_min, lon_max), 6),
        "alert_code": alert,
        "description": descriptions[alert],
        "tag": random.choice(tags),
    }
    return incident

def main():
    print("Starting incident producer... (CTRL+C to stop)")
    try:
        while True:
            incident = generate_random_incident()
            producer.send(TOPIC, value=incident)
            producer.flush()
            print(f"Sent: {incident}")
            time.sleep(1)  # 1 mesaj pe secundă
    except KeyboardInterrupt:
        print("Stopping producer...")
    finally:
        producer.close()

if __name__ == "__main__":
    main()
