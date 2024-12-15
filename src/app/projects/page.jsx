

const Projects = () => {
  const projects = [
    { id: 1, title: 'FIFA', description: 'cad fifa.', link: 'https://github.com/younes0510/FIFA' },
    { id: 2, title: 'PRODECT', description: 'prodect list ', link: 'https://github.com/younes0510/prodect' },
    { id: 3, title: 'E-COMMERCE', description: 'e-commerce page', link: 'https://github.com/younes0510/e-commerce' },
    { id: 4, title: 'ANIMAL-FRONT', description: 'animal shop', link: 'https://github.com/younes0510/animal-front' },
    { id: 5, title: 'WATHER-APP', description: 'wather app', link: 'https://github.com/younes0510/weather-app' },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <a key={project.id} href={project.link} passHref>
            <div
              className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-rose-900">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
