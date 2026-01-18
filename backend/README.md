# Event Reporting Platform – Backend

Backend REST API pentru raportarea incidentelor, cu suport pentru:
- stocare in baza de date (PostgreSQL),
- upload optional de imagini in Firebase Storage,
- notificari automate (mock) catre administratori.

## API Endpoints

### Incidents

- POST /api/incidents  
  Creeaza un incident (JSON sau multipart/form-data, cu poza optionala)

- GET /api/incidents  
  Returneaza toate incidentele

- GET /api/incidents/<id>  
  Returneaza un incident dupa ID

### Admins

- POST /api/admins  
  Creeaza un administrator

- GET /api/admins  
  Listeaza administratorii


## Exemple

### Vizualizare incidente

curl http://localhost:5000/api/incidents

### Inserare incident (JSON)

curl -X POST http://localhost:5000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{
    "lat": 44.4268,
    "lon": 26.1025,
    "alert_code": "FIRE",
    "description": "Test incident JSON",
    "tag": "critical"
  }'

### Inserare incident cu poza (Firebase)

curl -X POST http://localhost:5000/api/incidents \
  -F "lat=44.4268" \
  -F "lon=26.1025" \
  -F "alert_code=FIRE" \
  -F "description=Incident cu poza Firebase" \
  -F "tag=critical" \
  -F "photo=@Images/fire.jpg"


## Rulare locala
1. Pornire baza de date (Docker)
cd backend
docker-compose up -d

2. Pornire backend
cd backend
python app.py

3. Pornire frontend
pnpm dev

## Script util
Inserare date demo in DB

python add_incidents_db.py


## Firebase Storage – Upload imagini
Upload-ul de imagini este optional si este realizat folosind
Firebase Admin SDK (server-side).

### Pasi de configurare Firebase
1) Acceseaza Firebase Console
https://console.firebase.google.com

2) Selecteaza proiectul: event-reporting

3) Activeaza Firebase Storage si creeaza bucket-ul implicit

4) Asigura-te ca ai rol Editor sau Owner in proiect (doar aceste
roluri pot genera chei Firebase Admin)

5) Mergi la: Project Settings - Service Accounts - Firebase Admin SDK

6) Genereaza o cheie noua (JSON)

7) Salveaza fisierul ca: backend/firebase-service-account.json

8) Configurare variabile de mediu in fisierul backend/.env:

FIREBASE_CREDENTIALS=backend/firebase-service-account.json
FIREBASE_STORAGE_BUCKET=event-reporting-fdc6f.firebasestorage.app

### Nota 
Fisierul firebase-service-account.json ofera acces complet la Firebase. Fiecare
trebuie sa isi genereze propria cheie. Cheia nu se urca pe Git. Fisierul este exclus
automat prin .gitignore .

## Notificari
La crearea unui incident:

	se trimit notificari mock catre toti administratorii

	simulare email / SMS (output in consola)

### Implementare:

backend/notifications.py
Aceasta logica poate fi extinsa ulterior cu servicii reale (SendGrid, Twilio etc.).