from fastapi import FastAPI
from pydantic import BaseModel
from openai import OpenAI

client = OpenAI()
app = FastAPI()

class WorkoutInput(BaseModel):
    age: str
    fatigue: str
    goal: str
    level: str
    duration: int

@app.post("/generate")
def generate_workout(data: WorkoutInput):
    prompt = f"""
Create a safe {data.level} workout plan for {data.goal}
for a duration of {data.duration} minutes
appropriate for people of age {data.age}
with {data.fatigue} fatigue level.

List 5 exercises with sets and reps.
Create a separate heading for explanations of each exercise.
"""

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return {
        "workout": response.choices[0].message.content
    }
