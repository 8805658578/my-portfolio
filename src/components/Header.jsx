import React, { useState } from "react";
import { Link } from "react-scroll"; // npm install react-scroll

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Abhiraj</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md flex flex-col items-center py-4 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-lg hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}