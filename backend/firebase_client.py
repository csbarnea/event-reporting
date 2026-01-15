import os
import firebase_admin
from firebase_admin import credentials, storage

FIREBASE_CREDENTIALS = os.environ.get(
    "FIREBASE_CREDENTIALS",
    "firebase-service-account.json", 
)

FIREBASE_STORAGE_BUCKET = os.environ.get(
    "FIREBASE_STORAGE_BUCKET",
    "flash-rock-427612-j3.firebasestorage.app",
)

# Inițializare Firebase 
if not firebase_admin._apps:
    cred = credentials.Certificate(FIREBASE_CREDENTIALS)
    firebase_admin.initialize_app(cred, {
        "storageBucket": FIREBASE_STORAGE_BUCKET,
    })

bucket = storage.bucket()


def upload_incident_photo(file_obj, filename: str) -> str:
    """
    Urcă o poză în Firebase Storage.
    file_obj = obiectul FileStorage din Flask (request.files["photo"])
    filename = numele în bucket (ex: incidents/2025-...jpg)
    Returnează URL-ul public.
    """
    blob = bucket.blob(filename)
    blob.upload_from_file(file_obj, content_type=file_obj.mimetype)
    blob.make_public()  # pentru demo: link direct accesibil
    return blob.public_url
