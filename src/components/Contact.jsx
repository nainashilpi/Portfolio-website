import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#0f0f1a]"
    >
      <div className="relative w-full max-w-5xl bg-[#ffffff0a] backdrop-blur-xl border border-[#ffffff1a] rounded-2xl p-10 md:flex md:justify-between md:items-start shadow-lg overflow-hidden">

        {/* Glass glowing background layer */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-600 to-blue-500 opacity-30 blur-2xl rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 blur-2xl rounded-full animate-pulse" />
        </div>

        {/* Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-4">
            Let’s connect! Whether you want to talk tech, collab, or just say hi — I’m here.
          </p>
          <p className="text-gray-400">
            📍 Bhopal, India <br />
            📧 nainashilpi424@gmail.com <br />
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            <a
              href="https://github.com/nainashilpi"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              github.com/nainashilpi
            </a>
            <br />
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            <a
              href="https://www.linkedin.com/in/naina-yadav-140b1b287"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              linkedin.com/in/nainashilpi
            </a>
          </p>
        </div>

        {/* Right Side: Form */}
        <form className="md:w-1/2 space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffffff22] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffffff22] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a2e] border border-[#ffffff22] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
