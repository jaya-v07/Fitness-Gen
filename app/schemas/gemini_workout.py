from pydantic import BaseModel, Field
from typing import List

class ExerciseItem(BaseModel):
    exercise_name: str = Field(description="Name of the exercise (e.g., Barbell Bench Press)")
    sets: int = Field(description="Number of working sets")
    reps: str = Field(description="Target repetition range or cue (e.g., '8-12' or 'Failure')")
    coaching_cue: str = Field(description="Short form tip focused on safety and form mechanics")

class DailyRoutine(BaseModel):
    day: str = Field(description="Day of the week (e.g., Monday, Tuesday)")
    focus: str = Field(description="Muscle groups targeted or designated 'Rest Day'")
    exercises: List[ExerciseItem] = Field(default=[], description="List of movements for training days")

class FullWorkoutPlanSchema(BaseModel):
    weekly_split_name: str = Field(description="Descriptive name of strategy (e.g., PPL, Upper/Lower)")
    routines: List[DailyRoutine] = Field(default=[], description="Detailed daily breakdown of the workout plan")