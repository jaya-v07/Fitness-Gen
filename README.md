# Fitness-Gen
This AI -powered website uses supabase and FASTAPI to present fitness workout routines according to user's goal, experience and body (height, weight, and age)
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
├── README.md
└── requirements.txt
```text

## Endpoints
### Authentication
    */api/auth/signup
    */api/auth/signup/profile
### Workouts
    */api/workout/generate