
from typing import Any, Dict

from pydantic import BaseModel

class WorkoutRequest(BaseModel):
    user_id: str
    age: int
    weight: float
    height: float
    goal: str
    experience: str
    

class WorkoutResponse(BaseModel):
  user_id: str
  plan: Dict[str,Any]
  
#later, i want to add img/gif demonstrating the workout