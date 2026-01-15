# config.py
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Fallback values for database connection if not specified in .env
    DB_USER = os.getenv("DB_USER", "incidents_user")
    DB_PASSWORD = os.getenv("DB_PASSWORD", "incidents_password")
    DB_HOST = os.getenv("DB_HOST", "localhost")
    DB_PORT = os.getenv("DB_PORT", "5433") 
    DB_NAME = os.getenv("DB_NAME", "incidents_db")

    SQLALCHEMY_DATABASE_URI = (
        f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    JSON_SORT_KEYS = False
