import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <h3 className="text-lg font-semibold">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/yasin-maldar-992508164/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/cyberchef101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:yasinmaldar.sit.comp@gmail.com"
            className="text-red-500 hover:text-red-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Yasin Maldar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
