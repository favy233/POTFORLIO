import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: 'Home', sectionId: 'home-section' },
    { name: 'About', sectionId: 'about-section' },
    { name: 'ExperienceEducation', sectionId: 'experienceEducation-section' },
     { name: 'Hobbies', sectionId: 'hobbies-section' },
    { name: 'Projects', sectionId: 'projects-section' },
    { name: 'Contact', sectionId: 'contact-section' }
  ];

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // stagger for logo + nav items
    }
  };

  const logoVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <motion.nav
      className="p-4 flex justify-between items-center lg:w-[70%] lg:ml-[14%] bg-white/10 backdrop-blur-md shadow-lg sticky top-5 z-30 rounded-full general-header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo with animation */}
      <motion.div
        className="lg:text-3xl text-xl font-bold text-blue-400 pl-10"
        variants={logoVariant}
      >
        Favy
      </motion.div>

      {/* Desktop Navigation with Animation */}
      <motion.ul
        className="hidden md:flex space-x-6 items-center pr-6"
        variants={containerVariants}
      >
        {navItems.map((item) => (
          <motion.li key={item.sectionId} variants={itemVariants}>
            <button
              onClick={() => handleNavLinkClick(item.sectionId)}
              className="hover:text-blue-400 text-white transition-colors duration-300"
            >
              {item.name}
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden pr-4">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white text-2xl"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation with Slide-in */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              onClick={() => setIsNavOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <motion.ul
              className="flex flex-col space-y-6 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.sectionId} variants={itemVariants}>
                  <button
                    onClick={() => handleNavLinkClick(item.sectionId)}
                    className="text-3xl font-bold hover:text-blue-400 text-white transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
