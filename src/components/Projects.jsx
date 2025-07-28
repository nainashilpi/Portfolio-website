import React from "react";
import { motion } from "framer-motion";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

const projects = [
  {
    title: "Currency Converter",
    tech: "ReactJS, Tailwind CSS",
    image: proj1,
    link: "https://github.com/nainashilpi/Currency-Converter",
    view: "https://currency-converter-mu-sepia-58.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe",
    tech: "HTML, CSS, JavaScript",
    image: proj2,
    link: "https://github.com/nainashilpi/Tic-Tac-Toe-game",
    view: "https://tic-tac-toe-game-smoky-mu.vercel.app/",
  },
  {
    title: "Spotify Clone",
    tech: "HTML, CSS, Bootstrap",
    image: proj1,
    link: "https://github.com/nainashilpi/Spotify-",
    view: "https://spotify-eight-sable.vercel.app/",
  },
  {
    title: "Amazon Clone",
    tech: "HTML, CSS",
    image: proj2,
    link: "https://github.com/nainashilpi/amazone",
    view: "https://amazone.vercel.app/",
  },
  {
    title: "Portfolio Website",
    tech: "ReactJS, Tailwind CSS",
    image: proj1,
    link: "https://github.com/nainashilpi/Portfolio",
    view: "https://portfolio-website-woad-seven-44.vercel.app/",
  },
  {
    title: "Image Gallery",
    tech: "HTML, CSS",
    image: proj2,
    link: "https://github.com/nainashilpi/mountain-trekking-gallery",
    view: "https://mountain-trekking-gallery.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 min-h-screen bg-[#0c0c1d] text-white">
      {/* ✅ Center the headings */}
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-2 leading-tight">
          Projects
        </h2>
        <div className="text-xl sm:text-2xl font-semibold text-purple-400 h-10 overflow-hidden">
          <span className="typing-text">A Glimpse of What I Build</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl bg-[#1a1a2f]/40 border border-purple-500/30 shadow-xl backdrop-blur-md p-6 group transition-all duration-300 hover:shadow-purple-500/30 animate-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-bold text-purple-300 mb-1">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{proj.tech}</p>

            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium text-blue-400 underline hover:text-white transition-colors mb-1"
            >
              GitHub Link →
            </a>

            {proj.view && (
              <a
                href={proj.view}
                target="_blank"
                rel="noreferrer"
                className="block mt-2 px-3 py-1 text-sm text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all w-fit"
              >
                View Live ↗
              </a>
            )}

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-800 rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="https://github.com/nainashilpi?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-2 border border-purple-500 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 animate-glow"
        >
          See More Projects →
        </a>
      </div>
    </section>
  );
};

export default Projects;
