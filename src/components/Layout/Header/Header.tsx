import NavLink from "@/components/NavLink/NavLink";
import React from "react";
export default function Header() {
  return (
    <div className="w-full sticky bg-white p-4 rounded-full my-4 flex justify-between">
      <h2 className={`text-black font-bold text-2xl`}>Portfolio</h2>
      <div className="">
        <NavLink href="/" label="Home" />
        <NavLink href="/about" label="About" />
        <NavLink href="/resume" label="Resume" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </div>
  );
}
