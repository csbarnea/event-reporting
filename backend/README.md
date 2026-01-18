# Event Reporting Platform – Backend

Backend REST API pentru raportarea incidentelor, cu suport pentru:
- stocare in baza de date (PostgreSQL),
- upload optional de imagini in Firebase Storage,
- notificari automate catre administratori.

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

- POST /api/auth/login  
  Autentificare administrator. Returneaza JWT access_token

## Authentication (Admin)

Autentificarea administratorilor se face folosind JWT (JSON Web Token).

### Login admin
POST /api/auth/login

Body (application/json):
{
  "email": "admin@example.com",
  "password": "StrongPass!2026"
}

Response:
{
  "access_token": "<JWT_TOKEN>"
}

Token-ul JWT trebuie trimis in header-ul Authorization pentru endpoint-urile
protejate pentru administratori.
Header:
Authorization: Bearer <JWT_TOKEN>

## Migratii baza de date

Modificarile de schema sunt versionate in directorul:
backend/db_migrations/
La initializare, aceste scripturi trebuie aplicate manual sau automat
in functie de mediul de rulare.
Nota: tabelele initiale sunt create automat de backend (SQLAlchemy) la prima pornire.
Migratiile de tip ALTER TABLE presupun ca tabela exista deja.


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

2. Pornire backend (prima rulare – creeaza tabelele initiale)
python app.py

3. Aplicare migrari baza de date (obligatoriu la prima rulare)
docker exec -i incidents_postgres psql -U incidents_user -d incidents_db < db_migrations/001_add_admin_password_hash.sql

4. Repornieste backend (dupa migrare)
python app.py

5. Pornire frontend
pnpm dev

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
La crearea unui incident, backend-ul notifica automat toti administratorii existenti
in baza de date.

### Comportament implicit
Notificarile sunt simulate prin mesaje afisate in consola.
Nu se trimit emailuri reale.

### Exemplu output in consola:
[NOTIFY] Admin=admin.demo@example.com | ALERT=FIRE | TAG=critical | LOCATION=(44.4268, 26.1025)

### Notificari reale prin email (SMTP - optional)
Backend-ul suporta trimiterea de emailuri reale folosind SMTP (Gmail).

Pentru activare:
 - se seteaza variabilele SMTP in fisierul backend/.env
 - se activeaza flag-ul: NOTIFY_EMAIL_ENABLED=1

La activare:
 - se trimite un email catre fiecare administrator din baza de date
 - trimiterea este best-effort (erorile SMTP nu blocheaza crearea incidentului)

### Variabile SMTP utilizate
Urmatoarele variabile de mediu sunt utilizate pentru trimiterea emailurilor:
NOTIFY_EMAIL_ENABLED=1
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=1
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=EventReport your_email@gmail.com

### Nota
In demo exista un administrator cu email:admin.demo@example.com
Aceasta adresa este fictiva, iar emailurile catre ea vor genera mesaje de tip bounce.
Pentru testarea completa a notificarilor SMTP, este necesar fie adaugarea unui
administrator cu o adresa de email reala, fie inlocuirea adresei de demo.

### Implementare
Logica de notificare este implementata in backend/notifications.py
Aceasta poate fi extinsa ulterior cu servicii externe (SendGrid, Mailgun),
SMS (Twilio), push notifications.