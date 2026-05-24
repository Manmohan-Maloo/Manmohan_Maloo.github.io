import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

const SunIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.88 }}
      className="relative flex items-center w-12 h-6 rounded-full p-0.5 border transition-colors duration-300"
      style={{
        background: isDark ? "rgba(124,58,237,0.15)" : "rgba(251,191,36,0.15)",
        borderColor: isDark ? "rgba(124,58,237,0.3)" : "rgba(251,191,36,0.4)",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Moon icon on left track */}
      <span
        className="absolute left-1 text-brand-bright"
        style={{ opacity: isDark ? 0.9 : 0.3 }}
      >
        <MoonIcon />
      </span>
      {/* Sun icon on right track */}
      <span
        className="absolute right-1 text-amber-400"
        style={{ opacity: isDark ? 0.3 : 0.9 }}
      >
        <SunIcon />
      </span>

      {/* Thumb */}
      <motion.div
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className="w-5 h-5 rounded-full z-10"
        style={{
          background: isDark
            ? "linear-gradient(135deg,#7c3aed,#06b6d4)"
            : "linear-gradient(135deg,#f59e0b,#ef4444)",
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
