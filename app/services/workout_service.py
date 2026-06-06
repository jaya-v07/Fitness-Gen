from app.db.supabase import supabase
class WorkoutService:
    def generate_workout(self, user_id: str, goal: str, experience: str, age: float, weight: float, height: float) -> dict:
        """
        Takes user parameters, bundles them into a mock profile-plan payload,
        and saves it straight into Supabase.
        """
        
        # Structure the data using your specific input items
        mock_routine = {
            "user_goal": goal,
            "user_experience_level": experience,
            "message": "Successfully captured preferences! AI generation engine coming up next."
        }
        
        supabase_payload = {
            "user_id": user_id,
            "plan": mock_routine  # Pushes your goal and experience inside the JSON column
        }
        
        # Save to your workout_plans table in the cloud
        response = supabase.table("workout_plans").insert(supabase_payload).execute()
        print("Supabase Insert exp:", experience, "age:", age, "weight:", weight, "height:", height)  # Debug log to see the full response
        return response.data[0]