import { Fragment, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import type { ColorKey, CodeChar } from "../../types/hero";

const MARQUEE_ITEMS = [
  "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Figma",
  "REST APIs", "RBAC", "Nuxt.js", "Vue.js 3", "React.js",
  "Express.js", "Pinia", "GitLab", "GA4", "Webflow",
];


// ─────────────────────────────────────────────
//  Syntax colour map  (all classes listed literally so Tailwind keeps them)
// ─────────────────────────────────────────────
const COLORS = {
  kw:   "text-violet-400",   // import const interface if
  tag:  "text-rose-400",     // script template h1 p main UButton
  attr: "text-sky-300",      // setup lang
  str:  "text-amber-300",    // string literals
  fn:   "text-yellow-300",   // ref computed navigateTo
  tp:   "text-emerald-400",  // types  Developer string boolean
  tx:   "text-slate-400",    // punctuation / plain text
  va:   "text-cyan-300",     // variables  dev stack exp onHire
  prop: "text-sky-200",      // object keys  name role open
  tmpl: "text-lime-400",     // {{ template expressions }}
  cm:   "text-slate-500",    // comments
} as const;


// ─────────────────────────────────────────────
//  Build the flat char array at module level
// ─────────────────────────────────────────────
const CHARS: CodeChar[] = [];
const tok = (text: string, k: ColorKey) => { for (const c of text) CHARS.push({ c, k }); };
const nl  = () => CHARS.push({ c: "\n", k: "tx" });

// Line 1
tok("<", "tx"); tok("script", "tag"); tok(" setup", "attr");
tok(" lang", "prop"); tok('="', "tx"); tok("ts", "str"); tok('">', "tx"); nl();

// Line 2
tok("import", "kw"); tok(" { ", "tx"); tok("ref", "fn"); tok(", ", "tx");
tok("computed", "fn"); tok(" }", "tx"); tok(" from ", "kw"); tok("'vue'", "str"); nl();

nl(); // blank

// interface
tok("interface ", "kw"); tok("Developer", "tp"); tok(" {", "tx"); nl();
tok("  ", "tx"); tok("name", "prop"); tok(": ", "tx"); tok("string", "tp"); nl();
tok("  ", "tx"); tok("role", "prop"); tok(": ", "tx"); tok("string", "tp"); nl();
tok("  ", "tx"); tok("open", "prop"); tok(": ", "tx"); tok("boolean", "tp"); nl();
tok("}", "tx"); nl();

nl(); // blank

// const dev
tok("const ", "kw"); tok("dev", "va"); tok(" = ", "tx");
tok("ref", "fn"); tok("<", "tx"); tok("Developer", "tp"); tok(">({", "tx"); nl();
tok("  ", "tx"); tok("name", "prop"); tok(": ", "tx"); tok("'Er. Manmohan'", "str"); tok(",", "tx"); nl();
tok("  ", "tx"); tok("role", "prop"); tok(": ", "tx"); tok("'Full Stack Dev'", "str"); tok(",", "tx"); nl();
tok("  ", "tx"); tok("open", "prop"); tok(": ", "tx"); tok("true", "kw"); tok(",", "tx"); nl();
tok("})", "tx"); nl();

nl(); // blank

// const stack
tok("const ", "kw"); tok("stack", "va"); tok(" = ", "tx"); tok("ref", "fn"); tok("([", "tx"); nl();
tok("  ", "tx"); tok("'Nuxt 3'", "str"); tok(", ", "tx"); tok("'Vue 3'", "str"); tok(",", "tx"); nl();
tok("  ", "tx"); tok("'TypeScript'", "str"); tok(", ", "tx"); tok("'Node.js'", "str"); tok(",", "tx"); nl();
tok("  ", "tx"); tok("'MongoDB'", "str"); tok(", ", "tx"); tok("'React'", "str"); tok(",", "tx"); nl();
tok("])", "tx"); nl();

nl(); // blank

// const exp
tok("const ", "kw"); tok("exp", "va"); tok(" = ", "tx"); tok("computed", "fn"); tok("(", "tx"); nl();
tok("  () => ", "tx"); tok("new ", "kw"); tok("Date", "tp");
tok("().getFullYear() - ", "tx"); tok("2024", "str"); nl();
tok(")", "tx"); nl();

nl(); // blank

// const onHire
tok("const ", "kw"); tok("onHire", "va"); tok(" = () => {", "tx"); nl();
tok("  ", "tx"); tok("if", "kw"); tok(" (", "tx"); tok("dev", "va");
tok(".value.open)", "tx"); nl();
tok("    ", "tx"); tok("navigateTo", "fn"); tok("(", "tx");
tok("'/contact'", "str"); tok(")", "tx"); nl();
tok("}", "tx"); nl();

// </script>
tok("</", "tx"); tok("script", "tag"); tok(">", "tx"); nl();
nl(); // blank

// <template>
tok("<", "tx"); tok("template", "tag"); tok(">", "tx"); nl();
tok("  <", "tx"); tok("main", "tag"); tok(" class", "prop");
tok('="', "tx"); tok("portfolio", "str"); tok('">', "tx"); nl();

tok("    <", "tx"); tok("h1", "tag"); tok(">", "tx");
tok("{{ ", "tmpl"); tok("dev.name", "va"); tok(" }}", "tmpl");
tok("</", "tx"); tok("h1", "tag"); tok(">", "tx"); nl();

tok("    <", "tx"); tok("p", "tag"); tok(">", "tx");
tok("{{ ", "tmpl"); tok("dev.role", "va"); tok(" }}", "tmpl");
tok("</", "tx"); tok("p", "tag"); tok(">", "tx"); nl();

tok("    <", "tx"); tok("UButton", "tp"); tok(" @click", "prop");
tok('="', "tx"); tok("onHire", "va"); tok('">', "tx"); nl();
tok("      Hire Me →", "tx"); nl();
tok("    </", "tx"); tok("UButton", "tp"); tok(">", "tx"); nl();

tok("  </", "tx"); tok("main", "tag"); tok(">", "tx"); nl();
tok("</", "tx"); tok("template", "tag"); tok(">", "tx"); nl();

const TOTAL = CHARS.length;

// ─────────────────────────────────────────────
//  Typewriter component
// ─────────────────────────────────────────────
const TypedCode: React.FC = () => {
  const [count, setCount]   = useState(0);
  const bodyRef             = useRef<HTMLDivElement>(null);

  // Advance one character at a time; loop after 2.5 s pause
  useEffect(() => {
    if (count >= TOTAL) {
      const id = setTimeout(() => setCount(0), 2500);
      return () => clearTimeout(id);
    }
    const id = setTimeout(
      () => setCount((n) => n + 1),
      9 + Math.random() * 13,   // 9–22 ms  ≈  fast human typing pace
    );
    return () => clearTimeout(id);
  }, [count]);

  // Scroll to bottom so new lines push older ones up
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [count]);

  // Build lines array from visible characters
  const lines: CodeChar[][] = [[]];
  for (let i = 0; i < count; i++) {
    const ch = CHARS[i];
    if (ch.c === "\n") lines.push([]);
    else lines[lines.length - 1].push(ch);
  }

  return (
    <div
      ref={bodyRef}
      className="py-3"
      style={{
        height: "340px",
        overflowY: "scroll",
        scrollbarWidth: "none",
        // @ts-expect-error msOverflowStyle is valid but not in types
        msOverflowStyle: "none",
      }}
    >
      {lines.map((line, li) => (
        <div
          key={li}
          className="group flex items-start px-4 min-h-[22px] hover:bg-white/[0.025] transition-colors duration-75"
        >
          {/* Line number */}
          <span className="w-7 flex-shrink-0 text-right text-[10px] leading-[22px] text-slate-600 mr-4 select-none group-hover:text-slate-500 transition-colors">
            {li + 1}
          </span>

          {/* Code tokens */}
          <span className="flex-1 text-[12.5px] font-mono leading-[22px] whitespace-pre">
            {line.map((ch, ci) => (
              <span key={ci} className={COLORS[ch.k]}>
                {ch.c}
              </span>
            ))}
            {/* Blinking cursor always on last visible line */}
            {li === lines.length - 1 && (
              <span className="cursor-blink" style={{ color: "#22d3ee", fontWeight: 300 }}>
                ▌
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─────────────────────────────────────────────
//  Editor chrome wrapper
// ─────────────────────────────────────────────
const CodeEditor: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 48, scale: 0.96 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    className="w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.18),0_25px_60px_rgba(0,0,0,0.55)]"
    style={{ border: "1px solid rgba(255,255,255,0.10)" }}
  >
    {/* ── Title bar ── */}
    <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-white/[0.06]">
      <div className="flex gap-1.5 flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Fake breadcrumb */}
      <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 flex-1 min-w-0">
        <span>src</span>
        <span className="text-slate-600">/</span>
        <span>components</span>
        <span className="text-slate-600">/</span>
        <span className="text-slate-300 font-semibold">developer.vue</span>
      </div>

      {/* Fake window badges */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-900/60 text-emerald-400 border border-emerald-700/40">
          Nuxt 3
        </span>
        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-sky-900/60 text-sky-400 border border-sky-700/40">
          Vue SFC
        </span>
      </div>
    </div>

    {/* ── Code area ── */}
    <div className="bg-[#0d1117]">
      <TypedCode />
    </div>

    {/* ── Status bar ── */}
    <div
      className="flex items-center justify-between px-4 py-1.5 text-[10px] font-mono"
      style={{ background: "rgba(124,58,237,0.75)" }}
    >
      <div className="flex items-center gap-3 text-white/80">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          TypeScript
        </span>
        <span>developer.vue</span>
      </div>
      <div className="flex items-center gap-3 text-white/60">
        <span>UTF-8</span>
        <span>Spaces: 2</span>
      </div>
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────
//  Hero section
// ─────────────────────────────────────────────
const Hero: React.FC = () => {
  const { hero }   = usePortfolioData();
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex flex-col bg-surface-dark"
      onMouseMove={handleMouseMove}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          left:       cursor.x - 260,
          top:        cursor.y - 260,
          width:      520,
          height:     520,
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 68%)",
          transition: "left 0.08s ease-out, top 0.08s ease-out",
        }}
      />

      {/* Ambient blobs — opacity-only animation (scale on blur is GPU-expensive) */}
      <motion.div
        animate={{ opacity: [0.13, 0.22, 0.13] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-48 w-[650px] h-[650px] bg-accent rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-brand rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[900px] h-[180px] bg-accent rounded-full blur-[90px] pointer-events-none"
      />

      {/* ── Split layout ── */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 gap-8 lg:gap-14">

        {/* Left: text content */}
        <div className="flex flex-col justify-center w-full lg:w-[52%]">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-card border border-white/[0.10] text-xs font-medium text-text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div className="mb-6">
            <h1
              className="font-extrabold tracking-tight leading-none"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-2 flex-wrap mb-1"
              >
                <span className="inline-block px-2.5 py-0.5 rounded-md border border-accent/40 bg-accent-subtle text-accent-light font-bold tracking-widest"
                  style={{ fontSize: "clamp(0.75rem, 1.8vw, 1.1rem)" }}
                >
                  Er.
                </span>
                <span className="text-text-base">Manmohan</span>
              </motion.span>

              {/* Maloo — single-unit reveal (filter on children breaks bg-clip-text) */}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="block text-accent"
              >
                Maloo
              </motion.span>
            </h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-text-muted max-w-lg leading-relaxed mb-8"
          >
            Full Stack Developer building production-ready platforms with{" "}
            <strong className="text-text-base font-semibold">Nuxt</strong>,{" "}
            <strong className="text-text-base font-semibold">Vue</strong> &amp;{" "}
            <strong className="text-text-base font-semibold">Node</strong> — currently
            shipping HRIS modules at Crew.inc.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.55 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              View work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-white/[0.07] border border-white/[0.14] text-text-base text-sm font-semibold rounded-xl hover:-translate-y-0.5 hover:bg-white/[0.13] hover:border-brand/50 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Get in touch
            </a>
          </motion.div>

          {/* Meta — location + social proof links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 text-sm text-text-subtle"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {hero.location}
            </span>

            {/* Divider */}
            <span className="w-px h-4 bg-white/[0.12]" />

            {/* GitHub */}
            <a
              href="https://github.com/Manmohan-Maloo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text-base hover:scale-105 transition-all duration-200"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manmohan-jain-aba2b422b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text-base hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: code editor — lg and above */}
        <div className="hidden lg:flex lg:w-[48%] items-center justify-center">
          <CodeEditor />
        </div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 py-5 border-t border-white/[0.06] bg-surface-dark/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="animate-marquee items-center gap-8 sm:gap-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
            (item, i) => (
              <Fragment key={`${item}-${i}`}>
                <span className="text-sm font-medium text-text-subtle">{item}</span>
                <span
                  className="h-3 w-3 rotate-45 rounded-[2px] bg-accent shadow-[0_0_14px_rgba(34,211,238,0.45)]"
                  aria-hidden="true"
                />
              </Fragment>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
