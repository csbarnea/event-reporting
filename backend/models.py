# models.py
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Incident(db.Model):
    __tablename__ = "incidents"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    reported_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    lat = db.Column(db.Float, nullable=False)
    lon = db.Column(db.Float, nullable=False)

    alert_code = db.Column(db.String(50), nullable=False)   # FLOOD, FIRE
    description = db.Column(db.Text, nullable=False)

    photo_url = db.Column(db.String(255), nullable=True)    # link poză
    tag = db.Column(db.String(50), nullable=True)           # critical / warning / info

    reporter_name = db.Column(db.String(100), nullable=True)
    reporter_email = db.Column(db.String(150), nullable=True)
    reporter_phone = db.Column(db.String(30), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "reported_at": self.reported_at.isoformat(),
            "lat": self.lat,
            "lon": self.lon,
            "alert_code": self.alert_code,
            "description": self.description,
            "photo_url": self.photo_url,
            "tag": self.tag,
            "reporter_name": self.reporter_name,
            "reporter_email": self.reporter_email,
            "reporter_phone": self.reporter_phone,
        }

    def __repr__(self):
        return f"<Incident id={self.id} alert_code={self.alert_code} tag={self.tag}>"

class Admin(db.Model):
    __tablename__ = "admins"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(150), nullable=False)
    phone_ro = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(150), nullable=False, unique=True)

    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "phone_ro": self.phone_ro,
            "email": self.email,
            "created_at": self.created_at.isoformat(),
        }

    def __repr__(self):
        return f"<Admin id={self.id} email={self.email}>"
