import streamlit as st
from openai import OpenAI

client = OpenAI()

st.set_page_config(page_title="Fitness Generator")

st.title("AI Fitness Workout Generator")

goal = st.selectbox(
    "Fitness Goal",
    ["Weight Loss", "Muscle Gain", "General Fitness"]
)

level = st.selectbox(
    "Experience Level",
    ["Beginner", "Intermediate"]
)

if st.button("Generate Workout"):
    with st.spinner("Generating workout..."):
        prompt = f"""
Create a safe {level} workout plan for {goal}.
List 5 exercises with sets and reps.
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )

        st.write(response.choices[0].message.content)

