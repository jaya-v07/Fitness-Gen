from concurrent.futures import process
import os
from fastapi import FastAPI
from app.api.__init__ import api_router 
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="FitnessGen API",
    description="API for generating personalized workout plans based on user input.",
    version="1.0.0"
)
app.include_router(api_router,prefix="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("REACT_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def root():
    return {"message": "Welcome to the FitnessGen API! Visit /docs for API documentation."}