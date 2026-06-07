import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = Date.now();
    const duration = 1400;
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const STATS = [
  { value: 350, suffix: "+", label: "APIs Integrated", color: "#22d3ee" },
  { value: 10,  suffix: "+", label: "Projects Shipped", color: "#a78bfa" },
  { value: 2,   suffix: "+", label: "Years Experience", color: "#fbbf24" },
  { value: 4,   suffix: "",  label: "Work Roles",       color: "#34d399" },
];

const About: React.FC = () => {
  const { about } = usePortfolioData();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-surface relative"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold text-brand-bright bg-brand-subtle border border-brand/20 rounded-full uppercase tracking-widest mb-4">
            Who I Am
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-base">
            About Me
          </h2>
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">

          {/* Bio card — large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-surface-card border border-white/[0.08] rounded-2xl p-7 md:p-9 flex flex-col justify-between hover:border-white/[0.14] transition-colors duration-300"
          >
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-text-base mb-5">
                I build{" "}
                <span className="text-brand-bright">production-grade</span>{" "}
                interfaces.
              </h3>
              <p className="text-base text-text-muted leading-relaxed mb-3">
                Full Stack Developer with hands-on experience across the MERN
                stack, Nuxt.js, Vue.js, and TypeScript. I specialise in
                frontend architecture, RBAC systems, and translating Figma
                designs into pixel-perfect, production-ready interfaces.
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                Currently leading frontend at{" "}
                <span className="font-semibold text-text-base">Crew.inc</span>
                , shipping HRIS modules used by real organisations every day.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/Manmohan_Jain_CV.pdf"
                download="Manmohan_Maloo_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-light hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Download Resume
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-text-subtle/25 text-text-muted hover:border-brand/40 hover:text-brand-bright text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Stats grid — right column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                className="group relative bg-surface-card border border-white/[0.08] rounded-2xl p-5 flex flex-col justify-between overflow-hidden hover:border-white/[0.16] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Subtle background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: stat.color + "14" }}
                />
                <p className="text-xs font-medium text-text-subtle uppercase tracking-widest mb-2">
                  {stat.label}
                </p>
                <p
                  className="text-3xl md:text-4xl font-extrabold"
                  style={{ color: stat.color }}
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlights strip — bottom full-width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="lg:col-span-12 bg-surface-card border border-white/[0.08] rounded-2xl px-7 py-5 hover:border-white/[0.14] transition-colors duration-300"
          >
            <p className="text-[11px] font-semibold text-text-subtle uppercase tracking-widest mb-4">
              Key highlights
            </p>
            <div className="flex flex-wrap gap-2.5">
              {about.highlights.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-full text-sm font-medium text-text-muted hover:border-brand/30 hover:text-brand-bright hover:bg-brand-subtle/50 transition-all duration-200 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bright flex-shrink-0" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
