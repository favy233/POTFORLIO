import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: 'Home', sectionId: 'home-section' },
    { name: 'About', sectionId: 'about-section' },
    { name: 'Integration', sectionId: 'integration-section' },
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

  return (
    <nav className="p-4 flex justify-between items-center lg:w-[70%] lg:ml-[14%] bg-white/10 backdrop-blur-md shadow-lg sticky top-5 z-30 rounded-full general-header">
      <div className="lg:text-3xl text-xl font-bold text-blue-400 pl-10">Favy</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 items-center pr-6">
        {navItems.map((item) => (
          <li key={item.sectionId}>
            <button
              onClick={() => handleNavLinkClick(item.sectionId)}
              className="hover:text-blue-400 text-white transition-colors duration-300"
            >
              {item.name}
            </button>
          </li>
        ))}
        <li>
          {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button> */}
        </li>
      </ul>

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

      {/* Mobile Navigation */}
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
            <ul className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <button
                    onClick={() => handleNavLinkClick(item.sectionId)}
                    className="text-3xl font-bold hover:text-blue-400 text-white transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
