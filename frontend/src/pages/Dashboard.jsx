import  { useState, navigateTo } from "react";
import Button from "../components/button.jsx";
// import { api } from "../service/api.js";

const GOALS = [
  { value: "lose_weight", label: "Lose weight" },
  { value: "build_muscle", label: "Build muscle" },
  { value: "improve_endurance", label: "Improve endurance" },
  { value: "general_fitness", label: "General fitness" },
];

const EXPERIENCE = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

/**
 * Step 2 of onboarding: biometric profile. Backend expects `exp` here
 * (NOT `experience`), so we keep that mapping isolated to this file —
 * generation later uses `experience`.
 */
export default function Dashboard({ setView, navigateTo }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState(GOALS[0].value);
  const [exp, setExp] = useState(EXPERIENCE[0].value);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Please enter your name.");
    const ageNum = parseInt(age, 10);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (!ageNum || ageNum < 10 || ageNum > 100)
      return setError("Enter a valid age (10–100).");
    if (!weightNum || weightNum <= 0)
      return setError("Enter a valid weight.");
    if (!heightNum || heightNum <= 0)
      return setError("Enter a valid height.");

    setLoading(true);
    // try {
    //   await api.saveProfile({
    //     id: userId,
    //     name: name.trim(),
    //     age: ageNum,
    //     weight: weightNum,
    //     height: heightNum,
    //     goal,
    //     exp, // schema uses `exp` for profile setup
    //   });
    //   setView("dashboard");
    // } catch (err) {
    //   setError(err.detail || err.message || "Could not save profile.");
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tight">
            Tell us about you
          </h1>
          <p className="mt-2 text-zinc-400">
            Step 2 of 2 — biometric profile.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl space-y-5"
        >
          {error && (
            <div className="bg-red-950/60 border border-red-700 text-red-200 text-sm rounded-lg px-4 py-2">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm text-zinc-300 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              placeholder="Alex"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                placeholder="28"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                placeholder="75.0"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                step="0.1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                placeholder="178"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">Goal</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              >
                {GOALS.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Experience
              </label>
              <select
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              >
                {EXPERIENCE.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
                <Button 
           children="go back"
           onClick={() => navigateTo('signup')}
           / >
          <Button type="submit" loading={loading} className="w-full">
            Finish setup
          </Button>
        </form>
      </div>
    </div>
  );
}