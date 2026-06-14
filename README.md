# Fitness-Gen
This AI - powered website uses supabase(POSTGRESQL) and FASTAPI to present fitness workout routines according to user's goal, experience and body (height, weight, and age)
## Project Structure

```text
Fitness-Gen/
├── app/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── auth.py
│   │   │   ├── nutrition.py
│   │   │   └── workout.py
│   │   └── __init__.py
│   ├── core/
│   ├── db/
│   ├── schemas/
│   ├── services/
│   ├── __init__.py
│   └── main.py
├── venv/
├── .env
├── .gitignore
├── LICENSE
├── README.m
└── requirements.txt
``` 
## Endpoints
### Authentication
    GET api/auth/home
    POST api/auth/signup
    POST api/auth/signup/profile
### Workouts
    */api/workout/generate