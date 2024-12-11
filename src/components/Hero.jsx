import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import image from '../assets/2.JPG'

const Hero = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-700 to-indigo-600 h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-indigo-700 via-purple-600 to-pink-500 opacity-40"></div>

      {/* Floating Particles or Shapes */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute w-48 h-48 bg-purple-400 rounded-full top-20 left-10 opacity-20"></div>
        <div className="absolute w-32 h-32 bg-indigo-300 rounded-full bottom-20 right-10 opacity-20"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="w-35 h-35 md:w-48 md:h-48 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full shadow-lg mb-4 overflow-hidden">
          <img
            src={image}// Replace with your image URL
            alt="Yasin Maldar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Yasin Maldar
        </h1>
        <motion.p
          className="text-2xl md:text-3xl text-gray-100"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Computer Engineer | MERN Developer
        </motion.p>

        {/* Quick Stats */}
        <div className="flex space-x-6 mt-4">
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-4xl font-bold text-yellow-400">1+</span>
            <span className="text-sm">Years Experience</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-4xl font-bold text-yellow-400">20+</span>
            <span className="text-sm">Projects Done</span>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-4xl font-bold text-yellow-400">10+</span>
            <span className="text-sm">Tech Skills</span>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="space-x-4 mt-6">
          <motion.a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 shadow-lg transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#projects"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 hover:text-black shadow-lg transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See My Work
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaArrowDown className="text-3xl text-yellow-400" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
