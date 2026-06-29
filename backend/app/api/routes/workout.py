
from fastapi import APIRouter, HTTPException, status
from backend.app.schemas.workout import WorkoutRequest, WorkoutResponse
from backend.app.services.workout_service import WorkoutService

workout_service = WorkoutService()
router = APIRouter()

@router.post("/generate", response_model=WorkoutResponse, status_code=status.HTTP_201_CREATED)
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
        raise HTTPException(status_code=500, detail=f"Error generating workout: {str(e)}")
#get workout by user id

@router.get("/{user_id}", response_model=WorkoutResponse, status_code=status.HTTP_200_OK)
def get_workout(user_id: str):
    try:
        workout_plan = workout_service.get_workout_by_user_id(user_id)
        if workout_plan is None:
            raise HTTPException(status_code=404, detail="Workout plan not found")
        return {
            "id": workout_plan.get("id"),
            "plan": workout_plan.get("plan")  # Return the 'plan' part of the workout data
        }
    except ValueError as val_err:
        # 🎯 Catch our specific cooldown message and send a beautiful 400 error to React!
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail=str(val_err)
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching workout: {str(e)}")
    
