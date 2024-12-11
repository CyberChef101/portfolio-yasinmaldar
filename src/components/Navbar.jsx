import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "shadow-lg" : ""
      } bg-gradient-to-r from-green-500 to-blue-600 fixed w-full z-50 transition-shadow duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          <a href="#home" className="hover:text-yellow-300 transition duration-300">
            Yasin Maldar
          </a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-white text-lg">
          <li>
            <a href="#about" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-gradient-to-r from-green-500 to-blue-600 lg:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

