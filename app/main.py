from fastapi import FastAPI
from app.api.__init__ import api_router 

app = FastAPI(
    title="FitnessGen API",
    description="API for generating personalized workout plans based on user input.",
    version="1.0.0"
)
app.include_router(api_router,prefix="/api")
