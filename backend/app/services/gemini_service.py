from google import genai
from google.genai import types
from backend.app.schemas.gemini_workout import FullWorkoutPlanSchema
import os, json
class GeminiService:
    def __init__(self):
        self.client = genai.Client()
        self.model_name = "gemini-2.5-flash"

    def generate_workout_plan(self, goal: str, experience: str, age: float, weight: float, height: float) -> dict:
        prompt = f"""
        You are an elite AI Strength Coach and personal trainer. 
        Design a highly tailored weekly workout regimen optimized for this person whose goal is {goal} and has {experience} experience in fitness training.:

        Biometric Context:
        - Age: {age} years old
        - Weight: {weight} kg
        - Height: {height} cm

        """
        response = self.client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=FullWorkoutPlanSchema, 
                temperature=0.7,
            ),
        )
        if hasattr(response, "parsed") and response.parsed:
            return response.parsed.model_dump()
        else:
            return json.loads(response.text)
        