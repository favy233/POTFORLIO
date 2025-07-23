import React from "react";
import { motion } from "framer-motion";

const orbitTags = [
  { text: "Discovery", position: "top-[10%] left-[50%] -translate-x-1/2" },
  { text: "Design", position: "top-[50%] right-0 -translate-y-1/2" },
  { text: "Development", position: "bottom-[10%] left-[50%] -translate-x-1/2" },
  { text: "Launch", position: "top-[50%] left-0 -translate-y-1/2" },
];

const Integration = [
  {
    title: "Creative Thinking",
    description: "Brainstorming and conceptualizing innovative solutions.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces.",
  },
  {
    title: "Development",
    description: "Bringing ideas to life with clean, efficient code.",
  },
  {
    title: "Deployment",
    description: "Launching projects smoothly and efficiently.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-8 md:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Explore how we turn ideas into reality with a streamlined process.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Orbiting tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-72 sm:w-80 sm:h-80 h-72 flex items-center justify-center z-10 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-10 blur-2xl"></div>
              <div className="w-36 h-36 bg-blue-600 rounded-full flex items-center justify-center text-white z-10 text-sm font-medium">
                Your Project
              </div>
              {orbitTags.map((tag, index) => (
                <div
                  key={index}
                  className={`absolute ${tag.position} bg-blue-600 text-white rounded-full px-4 py-1.5 text-xs font-medium z-20 whitespace-nowrap`}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service cards carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="mt-8 md:mt-10 px-2 py-4 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
              <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="min-w-[240px] p-3 bg-gray-700 rounded-lg shadow hover:shadow-xl transition duration-300 ease-in-out h-20 flex flex-col justify-center"
                  >
                    <h3 className="text-white font-semibold text-sm">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-xs mt-1 leading-snug">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional features grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 mt-8 mb-6 lg:mb-8"
        >
          {[
            "Client Collaboration",
            "Rapid Prototyping",
            "Agile Methodologies",
            "Quality Assurance",
          ].map((feature, index) => (
            <div key={index} className="text-gray-400 text-sm">
              • {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
