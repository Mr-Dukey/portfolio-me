import NavLink from "@/components/NavLink/NavLink";
import Image from "next/image";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 mt-6 z-50 px-4 md:px-8">
      <div className="flex justify-between items-center glass-dark p-4 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
        {/* Logo / Title */}
        <h2 className="text-white font-bold text-xl md:text-2xl flex items-center gap-3 group cursor-pointer transition-all duration-300">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px]">
            <div className="w-full h-full bg-dark rounded-[10px] flex items-center justify-center overflow-hidden">
              <Image 
                src={"/logos/code.png"} 
                width={40} 
                height={40} 
                alt={"Developer"} 
                className="group-hover:scale-110 transition-transform duration-300 grayscale-100"
              />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:to-cyan-400 transition-all duration-300">
            Developer
          </span>
        </h2>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/resume" label="Resume" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-24 left-4 right-4 glass-dark rounded-3xl p-6 border border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            <nav className="flex flex-col gap-4">
              <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
              <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} />
              <NavLink href="/resume" label="Resume" onClick={() => setIsOpen(false)} />
              <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

