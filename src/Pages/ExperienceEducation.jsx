import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 – Present",
    description:
      "Built responsive web applications with React and Tailwind CSS, improving performance and user engagement.",
  },
];

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "Federal College of Animal Health and Production Technology, Vom Jos",
    period: "2022 – 2024",
    description: "Graduated with honors, interaction.",
  },
  {
    degree: "Frontend Development Certification",
    school: "Rad5 Bootcamp",
    period: "2025",
    description: "Certified in Responsive Web Design.",
  },
];

function ExperienceEducation() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="flex items-center text-2xl font-semibold mb-6">
              <FaBriefcase className="mr-3 text-blue-500" />
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative border-l-4 border-blue-500 pl-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="flex items-center text-2xl font-semibold mb-6">
              <FaGraduationCap className="mr-3 text-green-500" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative border-l-4 border-green-500 pl-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.school} • {edu.period}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ Export the component, not the array
export default ExperienceEducation;
