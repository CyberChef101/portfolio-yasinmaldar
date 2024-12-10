import { motion } from 'framer-motion';
import yasinmaldar from '../assets/yasinmaldar.jpg'; // Update the path with the correct image path

const Hero = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-600 to-indigo-600 h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-16 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Image */}
      <motion.img
        src={yasinmaldar} // Your image file path
        alt="Yasin Maldar"
        className="absolute top-1/4 right-20 w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-shadow-xl">
        Yasin Maldar
      </h1>
      <motion.p
        className="text-2xl md:text-3xl mb-6 text-gray-100"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Computer Engineer | MERN Developer
      </motion.p>
      <motion.a
        href="#contact"
        className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hire Me
      </motion.a>
    </motion.div>
  );
};

export default Hero;
