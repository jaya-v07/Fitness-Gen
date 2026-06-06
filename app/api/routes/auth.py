from fastapi import APIRouter, HTTPException, status
from app.schemas.profile import SignUpRequest, ProfileCreate # Just email and password
from app.db.supabase import supabase
auth_router = APIRouter()

@auth_router.post("/signup", status_code=status.HTTP_201_CREATED)
def sign_up_user(request: SignUpRequest):
    try:
        # Create the user in Supabase Auth ONLY
        auth_response = supabase.auth.sign_up({
            "email": request.email,
            "password": request.password
        })
        
        if not auth_response.user:
            raise HTTPException(status_code=400, detail="Signup failed.")
            
        # Return the user_id back to the frontend so it knows who just logged in
        return {
            "status": "success",
            "message": "Account created!",
            "user_id": auth_response.user.id
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@auth_router.post("/signup/profile", status_code=status.HTTP_201_CREATED)
def create_user_profile(request: ProfileCreate):
    try:
        profile_payload = {
            "id": request.id,
            "name": request.name,
            "age": request.age,
            "weight": request.weight,
            "height": (request.height),
            "goal": request.goal,
            "experience": request.exp
        }
        response = supabase.table("profiles").insert(profile_payload).execute()
        return {"status": "success", "profile_data": response.data[0]}
        
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))