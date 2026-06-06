from pydantic import BaseModel

class ProfileCreate(BaseModel):
    name: str
    age: int
    weight: float
    height: float
    goal: str
    exp : str
    

class ProfileResponse(BaseModel):
    class config:
        from_attributes = True