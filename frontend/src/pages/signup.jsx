import { useState } from "react";
import Button from "../components/button.jsx";
import { api } from "../service/api.js";

const Signup = ({ navigateTo, onAuthenticated }) => {
  const [mode, setMode] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = mode === "signup"
        ? await api.signUp({ email, password })
        : await api.login({ email, password });
      onAuthenticated(response.user_id);
      navigateTo("dashboard");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
        (mode === "signup" ? "Unable to create your account." : "Unable to log in."),
      );
    }
  }
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-bg px-6 py-10">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-deep-charcoal">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-sm text-earth-taupe">
            {mode === "signup" ? "Start building a plan made for you." : "Log in to continue your fitness journey."}
          </p>
        </div>

        <div className="rounded-2xl border border-soft-rose/30 bg-surface p-7 shadow-[0_4px_20px_rgba(44,42,41,0.03)]">
          <div className="mb-6 grid grid-cols-2 rounded-xl bg-champagne/35 p-1">
            <button
              type="button"
              onClick={() => { setMode("signup"); setError(""); }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${mode === "signup" ? "bg-surface text-deep-charcoal shadow-sm" : "text-earth-taupe"}`}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => { setMode("login"); setError(""); }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${mode === "login" ? "bg-surface text-deep-charcoal shadow-sm" : "text-earth-taupe"}`}
            >
              Log In
            </button>
          </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-xl border border-soft-rose/50 bg-input px-4 py-3 text-deep-charcoal outline-none placeholder:text-earth-taupe/70 focus:border-earth-taupe focus:ring-2 focus:ring-champagne"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          / >

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-xl border border-soft-rose/50 bg-input px-4 py-3 text-deep-charcoal outline-none placeholder:text-earth-taupe/70 focus:border-earth-taupe focus:ring-2 focus:ring-champagne"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          / >

          <Button type="submit" className="w-full">
            {mode === "signup" ? "Sign Up" : "Log In"}
          </Button>
          {error && (
            <p className="text-sm text-red-700">
              {error}
            </p>
          )}
        </form>
        </div>
      </div>
    </main>
  );
};

export default Signup ;
