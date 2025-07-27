import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaCode, // Used for VS Code
} from "react-icons/fa";
import {
  SiPython,
  SiTailwindcss,
  SiCplusplus,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  const [showMore, setShowMore] = useState(false);

  const allSkills = [ 
     
    // Dev Technologies
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "ExpressJS", icon: <FaNodeJs className="text-gray-300" /> }, // No express icon
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-300" /> },
    
    // Programming Languages
    { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
    { name: "C", icon: <SiCplusplus className="text-blue-200" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },

    // Tools
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-300" /> },
  ];

  const displayedSkills = showMore ? allSkills : allSkills.slice(0, 10);

  return (
    <section
      id="skills"
      className="relative flex flex-col justify-center items-center min-h-screen px-6 py-20 bg-[#0c0c1d] text-white overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Glass Effect Container */}
      <motion.div
        className="relative z-10 w-full max-w-5xl text-center backdrop-blur-lg bg-white/5 border border-purple-400/20 shadow-xl rounded-3xl px-8 py-12 animate-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2 leading-tight">
          Skills
        </h2>
        <div className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 h-10 overflow-hidden">
          <span className="typing-text">My Tech Stack</span>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center mb-8 max-w-7xl mx-auto">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative group flex flex-col items-center justify-center w-28 h-28 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md border border-purple-500/30 hover:scale-105 transition-all animate-glow"
              whileHover={{ scale: 1.1 }}
            >
              {/* Animated purple glow corner */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-800 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-500" />

              <div className="text-2xl sm:text-3xl mb-1">{skill.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-purple-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="inline-block px-6 py-2 border border-purple-500 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 animate-glow"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </motion.div>
    </section>
  );
}
export default Skills;
