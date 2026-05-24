import { motion } from "framer-motion";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import coachingGuruImage from "../../assets/coaching_guru.jpeg";
import portfolioImage from "../../assets/portfolio.jpeg";
import textImageConvertorImage from "../../assets/text_img_convertor.jpeg";

const projectImages: Record<string, string> = {
  "ai.png": "/ai.png",
  "chatty.png": "/chatty.png",
  "coaching_guru.jpeg": coachingGuruImage,
  "portfolio.jpeg": portfolioImage,
  "text_img_convertor.jpeg": textImageConvertorImage,
};

const Projects: React.FC = () => {
  const { projects } = usePortfolioData();

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-surface relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand/7 rounded-full blur-[110px] pointer-events-none" />

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
            selected work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-base">
            Things I've{" "}
            <span className="bg-gradient-to-r from-brand-bright to-accent bg-clip-text text-transparent">
              built
            </span>{" "}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl p-[1px] bg-white/[0.06] hover:bg-gradient-to-br hover:from-brand/30 hover:via-transparent hover:to-accent/30 transition-all duration-400 flex flex-col"
            >
              <div className="rounded-2xl bg-surface-card/80 backdrop-blur-sm overflow-hidden flex flex-col h-full hover:bg-surface-card transition-colors duration-300">
                {/* Banner */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                >
                  {project.image ? (
                    <img
                      src={projectImages[project.image] ?? project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-600"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-5xl font-black text-white/20 select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-text-base mb-2 group-hover:text-brand-bright transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium bg-white/[0.06] text-text-subtle rounded-md border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-subtle hover:text-text-base transition-colors duration-200"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-brand-bright hover:text-accent-light transition-colors duration-200"
                        aria-label={`Live demo of ${project.title}`}
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
