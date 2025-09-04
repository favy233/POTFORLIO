import React, { useState, useEffect } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  

  const roles = ["Web Developer", "Frontend Developer", "React "];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 lg:p-12 
      bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div
        className={`relative z-10 flex flex-col lg:flex-row items-center justify-center w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Left Section - Profile Image */}
        <div
          className={`relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mb-8 lg:mb-0 lg:mr-16 flex items-center justify-center transition-transform duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-80"></div>
          <img
            src="/src/assets/my_self-removebg-preview.png"
            alt="Silas Favour Chinelo smiling portrait"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-xl transform transition-transform duration-500 hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = '/fallback-avatar.png'; }}
          />
        </div>

        {/* Right Section - Text Content */}
        <div
          className={`text-center lg:text-left max-w-2xl transition-transform duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">
            Hello, I'm <br />
            <span className="text-blue-400">Silas Favour Chinelo</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            And I'm a{" "}
            <span className="font-semibold text-blue-300 border-r-2 border-blue-300 pr-1 animate-pulse">
              {text}
            </span>
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            I am a passionate Web Developer with a keen eye for detail and a love for creating intuitive and beautiful user experiences. 
            I specialize in crafting engaging interfaces that blend aesthetics with functionality.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-8">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          {/* Hire Me Button */}
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </button>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 text-center">
            {[
              { value: "6+", label: "months of Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies Mastered" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-900/70 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
