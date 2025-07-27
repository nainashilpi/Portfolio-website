import React from "react";
import { motion } from "framer-motion";
//import profilePic from "../assets/profile.jpg";

function About() {
  const aboutStats = [
    { title: "University", value: "UIT RGPV" },
    { title: "Major", value: "Information Technology" },
    { title: "Speciality", value: "Web Development" },
    { title: "GPA", value: "6.2" },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col justify-center items-center text-white min-h-screen px-6 py-20 bg-[#0c0c1d] overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Glass Card */}
      <motion.div
        className="relative z-10 max-w-4xl text-center backdrop-blur-lg bg-white/5 border border-purple-400/20 shadow-xl rounded-3xl px-8 py-12 animate-glow"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        {/* <motion.img
          src={profilePic}
          alt="Profile"
          className="w-56 h-56 object-cover rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-xl shadow-purple-500/40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        /> */}

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2 leading-tight">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Subheading */}
        <div className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 h-10 overflow-hidden">
          <span className="typing-text">Aspiring Sotware Developer</span>
        </div>

        {/* About Text */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Hey! I'm Naina, Currently pursuing B.tech in Information Technology at UIT RGPV, Bhopal(M.P.), graduating in 2027.
          I'm passionate about Web Development and proficient in building responsive, user-friendly websites using technologies. Alongside development, I’m actively enhancing my skills in Data Structures and Algorithms (DSA) and regularly participate in coding contests on platforms like LeetCode and CodeChef.
          Let’s turn ideas into impactful digital experiences!💻💜
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-8">
          {aboutStats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-4 border border-purple-500/20 shadow-md hover:shadow-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-1">{item.title}</h3>
              <span className="text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
