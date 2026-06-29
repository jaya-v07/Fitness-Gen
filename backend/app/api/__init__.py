from fastapi import APIRouter
# Import your sub-routers from the routes subdirectory
from backend.app.api.routes import workout
from backend.app.api.routes import auth 

api_router = APIRouter()

# Register your endpoints with clean prefixes and Swagger tags
api_router.include_router(auth.auth_router, prefix="/auth", tags=["Authentication"])
api_router.include_router(workout.router, prefix="/workout", tags=["Workouts"])