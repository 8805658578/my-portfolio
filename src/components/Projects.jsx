import React from "react";
import projectImage from "../assets/realChatApp.png";
import portfolioImage from "../assets/portfolioimage.png";


const projects = [
  {
    title: "Chat Application",
    description: "A real-time chat app using Java, Spring Boot, WebSocket, and React.",
    tech: "Java | Spring Boot | React | WebSocket",
    github: "https://github.com/yourusername/chat-app",
    live: "#",
    image: projectImage, // Replace with project image
  },
  {
    title: "E-commerce Website",
    description: "Online store built with React, Node.js, and MongoDB.",
    tech: "React | Node.js | MongoDB | TailwindCSS",
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing projects and skills.",
    tech: "React | TailwindCSS | Framer Motion",
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    image: portfolioImage,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 text-white">
      {/* Background gradient same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradient"></div>

      <div className="relative max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}