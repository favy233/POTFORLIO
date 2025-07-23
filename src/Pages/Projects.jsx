import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Ensure this path is correct for your project data
import { allProjects as initialAllProjects } from '../data/projects';

const Projects = () => {
  const allProjects = useMemo(() => initialAllProjects, []);

  const containerGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  return (
    <section
      id="projects-section"
      className="bg-gray-900 py-16 md:py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 md:mb-12 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My Latest <span className="text-white">Creations</span> 🎨
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Dive into a curated collection of my recent work, where innovative design meets robust functionality. Each project showcases my commitment to crafting intuitive, responsive, and impactful web solutions.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerGridVariants}
        >
          {allProjects.length > 0 ? (
            allProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative w-full h-56 sm:h-64 overflow-hidden group">
                  <img
                    src={project.image} // This will now use the placeholder URL
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    // The onError handler remains a good fallback in case placehold.co is ever down, though unlikely.
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/aaaaaa/000000?text=Image+Error'; }}
                  />
                  {project.live && project.live !== "#" && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md z-10">
                      Live
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-8">
                      {project.github && project.github !== "#" && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white flex flex-col items-center gap-1 transition duration-300 transform hover:scale-110"
                          whileHover={{ color: "#a78bfa" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-4xl" />
                          <span className="text-sm font-medium">Code</span>
                        </motion.a>
                      )}
                      {project.live && project.live !== "#" && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white flex flex-col items-center gap-1 transition duration-300 transform hover:scale-110"
                          whileHover={{ color: "#34d399" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="text-4xl" />
                          <span className="text-sm font-medium">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    onClick={() => alert(`Full details for ${project.title}: \n\n${project.longDescription || project.description}\n\nFeatures:\n- ${project.features ? project.features.join('\n- ') : 'N/A'}`)}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium self-start"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-400 text-lg col-span-full py-10 bg-gray-800 rounded-lg shadow-inner"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              No projects found. Check your project data file!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;