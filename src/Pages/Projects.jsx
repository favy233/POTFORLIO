import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiFirebase, SiTailwindcss, SiGraphql, SiMongodb } from "react-icons/si";

// Project data
const allProjects = [
  {
    id: 1,
    title: "Emosence",
    description: "Full-featured online store with cart, checkout, and admin dashboard.",
    image: "/public/ChatGPT Image Jun 30, 2025, 04_44_32 AM.png",
    github: "https://github.com/favy233/emotion.git",
    live: "https://emotion-rlpk.vercel.app/",
    tech: ["React", "Firebase", "Tailwind"],
    features: ["Cart system", "Checkout flow", "Admin Dashboard"],
  },
  {
    id: 2,
    title: "Lastly",
    description: "Collaborative task manager with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    github: "https://github.com/favy233/lastly.git",
    live: "https://lastly-kohl.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB"],
    features: ["Team collaboration", "Real-time sync", "Task management"],
  },
  {
    id: 3,
    description: "Interactive weather application with forecasts and historical data.",
    live: "http://127.0.0.1:5500/index.html",
    type: "frontend",
    tech: ["React", "API"],
    features: ["Live forecasts", "Historical trends", "Interactive charts"],
  },
 
 
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return allProjects;
    return allProjects.filter(project => project.type === activeFilter);
  }, [activeFilter]);

  const containerGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5 } },
    hover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <section id="projects-section" className="bg-gray-900 py-16 md:py-24 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Projects
            </span>{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block"
            >
              🚀
            </motion.span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of carefully crafted web applications and solutions. 
            Each project represents a unique challenge solved with modern technologies.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerGridVariants}
        >
          {["all", "frontend", "js", "tailwind"].map((filter) => (
            <motion.button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* All projects grid */}
        <h3 className="text-xl font-semibold mb-6 text-gray-300 flex items-center">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
          {activeFilter === "all" ? "All Projects" : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Projects`}
        </h3>
        
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={containerGridVariants}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative w-full h-48 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400?text=Project+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  
                  {isValidUrl(project.live) && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md z-10">
                      Live
                    </span>
                  )}
                  
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-6">
                      {isValidUrl(project.github) && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white flex flex-col items-center gap-1 transition duration-300"
                          whileHover={{ scale: 1.1, color: "#a78bfa" }}
                        >
                          <FaGithub className="text-3xl" />
                          <span className="text-xs font-medium">Code</span>
                        </motion.a>
                      )}
                      {isValidUrl(project.live) && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white flex flex-col items-center gap-1 transition duration-300"
                          whileHover={{ scale: 1.1, color: "#34d399" }}
                        >
                          <FaExternalLinkAlt className="text-3xl" />
                          <span className="text-xs font-medium">Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-gray-700 text-gray-200 px-2 py-1 rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs font-medium bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.button
                    onClick={() => alert(`Full details for ${project.title}: \n\n${project.longDescription ?? "No details available"}\n\nFeatures:\n- ${project.features.join('\n- ')}`)}
                    className="mt-auto px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-md shadow transition-all duration-300 text-xs font-medium self-start flex items-center gap-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center text-gray-400 text-lg col-span-full py-16 bg-gray-800/50 rounded-lg shadow-inner border border-dashed border-gray-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaServer className="text-4xl mx-auto mb-4 text-gray-600" />
              <p>No projects found in this category.</p>
              <p className="text-sm mt-2">Try selecting a different filter.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
