
from fastapi import APIRouter, HTTPException, status
from app.schemas.workout import WorkoutRequest, WorkoutResponse
from app.services.workout_service import WorkoutService

workout_service = WorkoutService()
router = APIRouter()


@router.post("/generate", response_model=dict)
def generate_workout(request: WorkoutRequest):
    try:
        workout_plan = workout_service.generate_workout(
            user_id=request.user_id,  
            goal=request.goal,
            experience=request.experience ,
            age=request.age,
            weight=request.weight,
            height=request.height
        )
        return workout_plan
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
