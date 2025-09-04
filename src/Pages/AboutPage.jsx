import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function AboutPage() {
  const [showFullText, setShowFullText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const expandedTextVariants = {
    collapsed: { opacity: 0, height: 0, overflow: "hidden" },
    expanded: { opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="about-section"
      className={`bg-gray-900 py-20 text-white min-h-screen flex items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="max-w-2xl flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={textVariants}
            custom={0}
          >
            About Me
          </motion.h2>

          <motion.p className="text-gray-300 text-lg mb-4" variants={textVariants} custom={1}>
            Hi, I’m{" "}
            <strong className="text-blue-300">Silas Favour Chinelo</strong>, a
            passionate <strong className="text-green-300">Web Developer</strong>{" "}
            dedicated to creating impactful and visually engaging Web 
            Application.
          </motion.p>

          <motion.p className="text-gray-300 text-lg mb-6" variants={textVariants} custom={2}>
            I specialize in building{" "}
            <strong className="text-purple-300">
              responsive, scalable, and interactive applications
            </strong>{" "}
            with a focus on clean code, seamless user experiences, and modern
            design principles.
          </motion.p>

          {/* EXPANDABLE SECTION */}
          <motion.div
            variants={expandedTextVariants}
            initial="collapsed"
            animate={showFullText ? "expanded" : "collapsed"}
          >
            <p className="text-gray-300 text-lg mb-4">
              I strongly believe in{" "}
              <strong className="text-blue-300">continuous learning</strong> and{" "}
              <strong className="text-purple-300">collaboration</strong>. Beyond
              coding, I actively contribute to communities, share insights, and
              embrace challenges that push me to grow as a developer.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              My expertise includes{" "}
              <span className="text-green-300">React</span>,{" "}
              <span className="text-pink-300">Tailwind CSS</span>, and{" "}
              <span className="text-yellow-300">Firebase</span>. I aim to
              deliver not just functional solutions, but web application that inspire
              confidence and delight users.
            </p>
          </motion.div>

          {/* READ MORE BUTTON */}
          <motion.div variants={textVariants} custom={3}>
            <motion.button
              onClick={() => setShowFullText(!showFullText)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {showFullText ? (
                <>
                  Read Less <FaChevronUp />
                </>
              ) : (
                <>
                  Read More <FaChevronDown />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE CONTENT */}
        <motion.div
          className="relative w-full max-w-md lg:max-w-lg flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 90 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">
            <img
              src="/src/assets/my_self-removebg-preview.png"
              alt="Silas Favour Chinelo - Web Developer"
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-700 transform transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/my_self-removebg-preview.png";
              }}
            />

            {/* ICON BADGES */}
            <motion.div
              className="absolute -top-6 -left-6 bg-purple-600 p-3 rounded-full shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <FaGraduationCap className="text-white text-2xl" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-blue-600 p-3 rounded-full shadow-lg"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <FaCode className="text-white text-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
