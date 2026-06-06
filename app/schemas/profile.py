from pydantic import BaseModel

class ProfileCreate(BaseModel):
    id: str
    name: str
    age: int
    weight: float
    height: float
    goal: str
    exp : str
    

class ProfileResponse(BaseModel):
    class config:
        from_attributes = True

class SignUpRequest(BaseModel):
    email: str
    password: str