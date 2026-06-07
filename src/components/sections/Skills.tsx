import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const TAB_COLORS = ["#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"];
const DOT_COLORS = ["#a78bfa", "#22d3ee", "#fbbf24", "#34d399"];

const Skills: React.FC = () => {
  const { skillCategories, certifications } = usePortfolioData();
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");

  const activeIdx = skillCategories.findIndex((c) => c.id === activeId);
  const activeCategory = skillCategories[activeIdx];
  const dotColor = DOT_COLORS[activeIdx % DOT_COLORS.length];
  const tabColor = TAB_COLORS[activeIdx % TAB_COLORS.length];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-surface-dim relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-[0.06] bg-brand" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold text-brand-bright bg-brand-subtle border border-brand/20 rounded-full uppercase tracking-widest mb-4">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-base">
            Tools of the{" "}
            <span className="text-brand-bright">trade</span>
          </h2>
        </motion.div>

        {/* ── Tab navigation ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-8"
          role="tablist"
        >
          {skillCategories.map((cat, i) => {
            const isActive = cat.id === activeId;
            const color = TAB_COLORS[i % TAB_COLORS.length];
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 cursor-pointer overflow-hidden ${
                  isActive
                    ? "text-white shadow-lg"
                    : "text-text-muted hover:text-text-base bg-white/[0.04] border border-white/[0.08] hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: color }}
                    transition={{ type: "spring", bounce: 0.18, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Skills panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl border border-white/[0.07] bg-surface-card/50 backdrop-blur-sm overflow-hidden"
        >
          {/* Panel header strip */}
          <div className="h-[3px] w-full" style={{ background: tabColor }} />

          <div className="p-6 md:p-8 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.26, ease: "easeOut" }}
                className="flex flex-wrap gap-2.5"
              >
                {activeCategory?.skills.map((skill, i) => (
                  <motion.span
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.78, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.03,
                      type: "spring",
                      stiffness: 380,
                      damping: 22,
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-text-muted hover:text-text-base hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-200 cursor-default"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: dotColor }}
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        {certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <h3 className="text-xl font-bold text-text-base text-center mb-6">
              Certifications &amp; Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group flex items-start gap-3 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-brand/30 hover:bg-brand-subtle/30 transition-all duration-200"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-brand-subtle border border-brand/20 flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-200">
                    <svg
                      className="w-4 h-4 text-brand-bright"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed group-hover:text-text-base transition-colors duration-200">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
