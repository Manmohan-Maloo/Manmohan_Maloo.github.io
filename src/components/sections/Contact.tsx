import { motion } from "framer-motion";
import { emailAddress, emailHref } from "../../utils/contact";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-surface-dark flex flex-col items-center justify-center pt-20 pb-10 md:pt-24 md:pb-12 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[320px] bg-accent/8 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand/6 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[92%] sm:w-[82%] md:w-[72%] lg:w-[58%] mx-auto bg-surface-card border border-white/[0.08] rounded-2xl px-8 md:px-16 py-12 md:py-16 text-center"
      >
        {/* Label */}
        <p className="text-accent-light text-sm font-mono tracking-widest mb-5">
          let's talk
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-text-base leading-tight mb-5">
          Building something{" "}
          <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
            great
          </span>{" "}
          <span className="text-yellow-400">?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-text-muted text-base md:text-lg max-w-md mx-auto mb-9 leading-relaxed">
          I'm currently open to senior frontend &amp; full-stack roles,
          freelance gigs, and interesting collaborations. Drop me a line.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href={emailHref}
            className="flex items-center gap-2.5 px-6 py-3 bg-accent text-white rounded-xl font-semibold text-sm transition-opacity duration-200 hover:opacity-90 w-full sm:w-auto justify-center"
            aria-label={`Email ${emailAddress}`}
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {emailAddress}
          </a>
          <a
            href="tel:+917232010574"
            className="flex items-center gap-2.5 px-6 py-3 bg-white/[0.07] border border-white/[0.10] text-text-base rounded-xl font-semibold text-sm w-full sm:w-auto justify-center"
          >
            <svg
              className="w-4 h-4 text-accent-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +91 72320 10574
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07] mb-7" />

        {/* Meta info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-text-muted">
          <span className="flex items-center gap-2">
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
            Ahmedabad, India
          </span>
          <span className="flex items-center gap-2">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Open to Remote
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
