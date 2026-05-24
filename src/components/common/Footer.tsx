import { emailHref } from "../../utils/contact";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-text-subtle">
            &copy; {new Date().getFullYear()} Manmohan Maloo. Crafted with
            Nuxt-grade attention to detail.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/Manmohan-Maloo" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/manmohan-jain-aba2b422b",
              },
              {
                label: "Email",
                href: emailHref,
              },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-sm text-text-subtle hover:text-brand-bright transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
