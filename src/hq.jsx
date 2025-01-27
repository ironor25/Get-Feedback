<div id="projects" className="py-20 px-4 h-screen overflow-x-auto overflow-y-hidden"> 
        
<div className="max-w-6xl mx-auto min-h-screen">
  <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        {/* Project Name */}
        <a href={project.link} target='_blank'>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {project.title} 
        </h2>
        </a>
        <h4 className="  text-gray-800 mb-4">
         By {project.author}
        </h4>
        <h4 className="  text-gray-800 mb-4">
          {project.description}
        </h4>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    ))}
  </div>
</div>
</div>