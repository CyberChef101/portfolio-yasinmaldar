import { FaGraduationCap, FaBuilding, FaAward } from 'react-icons/fa';

const timeline = [
  { year: '2024', event: 'Graduating in B.E. Computer Engineering', icon: <FaGraduationCap /> },
  { year: '2021', event: 'Completed Diploma in Computer Engineering', icon: <FaBuilding /> },
  { year: '2018', event: 'Graduated High School', icon: <FaAward /> },
];

const Timeline = () => {
  return (
    <section id="timeline" className="bg-white py-16 shadow-lg ">
      <div className="container mx-auto text-center px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Education & Experience</h2>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center md:flex md:justify-start md:top-4 md:left-2">
            <div className="w-1 bg-blue-500 h-full"></div>
          </div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`mb-8 relative md:flex md:justify-start md:items-center ${
                index % 2 === 0 ? 'md:left-8' : 'md:right-8'
              }`}
            >
              <div className="absolute left-0 top-0 md:left-2 md:top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              <div className="md:ml-16 p-6 bg-white shadow-lg rounded-lg w-full md:w-2/3 transform transition-all hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-800">{item.year}</h3>
                <p className="text-gray-700 mt-2">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
