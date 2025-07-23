import React from 'react';
import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          <FaTimes />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-md mb-6"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0A0A0A/FFFFFF?text=Project+Image'; }}
        />
        <h3 className="text-3xl font-bold mb-3 text-purple-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-lg">
          {project.longDescription || project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-sm bg-purple-700 text-white px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center gap-2 transition text-lg"
            >
              <FaGithub /> View Code
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white flex items-center gap-2 transition text-lg"
            >
              <FaExternalLinkAlt /> View Live
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;