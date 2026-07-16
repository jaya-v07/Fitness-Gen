from app.db.supabase import supabase
from app.services.gemini_service import GeminiService
from fastapi import HTTPException
from datetime import datetime, timedelta, timezone
class WorkoutService:
    def __init__(self):
        self.gemini_service = GeminiService()

    def generate_workout(self, user_id: str, goal: str, experience: str, age: float, weight: float, height: float) -> dict:
      
        existing = supabase.table("workout_plans").select("created_at").eq("user_id", user_id).execute()
        
        if existing.data:
            # Parse the UTC timestamp string from Supabase (e.g., '2026-06-13T17:15:00+00:00')
            # Replacing 'Z' handles standard ISO formatting variations
            raw_timestamp = existing.data[0]["created_at"].replace("Z", "+00:00")
            last_updated = datetime.fromisoformat(raw_timestamp)
            
            # Define your cooldown threshold duration (e.g., 5 minutes)
            cooldown_duration = timedelta(minutes=5)
            current_time = datetime.now(timezone.utc)
            
            # Calculate remaining time
            time_passed = current_time - last_updated
            if time_passed < cooldown_duration:
                remaining_time = cooldown_duration - time_passed
                minutes_left = int(remaining_time.total_seconds() // 60)
                seconds_left = int(remaining_time.total_seconds() % 60)
                
                # 🚨 Trigger a clean error back to the router layer
                raise ValueError(
                    f"Generation is on cooldown. Please wait another {minutes_left}m {seconds_left}s before regenerating."
                )
        
        try:
            # ai_response = self.gemini_service.generate_workout_plan(
            #     goal=goal, 
            #     experience=experience, 
            #     age=age, 
            #     weight=weight, 
            #     height=height)

            ai_response={
                "bitch": "workout plan goes here"
            }
        
            supabase_payload = {
                         "user_id": user_id,
                            "plan": ai_response  ,
                            "created_at": datetime.now(timezone.utc).isoformat()  # Store in UTC
                        }
            response = supabase.table("workout_plans").upsert(supabase_payload,on_conflict="user_id").execute()
            return response.data[0]
        except Exception as e:
            # Fallback for unexpected application-level crashes
            raise HTTPException(status_code=500, detail=f"Error generating workout: {str(e)}")
            

    def get_workout_by_user_id(self, user_id: str) -> dict | None:
            response = supabase.table("workout_plans").select("*").eq("user_id", user_id).execute()
            if response.data:
                return response.data[0]
            return None