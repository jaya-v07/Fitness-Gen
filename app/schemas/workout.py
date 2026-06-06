
from pydantic import BaseModel

class WorkoutRequest(BaseModel):
    user_id: str
    age: int
    weight: int
    height: int
    goal: str
    experience: str
    

class WorkoutResponse(BaseModel):
    plan: str
  
#later, i want to add img/gif demonstrating the workout