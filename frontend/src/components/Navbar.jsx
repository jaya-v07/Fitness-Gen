import { useState, useEffect, useRef } from "react";
import {
  Dumbbell,
  Sparkles,
  ChevronDown,
  User,
  CreditCard,
  LogOut,
  Library,
  TrendingUp,
  ClipboardList,
  Crown,
} from "lucide-react";
import ThemeToggle from "./theme-toggle.jsx";

// ──────────────────────────────────────────────
// 🔀  Toggle this flag to test Logged-In vs Logged-Out states
// ──────────────────────────────────────────────
const isLoggedIn = true;

// ──────────────────────────────────────────────
// Navigation link definitions (center links)
// ──────────────────────────────────────────────
const navLinks = [
  { label: "Generate Plan", href: "#generate", icon: Sparkles, accent: true },
  { label: "My Plans", href: "#plans", icon: ClipboardList },
  { label: "Progress", href: "#progress", icon: TrendingUp },
  { label: "Exercise Library", href: "#library", icon: Library },
];

// ──────────────────────────────────────────────
// Profile dropdown menu items
// ──────────────────────────────────────────────
const profileMenuItems = [
  { label: "Profile", icon: User, href: "#profile" },
  { label: "Subscription", icon: CreditCard, href: "#subscription" },
  { label: "Log Out", icon: LogOut, href: "#logout", danger: true },
];

export default function Navbar({ navigateTo }) {
  // Profile dropdown state
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Ref for closing the dropdown when clicking outside
  const profileRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-soft-rose/20
        bg-bg/80 backdrop-blur-md
        transition-shadow duration-300
        shadow-[0_1px_8px_rgba(44,42,41,0.04)]
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* ━━━━━━━━ LEFT: Logo + Brand ━━━━━━━━ */}
        <a
          href="#"
          onClick={(e) => {
            if (navigateTo) {
              e.preventDefault();
              navigateTo('home');
            }
          }}
          className="group flex items-center gap-2.5 text-deep-charcoal no-underline cursor-pointer"
        >
          {/* Animated dumbbell icon */}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
            <Dumbbell size={18} strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Fitness<span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Gen</span>
          </span>
        </a>

        {/* ━━━━━━━━ CENTER: Nav Links (only when logged in) ━━━━━━━━ */}
        {isLoggedIn && (
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`
                      group relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium no-underline transition-all duration-200
                      ${
                        link.accent
                          ? "border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 hover:border-emerald-500/50 hover:bg-emerald-500/10"
                          : "text-earth-taupe hover:bg-champagne/30 hover:text-deep-charcoal"
                      }
                    `}
                  >
                    <Icon
                      size={15}
                      className={`transition-transform duration-200 group-hover:scale-110 ${
                        link.accent ? "text-emerald-500" : ""
                      }`}
                    />
                    {link.label}
                    {/* Hover underline indicator */}
                    <span
                      className={`absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-200 group-hover:w-4/5 ${
                        link.accent ? "bg-emerald-500" : "bg-earth-taupe/40"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        {/* ━━━━━━━━ RIGHT: CTA + Profile / Auth Buttons ━━━━━━━━ */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isLoggedIn ? (
            <>
              {/* Go Premium CTA */}
              <a
                href="#premium"
                className="
                  flex items-center gap-1.5 rounded-full
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  px-4.5 py-2 text-sm font-semibold text-white
                  shadow-[0_2px_12px_rgba(16,185,129,0.35)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)]
                  active:translate-y-0
                  no-underline
                "
              >
                <Crown size={15} />
                Go Premium
              </a>

              {/* Profile avatar + dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileDropdownOpen((prev) => !prev)}
                  className="
                    flex cursor-pointer items-center gap-1.5 rounded-full border border-soft-rose/40
                    bg-surface px-2 py-1.5 text-deep-charcoal
                    shadow-sm transition-all duration-200
                    hover:border-soft-rose/60 hover:shadow-md
                  "
                  aria-label="Profile menu"
                  aria-expanded={profileDropdownOpen}
                >
                  {/* Avatar circle */}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-muted-gold text-xs font-bold text-deep-charcoal">
                    JA
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-earth-taupe transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                {profileDropdownOpen && (
                  <div
                    className="
                      absolute right-0 top-full mt-2 w-52 origin-top-right
                      animate-[fadeSlideIn_0.18s_ease-out]
                      rounded-xl border border-soft-rose/20
                      bg-surface p-1.5
                      shadow-[0_8px_30px_rgba(44,42,41,0.12)]
                    "
                  >
                    {profileMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`
                            flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium no-underline transition-colors duration-150
                            ${
                              item.danger
                                ? "text-red-500 hover:bg-red-50"
                                : "text-deep-charcoal hover:bg-champagne/30"
                            }
                          `}
                        >
                          <Icon size={16} />
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* ── Logged-Out: Show Log In & Sign Up ── */
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => navigateTo?.("signup")}
                className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-deep-charcoal transition-all duration-200 hover:bg-champagne/30"
              >
                Log In
              </button>
              <button
                onClick={() => navigateTo?.("signup")}
                className="
                  cursor-pointer rounded-full
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  px-5 py-2 text-sm font-semibold text-white
                  shadow-md transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-lg
                  active:translate-y-0
                "
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
