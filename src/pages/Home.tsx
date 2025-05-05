import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Resume from "../components/sections/Resume";
import Contact from "../components/sections/Contact";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </motion.div>
  );
};

export default Home;
