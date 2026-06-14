from unittest import case

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
        # 1. Catch validation errors returned directly in the response object
        if hasattr(auth_response, 'error') and auth_response.error is not None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, 
                detail=auth_response.error.message
            )
        # 2. Catch edge cases where user is missing but no error object was attached
        if not auth_response.user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, 
                detail="Signup failed. Please check your credentials."
            )
        return {
            "status": "success",
            "message": "Account created!",
            "user_id": auth_response.user.id
        }
    except HTTPException as http_ex:
        # Re-raise our own HTTPExceptions so they don't get swallowed by the generic block
        raise http_ex
    except Exception as e:
        print(f"🔴 EXCEPTION CAUGHT: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail=str(e)
        )

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