import React from "react";
import { motion } from "framer-motion";
import { FaCameraRetro, FaMusic, FaPlane, FaPaintBrush, FaBook } from "react-icons/fa";

const hobbies = [
  {
    icon: <FaCameraRetro className="text-4xl text-indigo-500" />,
    title: "Photography",
    description: "Capturing special moments, landscapes, and creative shots.",
  },
  {
    icon: <FaMusic className="text-4xl text-pink-500" />,
    title: "Music",
    description: "Listening, creating beats, and exploring different genres.",
  },
  
  
  {
    icon: <FaBook className="text-4xl text-blue-500" />,
    title: "Reading",
    description: "Diving into books on tech, self-growth, and fiction.",
  },
];

function Hobbies() {
  return (
    <section id="hobbies" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-10"
        >
          My Hobbies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">{hobby.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {hobby.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
