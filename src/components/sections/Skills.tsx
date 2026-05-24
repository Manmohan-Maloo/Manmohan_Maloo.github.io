import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const Skills: React.FC = () => {
  const { skillCategories, certifications } = usePortfolioData();
  const [openId, setOpenId] = useState<string | null>(
    skillCategories[0]?.id ?? null,
  );

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="skills"
      className="min-h-screen py-20 md:py-28 bg-surface-dim relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold text-brand-bright bg-brand-subtle border border-brand/20 rounded-full uppercase tracking-widest mb-4">
            stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-base">
            Tools of the{" "}
            <span className="bg-gradient-to-r from-brand-bright to-accent bg-clip-text text-transparent">
              trade
            </span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-[92%] sm:w-[97%] xl:w-[80%] mx-auto bg-surface-card border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {skillCategories.map((cat, index) => (
            <div
              key={cat.id}
              className={index > 0 ? "border-t border-white/[0.06]" : ""}
            >
              <button
                onClick={() => toggle(cat.id)}
                className="w-full flex items-center gap-3 px-6 py-5 text-left cursor-pointer"
              >
                <span className="flex-1 text-base font-semibold text-text-base">
                  {cat.name}
                </span>
                <motion.svg
                  animate={{ rotate: openId === cat.id ? 180 : 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-5 h-5 text-text-muted flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {openId === cat.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-5 flex flex-wrap gap-2.5">
                      {cat.skills.map((skill, i) => (
                        <motion.span
                          key={skill.id}
                          initial={{ opacity: 0, scale: 0.88 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.10] text-sm font-medium text-text-muted cursor-default"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-xl font-bold text-text-base text-center mb-6">
              Certifications &amp; Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[92%] sm:w-[97%] xl:w-[80%] mx-auto">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-brand/25 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 text-brand-bright flex-shrink-0 mt-0.5"
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
                  <p className="text-sm text-text-muted leading-relaxed">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
