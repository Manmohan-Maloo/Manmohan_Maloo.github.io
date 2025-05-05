import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
        >
          Hi, I'm Manmohan, an enthusiastic and self-driven undergraduate
          student at Ahmedabad Institute of Technology, passionate about
          software development and problem-solving. I specialize in C, Python,
          HTML, React.js, and MySQL, and I enjoy building efficient and
          user-friendly web applications.
          <br /> With a strong work ethic and a continuous desire to learn, I
          actively seek opportunities to grow both technically and
          professionally. I'm open to full-time or part-time roles, and I’m
          excited to contribute to a team where I can apply my skills and gain
          hands-on experience in real-world projects.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
