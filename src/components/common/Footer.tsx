const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Manmohan Maloo. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://github.com/Manmohan-Maloo"
            aria-label="GitHub"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manmohan-jain-aba2b422b"
            aria-label="LinkedIn"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
