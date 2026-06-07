import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const Experience: React.FC = () => {
  const { experience } = usePortfolioData();

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-surface relative"
    >
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-brand/[0.04] rounded-full blur-[100px] pointer-events-none" />

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
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-base">
            Where I&apos;ve{" "}
            <span className="text-brand-bright">shipped</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl xl:max-w-7xl mx-auto">
          {/* Vertical gradient line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-px bg-brand/50" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
                    item.current
                      ? "bg-brand border-brand shadow-lg shadow-brand/60 group-hover:shadow-brand/80"
                      : "bg-surface-dim border-white/20 group-hover:border-brand/50"
                  }`}
                />
                {item.current && (
                  <div className="absolute left-[18px] md:left-[26px] top-6 w-4 h-4 rounded-full bg-brand/40 animate-ping z-0" />
                )}

                {/* Card */}
                <div
                  className={`rounded-2xl p-[1px] transition-all duration-300 ${
                    item.current
                      ? "bg-brand/30"
                      : "bg-white/[0.06] group-hover:bg-brand/15"
                  }`}
                >
                  <div className="rounded-2xl bg-surface-card/80 backdrop-blur-sm p-6 md:p-8 hover:bg-surface-card transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h3 className="text-lg md:text-xl font-bold text-text-base">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-brand-subtle text-brand-bright rounded-full border border-brand/25 uppercase tracking-wide">
                              Current
                            </span>
                          )}
                        </div>
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-brand-bright hover:opacity-80 transition-opacity"
                          >
                            {item.company}
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-brand-bright">
                            {item.company}
                          </span>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-medium text-text-muted">
                          {item.period}
                        </p>
                        <p className="text-xs text-text-subtle mt-0.5">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {item.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2.5 text-sm text-text-muted group-hover:text-text-muted transition-colors duration-200"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-bright flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-brand-subtle text-brand-bright rounded-lg border border-brand/15 hover:border-brand/30 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
