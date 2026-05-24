import { Fragment } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const MARQUEE_ITEMS = [
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Figma",
  "REST APIs",
  "RBAC",
  "Nuxt.js",
  "Vue.js 3",
  "React.js",
  "Express.js",
  "Pinia",
  "GitLab",
  "GA4",
  "Webflow",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero: React.FC = () => {
  const { hero } = usePortfolioData();

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col overflow-hidden bg-surface-dark"
    >
      {/* Animated ambient — teal left */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-48 w-[650px] h-[650px] bg-accent rounded-full blur-[160px] pointer-events-none"
      />
      {/* Animated ambient — brand right */}
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.14, 0.22, 0.14] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-brand rounded-full blur-[160px] pointer-events-none"
      />
      {/* Bottom spreading glow — rises and spreads */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scaleX: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[900px] h-[180px] bg-accent rounded-full blur-[90px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          scaleX: [1, 1.1, 1],
          opacity: [0.07, 0.13, 0.07],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-10 left-1/3 w-[500px] h-[120px] bg-brand rounded-full blur-[80px] pointer-events-none"
      />

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-20">
        {/* Availability badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card border border-white/[0.10] text-xs font-medium text-text-muted mb-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Name — massive display */}
        <motion.div {...fadeUp(0.15)} className="mb-7">
          <h1
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
          >
            <span className="block text-text-base">Manmohan</span>
            <span className="block bg-gradient-to-r from-accent-light via-accent to-amber-400 bg-clip-text text-transparent">
              Maloo
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.32)}
          className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-9"
        >
          Senior Full Stack Developer crafting scalable web platforms with{" "}
          <strong className="text-text-base font-semibold">Nuxt</strong>,{" "}
          <strong className="text-text-base font-semibold">Vue</strong>,{" "}
          <strong className="text-text-base font-semibold">React</strong> &amp;{" "}
          <strong className="text-text-base font-semibold">Node</strong>.
          Currently shipping an HRIS platform to production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.44)}
          className="flex flex-wrap items-center justify-center gap-3 mb-9"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200"
          >
            View work
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-white/[0.07] border border-white/[0.10] text-text-base text-sm font-semibold rounded-xl"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Get in touch
          </a>
        </motion.div>

        {/* Meta */}
        <motion.div
          {...fadeUp(0.54)}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7 text-sm text-text-subtle"
        >
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-accent/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {hero.location}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-accent/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            {hero.availability}
          </span>
        </motion.div>
      </div>

      {/* Infinite marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 py-5 border-t border-white/[0.06] bg-surface-dark/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="animate-marquee items-center gap-8 sm:gap-10">
          {[
            ...MARQUEE_ITEMS,
            ...MARQUEE_ITEMS,
            ...MARQUEE_ITEMS,
            ...MARQUEE_ITEMS,
          ].map((item, i) => (
            <Fragment key={`${item}-${i}`}>
              <span className="text-sm font-medium text-text-subtle">
                {item}
              </span>
              <span
                className="h-3 w-3 rotate-45 rounded-[2px] bg-accent shadow-[0_0_14px_rgba(34,211,238,0.45)]"
                aria-hidden="true"
              />
            </Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
