import { useEffect, useState } from "react";

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((currentTheme) => !currentTheme)}
      className="rounded-full border border-soft-rose/70 bg-surface px-3 py-2 text-sm font-semibold text-deep-charcoal shadow-sm transition-all hover:-translate-y-0.5 hover:bg-champagne/40"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀ Light" : "☾ Dark"}
    </button>
  );
}
