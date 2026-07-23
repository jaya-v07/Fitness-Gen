import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
      className="flex cursor-pointer items-center gap-1.5 rounded-full border border-soft-rose/40 bg-surface px-3 py-1.5 text-xs font-semibold text-deep-charcoal shadow-sm transition-all duration-200 hover:border-soft-rose/60 hover:bg-champagne/30"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <>
          <Sun size={14} className="text-amber-500" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={14} className="text-indigo-400" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}

