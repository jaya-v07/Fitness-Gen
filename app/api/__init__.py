from fastapi import APIRouter
# Import your sub-routers from the routes subdirectory
from app.api.routes import auth, workout 

api_router = APIRouter()

# Register your endpoints with clean prefixes and Swagger tags
api_router.include_router(auth.auth_router, prefix="/auth", tags=["Authentication"])
api_router.include_router(workout.router, prefix="/workout", tags=["Workouts"])