import { motion } from 'framer-motion';
import yasinmaldar from '../assets/yasinmaldar.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={yasinmaldar}
            alt="Yasin Maldar"
            className="w-64 h-64 rounded-full mx-auto md:mx-0 border-4 border-gray-300 shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I'm Yasin Maldar, a dedicated Computer Engineering undergraduate with a strong passion for full-stack web development, particularly using the MERN stack. Completed my B.E. in Computer Engineering at Sinhgad Institute of Technology, I have gained expertise in technologies like JavaScript, ReactJS, Node.js, ExpressJS, MongoDB, and more.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I thrive on challenges, continuously learning new concepts, and pushing my limits. I'm eager to collaborate with like-minded professionals and contribute to exciting projects. Let's connect and build something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
