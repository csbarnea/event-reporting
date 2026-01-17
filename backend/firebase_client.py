import os
import firebase_admin
from firebase_admin import credentials, storage

_bucket = None  # lazy init


def _get_bucket():
    global _bucket

    if _bucket is not None:
        return _bucket

    firebase_credentials = os.environ.get("FIREBASE_CREDENTIALS")
    firebase_bucket = os.environ.get("FIREBASE_STORAGE_BUCKET")

    if not firebase_credentials or not firebase_bucket:
        raise RuntimeError(
            "Firebase not configured. "
            "Set FIREBASE_CREDENTIALS and FIREBASE_STORAGE_BUCKET."
        )

    if not firebase_admin._apps:
        cred = credentials.Certificate(firebase_credentials)
        firebase_admin.initialize_app(
            cred,
            {"storageBucket": firebase_bucket},
        )

    _bucket = storage.bucket()
    return _bucket


def upload_incident_photo(file_obj, filename: str) -> str:
    """
    Urca o poza in Firebase Storage si returneaza URL public.
    """
    bucket = _get_bucket()

    blob = bucket.blob(filename)
    blob.upload_from_file(file_obj, content_type=file_obj.mimetype)
    blob.make_public()

    return blob.public_url
