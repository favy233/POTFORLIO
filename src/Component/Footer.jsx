// src/components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Add any other social icons you use
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants for footer elements
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-gray-950 text-gray-400 py-10 md:py-12" // Slightly darker background for the footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Name Reinforcement */}
        <motion.div variants={footerVariants} className="mb-6">
          <a href="#home-section" className="text-3xl font-extrabold text-white hover:text-blue-400 transition-colors duration-300">
            YourName<span className="text-purple-500">.dev</span> {/* Replace YourName */}
          </a>
          <p className="text-sm mt-2 text-gray-500">Crafting digital experiences with passion.</p> {/* Optional tagline */}
        </motion.div>

        {/* Navigation Links (Optional - use if you want quick jumps) */}
        <motion.div variants={footerVariants} className="mb-6">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg font-medium">
            <li>
              <a href="#about-section" className="hover:text-white transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#projects-section" className="hover:text-white transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#skills-section" className="hover:text-white transition-colors duration-200">Skills</a> {/* Add if you have a skills section */}
            </li>
            <li>
              <a href="#contact-section" className="hover:text-white transition-colors duration-200">Contact</a>
            </li>
            {/* Add more links as needed, e.g., Blog, Resume, Services */}
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={footerVariants} className="mb-6">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourusername" // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="mailto:youremail@example.com" // Replace with your Email
              className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Send me an Email"
            >
              <FaEnvelope className="text-3xl" />
            </a>
            {/* Add more social links as needed */}
          </div>
        </motion.div>

        {/* Copyright and Credits */}
        <motion.div variants={footerVariants} className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-sm">
            &copy; {currentYear} Silas Favour Dev. All rights reserved.
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Designed and Developed with ❤️ by Silas Favour Chinelo.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;