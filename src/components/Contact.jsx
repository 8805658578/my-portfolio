import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { label: "Email", value: "abhirajchangan007@gmail.com", icon: <FaEnvelope className="text-blue-500 w-10 h-10 mr-4" /> },
    { label: "Phone", value: "+91 8805658578", icon: <FaPhone className="text-green-500 w-10 h-10 mr-4" /> },
    { label: "Location", value: "Pune, India", icon: <FaMapMarkerAlt className="text-red-500 w-10 h-10 mr-4" /> },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden px-6 py-20">
      
      {/* Background same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-gradient"></div>

      <div className="relative max-w-3xl w-full space-y-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-12">
          Feel free to contact me for job opportunities.
        </p>

        {/* Contact Info in clean vertical layout */}
        <div className="space-y-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 hover:bg-white/20 transition"
            >
              {contact.icon}
              <div className="text-left">
                <p className="text-lg font-medium">{contact.label}</p>
                <p className="text-gray-300">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}