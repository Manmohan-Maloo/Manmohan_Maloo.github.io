import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const About: React.FC = () => {
  const { about } = usePortfolioData();

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-surface relative overflow-hidden"
    >
      {/* Subtle ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/8 rounded-full blur-[100px] pointer-events-none" />

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

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left: summary */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-base mb-6">
              I build{" "}
              <span className="bg-gradient-to-r from-brand-bright to-accent bg-clip-text text-transparent">
                production-grade
              </span>{" "}
              interfaces.
            </h3>

            <div className="max-w-3xl space-y-5">
              <p className="text-base md:text-lg text-text-muted leading-relaxed">
                I'm a Full Stack Developer with hands-on experience across the
                MERN stack, Nuxt.js, Vue.js, and TypeScript. I specialize in
                frontend architecture, RBAC systems, and translating Figma
                designs into pixel-perfect, production-ready interfaces.
              </p>
              <p className="text-base md:text-lg text-text-muted leading-relaxed">
                Currently leading frontend at{" "}
                <span className="font-semibold text-text-base">Crew.inc</span>,
                shipping HRIS modules used by real organizations every day.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Manmohan_Jain_CV.pdf"
                download="Manmohan_Maloo_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand to-accent text-white text-sm font-semibold rounded-xl hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5 transition-all duration-200"
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

          {/* Right: highlights bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {about.highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="flex items-start gap-3 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl hover:border-brand/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand-bright to-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-text-muted leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
