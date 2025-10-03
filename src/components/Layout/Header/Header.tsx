import NavLink from "@/components/NavLink/NavLink";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 mt-5 z-50">
      <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-full mx-4 md:mx-8">
        {/* Logo / Title */}
        <h2 className="text-black font-bold text-2xl">Portfolio</h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/resume" label="Resume" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none p-2 rounded-full hover:bg-gray-200 transition"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-xl mx-4 md:mx-8 mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 p-4">
          <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
          <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} />
          <NavLink href="/resume" label="Resume" onClick={() => setIsOpen(false)} />
          <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
