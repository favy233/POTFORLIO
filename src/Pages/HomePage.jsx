import React, { useState, useEffect } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Only icons needed here

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Left Section - Image */}
      <div
        className={`relative w-64 h-64 lg:w-80 lg:h-80 mb-8 lg:mb-0 lg:mr-12 flex items-center justify-center transition-transform duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse-light opacity-75"></div>
        <img
          src="/images/your-profile-picture.jpg" 
          alt="Silas Favour Chinelo"
          className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg transform transition-transform duration-500 hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = '/my_self-removebg-preview.png'; }}
        />
      </div>

      {/* Right Section - Text Content */}
      <div
        className={`text-center lg:text-left max-w-2xl transition-transform duration-1000 delay-300 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Hello, I'm <br />
          <span className="text-blue-400">Silas Favour Chinelo</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-6 animate-fade-in-down animation-delay-200">
          And I'm a <span className="font-semibold text-blue-300">Web Developer</span>
        </p>
        <p className="text-gray-400 text-lg mb-8 animate-fade-in-down animation-delay-400">
          I am a passionate Web Developer with a keen eye for detail and a love for creating intuitive and beautiful user experiences. I specialize in crafting engaging interfaces that blend aesthetics with functionality.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start space-x-4 mb-8 animate-fade-in-down animation-delay-600">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <FaTwitter size={32} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* Action Buttons */}
       <button
        onClick={() => navigate("/contact")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        Hire Me
      </button>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center animate-fade-in-up animation-delay-1000">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-blue-400">10+</p>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-blue-400">30+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-blue-400">5+</p>
            <p className="text-gray-400">Technologies Mastered</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="text-3xl font-bold text-blue-400">100+</p>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;