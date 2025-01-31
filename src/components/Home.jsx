import React from 'react'
import { signInWithGoogle } from '../firebase';

function Home() {
    const projects = [
        {
          id: 1,
          title: "E-commerce Dashboard",
          description: "Full-stack dashboard with authentication, product management, and analytics.",
          techStack: ["React", "Node.js", "MongoDB"],
          author: "Sarah Chen",
          color: "bg-red-600"
        },
        {
          id: 2,
          title: "Weather App",
          description: "Real-time weather app with location-based forecasts and alerts.",
          techStack: ["JavaScript", "API", "CSS"],
          author: "Mike Johnson",
          color: "bg-blue-600"
        },
        {
          id: 3,
          title: "Task Manager",
          description: "Collaborative task platform with real-time updates.",
          techStack: ["Vue.js", "Firebase"],
          author: "Alex Wong",
          color: "bg-yellow-500"
        },
        {
          id: 4,
          title: "Social Media Clone",
          description: "Instagram-like platform with posts and messaging.",
          techStack: ["React Native", "Firebase"],
          author: "Lisa Park",
          color: "bg-red-600"
        }
        ,
        {
          id: 4,
          title: "Social Media Clone",
          description: "Instagram-like platform with posts and messaging.",
          techStack: ["React Native", "Firebase"],
          author: "Lisa Park",
          color: "bg-red-600"
        }
        ,
        {
          id: 4,
          title: "Social Media Clone",
          description: "Instagram-like platform with posts and messaging.",
          techStack: ["React Native", "Firebase"],
          author: "Lisa Park",
          color: "bg-red-600"
        }
      ];
    
      return (
        <div className="bg-lime-400 h-screen" >
          {/* Navbar */}
          <div className="bg-transparent p-4 flex justify-between items-center shadow-md border-b border-gray-600">
            <div className="font-mono text-3xl font-bold">Get Feedback</div>
            <div className='flex space-x-8'>
            <button className="button" onClick={signInWithGoogle}>
           Sign in with Google
            </button>
            {/* <button class="button">
            Dev Login
            </button> */}
            </div>
      
          </div>
    
          <div className="mt-8 overflow-x-auto whitespace-nowrap hide-scrollbar" >
            <div className="inline-flex space-x-10 p-4 mt-24">
              {/* Map over the projects array to render cards */}
              {projects.map((project, index) => (
          <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden">
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
      );
  
}

export default Home;