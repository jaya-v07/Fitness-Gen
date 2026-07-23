import { useState } from "react";
import { GOALS, EXPERIENCE } from "../constants/OnboardingForm.js";
import { api } from "../service/api.js";

export function useProfileForm(userId, onSuccess) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: GOALS[0].value,
    exp: EXPERIENCE[0].value,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const { name, age, weight, height } = formData;

    if (!name.trim()) return setError("Please enter your name.");
    
    const ageNum = parseInt(age, 10);
    if (!ageNum || ageNum < 10 || ageNum > 100) {
      return setError("Enter a valid age (10–100).");
    }
    
    const weightNum = parseFloat(weight);
    if (!weightNum || weightNum <= 0) return setError("Enter a valid weight.");
    
    const heightNum = parseFloat(height);
    if (!heightNum || heightNum <= 0) return setError("Enter a valid height.");
    if (!userId) return setError("Please create your account before completing your profile.");

    setLoading(true);
    try {
      await api.saveProfile({
        ...formData,
        id: userId,
        name: name.trim(),
        age: ageNum,
        weight: weightNum,
        height: heightNum,
      });
      onSuccess("dashboard");
    } catch (err) {
      setError(err.response?.data?.detail || "Could not save profile.");
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
}