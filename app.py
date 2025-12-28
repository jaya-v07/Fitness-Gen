import streamlit as st
from openai import OpenAI

client = OpenAI()

st.set_page_config(page_title="Fitness Generator")

st.title("AI Fitness Workout Generator")

age=st.selectbox(
"Age bracket",["10+", "20+","30+","40+","50+"]

)
fatigue=st.selectbox(
"Fatigue Level",["Low", "Medium", "High"]
)

goal = st.selectbox(
    "Fitness Goal",
    ["Weight Loss", "Muscle Gain", "General Fitness"]
)

level = st.selectbox(
    "Experience Level",
    ["Beginner", "Intermediate"]
)
duration = st.selectbox(
"Duration of workout (in minutes)",[15,30,45,60 ]
)
if st.button("Generate Workout"):
    with st.spinner("Generating workout..."):
        prompt = f"""
Create a safe {level} workout plan for {goal} for a duration of {duration} appropriate for people of age {age} with {fatigue} fatigue level.
List 5 exercises with sets and reps. Create a separate heading for explanations of each exercise
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        st.write(response.choices[0].message.content)

