import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/AbhirajP.jpg";
import pdf from "../public/AbhiResumeUpdate.pdf";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradient"></div>

      {/* Content */}
      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center px-6">

        {/* Profile */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={profile}
            alt="profile"
            className="w-56 h-56 rounded-full border-4 border-blue-500 shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Text */}
        <div className="text-center md:text-left">

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500">Abhiraj</span>
          </motion.h1>

          <div className="text-xl text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Spring Boot Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mb-8 max-w-md">
            I build modern, scalable web applications using Java, Spring Boot,
            React and modern technologies.
          </p>

          <motion.button
            className="bg-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.button>

          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            View Resume
          </a>

        </div>
      </div>
    </section>
  );
}