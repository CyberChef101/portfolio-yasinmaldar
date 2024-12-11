import { FaGraduationCap, FaBuilding, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2024', event: 'Graduating in B.E. Computer Engineering', icon: <FaGraduationCap /> },
  { year: '2021', event: 'Completed Diploma in Computer Engineering', icon: <FaBuilding /> },
  { year: '2018', event: 'Graduated High School', icon: <FaAward /> },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto text-center px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Education & Experience</h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              <div className="w-1 h-24 bg-blue-500 hidden md:block"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg mb-4">
                {item.icon}
              </div>

              {/* Event Details */}
              <div className="p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-lg font-semibold text-gray-800">{item.year}</h3>
                <p className="text-gray-700 mt-2">{item.event}</p>
              </div>

              {/* Connector for small screens */}
              {index < timeline.length - 1 && (
                <div className="w-1 h-24 bg-blue-500 md:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
