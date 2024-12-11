import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contacts = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-100 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-2xl w-full max-w-4xl text-center text-white">
        <h2 className="text-5xl font-extrabold mb-10">Get in Touch</h2>

        {/* Contact Items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Phone */}
          <div className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300">
            <FaPhoneAlt className="text-5xl text-yellow-300" />
            <h3 className="text-2xl font-semibold">Phone</h3>
            <p>
              <a
                href="tel:+917620591273"
                className="text-yellow-300 hover:text-yellow-400 transition duration-300 text-lg"
              >
                +91 7620591273
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300">
            <FaEnvelope className="text-5xl text-yellow-300" />
            <h3 className="text-2xl font-semibold">Email</h3>
            <p>
              <a
                href="mailto:yasinmaldar.sit.comp@gmail.com"
                className="text-yellow-300 hover:text-yellow-400 transition duration-300 text-lg"
              >
                yasinmaldar.sit.comp@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300">
            <FaLinkedin className="text-5xl text-yellow-300" />
            <h3 className="text-2xl font-semibold">LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/yasin-maldar-992508164/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition duration-300 text-lg"
              >
                linkedin.com/in/yasinmaldar
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300">
            <FaGithub className="text-5xl text-yellow-300" />
            <h3 className="text-2xl font-semibold">GitHub</h3>
            <p>
              <a
                href="https://github.com/cyberchef101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400 transition duration-300 text-lg"
              >
                github.com/yasinmaldar
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacts;
