import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchPortfolioData } from "../../utils/api";
import { Skill } from "../../types";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchPortfolioData();
        setSkills(data.skills);
      } catch (error) {
        console.error("Failed to load skills:", error);
      }
    };
    loadSkills();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text mb-10"
        >
          My Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${skill.bgColor} ${
                skill.textColor
              } px-5 py-3 rounded-lg text-sm font-semibold flex items-center space-x-3 shadow-sm hover:bg-${
                skill.bgColor.split("-")[1]
              }-200 hover:scale-105 transition-all duration-300`}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-7 h-7 object-contain"
              />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
