import { motion } from "framer-motion";
import Button from "../common/Button";
import profilePic from "../../assets/profile.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src={profilePic}
            alt="Manmohan Maloo"
            aria-hidden="true"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto border-4 border-white/90 shadow-xl  transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Hi, I'm Manmohan Maloo
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl lg:text-3xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
        >
          Full-Stack Developer | Building Modern Web Solutions
        </motion.p>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          <a href="#contact">
            <Button
              ariaLabel="Contact me"
              className="hover:scale-105 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
