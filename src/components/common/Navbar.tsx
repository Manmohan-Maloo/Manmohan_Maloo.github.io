import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        style={{ willChange: "transform" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-2xl transition-colors duration-300 backdrop-blur-xl ${
          isLight
            ? scrolled
              ? "bg-white/80 border border-black/[0.10] shadow-xl shadow-black/10"
              : "bg-white/50 border border-black/[0.07]"
            : scrolled
              ? "bg-surface-dark/80 border border-white/[0.12] shadow-2xl shadow-black/40"
              : "bg-surface-dark/50 border border-white/[0.07]"
        }`}
      >
        <div className="px-4 sm:px-5">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-[11px] font-bold">
                &lt;/&gt;
              </span>
              <span className="text-base font-bold text-text-base tracking-tight">
                Manmohan<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop links with active indicator */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-brand-bright"
                        : "text-text-muted hover:text-brand-bright"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-brand-subtle"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{item}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-4 py-2 bg-accent text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Hire me
              </a>
            </div>

            {/* Mobile right */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg text-text-muted hover:text-brand-bright hover:bg-white/[0.06] transition-colors duration-200"
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile popup menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.94, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[85%] max-w-sm md:hidden bg-surface-card border border-white/[0.10] rounded-2xl p-6 shadow-2xl shadow-black/60"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-base hover:bg-white/[0.06] transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <p className="text-[11px] font-semibold text-text-subtle uppercase tracking-widest mb-4">
                Navigation
              </p>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeSection === item.toLowerCase()
                        ? "text-brand-bright bg-brand-subtle"
                        : "text-text-muted hover:text-text-base hover:bg-white/[0.06]"
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 flex items-center justify-center w-full py-3 bg-accent text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Hire me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
