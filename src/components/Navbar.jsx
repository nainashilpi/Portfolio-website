import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close on mobile click
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#111] shadow-md backdrop-blur-sm bg-opacity-80">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-purple-500 hover:scale-105 transition duration-300">
          Naina Shilpi 🌸
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative group cursor-pointer px-2"
              onClick={() => scrollTo(item.id)}
            >
              <span className="group-hover:text-purple-400 transition-colors duration-300">
                {item.label}
              </span>
              <span className="block h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
<ul className="md:hidden fixed top-0 right-0 min-h-screen w-2/3 bg-[#ffffff0a] backdrop-blur-lg border-l border-[#ffffff22] shadow-xl transition-transform duration-500 ease-in-out transform z-50 px-6 py-20 space-y-6 text-white text-sm font-medium ${menuOpen ? 'translate-x-0' : 'translate-x-full'}">
  {navItems.map((item) => (
    <li
      key={item.id}
      className="cursor-pointer hover:text-purple-400"
      onClick={() => scrollTo(item.id)}
    >
      {item.label}
    </li>
  ))}
</ul>

      )}
    </nav>
  );
}

export default Navbar;
