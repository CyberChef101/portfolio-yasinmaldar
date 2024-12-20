import React from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "YouTube Backend",
      description: "A replica of the YouTube backend built using ExpressJS, focusing on video handling and server-side logic.",
      link: "https://github.com/CyberChef101/YouTube-Backend",
      techStack: ["ExpressJS", "NodeJS", "MongoDB"],
      icon: <FaNodeJs />
    },
    {
      title: "StudyNotion Ed-Tech Platform",
      description: "A full-stack website for buying and selling courses, built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).",
      link: "https://github.com/CyberChef101/StudyNotion",
      techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      icon: <FaReact />
    },
    {
      title: "Veggies Marketplace",
      description: "A full-stack website for buying and selling exotic vegetables, built using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).",
      link: "https://github.com/CyberChef101/veggies",
      techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      icon: <FaDatabase />
    },
    {
      title: "Weather App",
      description: "A weather application that shows location-based weather information using the OpenWeather API.",
      link: "https://github.com/CyberChef101/Weather-App",
      techStack: ["ReactJS", "API"],
      icon: <FaReact />
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              {/* Project Icon */}
              <div className="text-4xl text-blue-500 mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex justify-center space-x-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
