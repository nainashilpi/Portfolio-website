import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import profilePic from "../assets/profile.jpg";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["A Frontend Developer", "A Coder", "A Web Devloper", "A Software Engineer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-white min-h-screen px-6 py-20 bg-[#0c0c1d] overflow-hidden"
    >
      {/* Glowing Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />

      {/* Main Content Glass Card */}
      <motion.div
        className="relative z-10 w-full max-w-3xl text-center backdrop-blur-lg bg-white/5 border border-purple-400/20 shadow-xl rounded-3xl px-6 sm:px-10 py-10 sm:py-14 animate-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image with Animation */}
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-full mx-auto mb-6 border-4 border-purple-500 shadow-xl shadow-purple-500/40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2 leading-tight">
          Hi, I’m <span className="text-purple-500">Naina</span>
        </h1>

        {/* Typed Text Below Name */}
        <div className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 h-10 overflow-hidden">
          <span ref={typingRef} />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-2 border border-purple-500 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 animate-glow"          >
            Let’s Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
