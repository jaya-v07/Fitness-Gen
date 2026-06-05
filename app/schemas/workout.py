
from pydantic import BaseModel

class WorkoutRequest(BaseModel):
    age: int
    weight: float
    height: float
    goal: str
    

class WorkoutResponse(BaseModel):
    workout: str
    duration: int
#later, i want to add img/gif demonstrating the workout