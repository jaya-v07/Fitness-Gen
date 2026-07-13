import Button from "../components/button.jsx";
import FormInput from "../components/form-input.jsx";
import { useProfileForm } from "../hooks/useProfileForm.js";
import { GOALS, EXPERIENCE } from "../constants/DashOptions.js";
import ThemeToggle from "../components/theme-toggle.jsx";

export default function Dashboard({ navigateTo, userId }) {
  const { formData, loading, error, handleChange, handleSubmit } = useProfileForm(userId, navigateTo);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-bg px-6 py-10 text-deep-charcoal">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tight">Tell us about you</h1>
          <p className="mt-2 text-earth-taupe">Step 2 of 2 — biometric profile.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-soft-rose/30 bg-surface p-8 shadow-[0_4px_20px_rgba(44,42,41,0.03)]"
        >
          {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <FormInput
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Alex"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="Age"
              type="number"
              value={formData.age}
              onChange={(e) => handleChange("age", e.target.value)}
              placeholder="28"
            />
            <FormInput
              label="Weight (kg)"
              type="number"
              step="0.1"
              value={formData.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              placeholder="75.0"
            />
            <FormInput
              label="Height (cm)"
              type="number"
              step="0.1"
              value={formData.height}
              onChange={(e) => handleChange("height", e.target.value)}
              placeholder="178"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Goal"
              type="select"
              value={formData.goal}
              onChange={(e) => handleChange("goal", e.target.value)}
            >
              {GOALS.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </FormInput>

            <FormInput
              label="Experience"
              type="select"
              value={formData.exp}
              onChange={(e) => handleChange("exp", e.target.value)}
            >
              {EXPERIENCE.map((x) => (
                <option key={x.value} value={x.value}>{x.label}</option>
              ))}
            </FormInput>
          </div>

          <div className="flex gap-4 pt-2">
            <Button type="button" onClick={() => navigateTo("signup")} className="w-1/3">
              Go back
            </Button>
            <Button type="submit" loading={loading} className="w-2/3">
              Finish setup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
