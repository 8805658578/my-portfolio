import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", level: "90%", icon: <FaHtml5 className="text-orange-500 w-25 h-25 mr-5" /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt className="text-blue-500 w-25 h-25 mr-5" /> },
  { name: "JavaScript", level: "80%", icon: <FaJs className="text-yellow-400 w-25 h-25 mr-5" /> },
  { name: "React", level: "75%", icon: <FaReact className="text-cyan-400 w-25 h-25 mr-5" /> },
  { name: "Node.js", level: "70%", icon: <FaNodeJs className="text-green-500 w-25 h-25 mr-5" /> },
  { name: "MongoDB", level: "65%", icon: <SiMongodb className="text-green-600 w-25 h-25 mr-5" /> },
  { name: "Java", level: "85%", icon: <FaJava className="text-red-500 w-25 h-25 mr-5" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden px-6 py-16"
    >
      {/* Background same as Hero.jsx */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradient"></div>

      <div className="relative max-w-5xl w-full mx-auto space-y-12">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>

        {/* Description */}
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
          I enjoy building modern, responsive web applications using
          clean code and efficient technologies. These are the core
          tools and technologies I use to create fast, scalable, and
          user-friendly digital experiences.
        </p>

        {/* Skills List with Zig-Zag Layout */}
        {skills.map((skill, index) => {
          const isRight = index % 2 === 0; // Right for even, left for odd
          return (
            <div
              key={index}
              className={`flex ${isRight ? "justify-end" : "justify-start"} w-full`}
            >
              <div className="w-full md:w-2/3">
                
                {/* Skill Name with Icon */}
                <div className={`flex items-center ${isRight ? "justify-end" : "justify-start"} mb-2`}>
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                  <span className="ml-2">{skill.level}</span>
                </div>

                {/* Skill Bar with simple gradient */}
                <div className=" bg-white/20 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full transition-all duration-700"
                    style={{
                      width: skill.level,
                      background: "linear-gradient(to right, #4f46e5, #3b82f6, #06b6d4)", // simple gradient
                    }}
                  ></div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;