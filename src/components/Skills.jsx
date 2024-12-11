const skills = [
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '75%' },
  { name: 'Node.js', level: '70%' },
  { name: 'MongoDB', level: '65%' },
  { name: 'C++', level: '85%' },
  { name: 'HTML5', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'TailwindCSS', level: '80%' },
  { name: 'ExpressJS', level: '75%' },
  { name: 'Git', level: '80%' },
  { name: 'Postman API Testing', level: '70%' },
  { name: 'MySQL', level: '70%' },
  { name: 'Android Studio', level: '60%' },
  { name: 'GitHub', level: '85%' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto text-center px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
              aria-label={`Skill ${skill.name}`}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{skill.name}</h3>
              <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                  style={{
                    width: skill.level,
                    transition: 'width 1.5s ease-in-out',
                  }}
                  aria-label={`${skill.level} proficiency in ${skill.name}`}
                ></div>
              </div>
              <p className="mt-2 text-gray-700 font-medium">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
