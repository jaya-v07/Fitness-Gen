import { useState } from "react";

const Signup = ({ navigateTo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    const response= await fetch(import.meta.env.VITE_SIGNUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      setError("");
      alert("Signup successful!");
} 
else {
  // If it's a 400 Bad Request, show the exact message your backend sent over
  const errorData = await response.json();
  
  if (errorData && errorData.detail) {
    setError(errorData.detail); 
  } else {
    setError("An unexpected error occurred during signup.");
  }
}
  }
  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h1 className="text-white text-3xl font-bold mb-6">
          Sign Up  |   Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-zinc-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-zinc-800 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded text-white font-semibold"
          >
            Sign Up
          </button>
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}
        </form>
                  
        {/* <p className="text-gray-400 mt-4 text-center">
          Don't have an account?
          <button
            onClick={() => navigateTo("signup")}
            className="text-blue-400 ml-2"
          >
            Sign Up
          </button>
        </p> */}
      </div>
    </main>
  );
};

export default Signup ;