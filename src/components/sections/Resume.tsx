import { motion } from "framer-motion";
import { useCallback } from "react";
import Button from "../common/Button";

const Resume = () => {
  const handleDownload = useCallback(() => {
    const resumeUrl = "/Manmohan_Jain_CV.pdf";

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Manmohan_Maloo.pdf");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }, []);

  return (
    <section id="resume" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Resume
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 mb-6"
        >
          Download my resume to learn more about my experience and
          qualifications.
        </motion.p>
        <Button ariaLabel="Download resume" onClick={handleDownload}>
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default Resume;
