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
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-lg w-full max-w-3xl text-center text-white">
        <h2 className="text-5xl font-extrabold mb-8">Contact Me</h2>

        {/* Add animation to the contact items */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <FaPhoneAlt className="text-5xl" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p>
              <a href="tel:+919876543210" className="text-yellow-300 hover:underline text-lg">
                +91 7620591273
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <FaEnvelope className="text-5xl" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p>
              <a href="mailto:asinmaldar.sit.comp@gmail.com" className="text-yellow-300 hover:underline text-lg">
                yasinmaldar.sit.comp@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center space-y-2">
            <FaLinkedin className="text-5xl" />
            <h3 className="text-xl font-semibold">LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/yasin-maldar-992508164/"
                className="text-yellow-300 hover:underline text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yasinmaldar
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center space-y-2">
            <FaGithub className="text-5xl" />
            <h3 className="text-xl font-semibold">GitHub</h3>
            <p>
              <a
                href="https://github.com/cyberchef101"
                className="text-yellow-300 hover:underline text-lg"
                target="_blank"
                rel="noopener noreferrer"
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
