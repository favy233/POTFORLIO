import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Added Chevron icons

function AboutPage() {
  const [showFullText, setShowFullText] = useState(false); // New state for "Read More"
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for individual text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  // Variants for expanding/collapsing text
  const expandedTextVariants = {
    collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
    expanded: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="about-section" // Important for Navbar scrolling
      className={`bg-gray-900 py-16 md:py-24 text-white min-h-screen flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section - Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-2xl flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={textVariants} custom={0}
          >
            About <span className="text-white">Me</span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-4"
            variants={textVariants} custom={1}
          >
            Hi, I'm <strong className="text-blue-300">Silas Favour Chinelo</strong>, a passionate <strong className="text-green-300">Web Developer</strong> with a keen eye for both aesthetics and functionality. My journey in development began with a solid foundation in modern **design principles** and **user experience**, always aiming to build engaging digital products.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg mb-6"
            variants={textVariants} custom={2}
          >
            I specialize in crafting <strong className="text-purple-300">responsive and interactive web applications</strong>, prioritizing **clean, maintainable code** and seamless user interfaces. I continuously immerse myself in new technologies and industry best practices to deliver high-quality, scalable, and performant solutions.
          </motion.p>

          {/* Additional text that expands/collapses */}
          <motion.div
            variants={expandedTextVariants}
            initial="collapsed"
            animate={showFullText ? "expanded" : "collapsed"}
          >
            <p className="text-gray-300 text-lg mb-4">
              Beyond coding, I'm a strong advocate for **continuous learning** and **community collaboration**. I believe in sharing knowledge and constantly evolving my skill set to tackle new challenges and contribute to innovative projects. My goal is to create web experiences that are not just visually appealing, but also deeply intuitive and impactful for users.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              My expertise spans across front-end development with modern JavaScript frameworks like **React**, robust styling with **Tailwind CSS**, and integrating with various backend technologies including **Firebase** for full-stack capabilities. I'm always eager to learn new tools and methodologies to improve my craft.
            </p>
          </motion.div>

          <motion.div variants={textVariants} custom={3}>
            <motion.button
              onClick={() => setShowFullText(!showFullText)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto lg:mx-0"
              whileHover={{ scale: 1.02 }} // Framer Motion hover effect
              whileTap={{ scale: 0.98 }} // Framer Motion tap effect
            >
              {showFullText ? (
                <>Read Less <FaChevronUp className="ml-2" /></>
              ) : (
                <>Read More <FaChevronDown className="ml-2" /></>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section - Image with Overlays */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-xl flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/about-illustration.png" // REPLACE WITH YOUR ACTUAL ABOUT PAGE ILLUSTRATION
            alt="Silas Favour Chinelo - Web Developer"
            className="w-full h-auto object-contain rounded-xl shadow-2xl border-4 border-gray-700 transform transition-transform duration-500 hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = '/my_self-removebg-preview.png'; }}
          />
          {/* Decorative icons/overlays */}
          <div className="absolute -top-6 -left-6 bg-purple-600 p-3 rounded-full shadow-xl animate-bounce-slow">
            <FaGraduationCap className="text-white text-3xl" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-600 p-3 rounded-full shadow-xl animate-spin-slow">
            <FaCode className="text-white text-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;