import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-blue-600 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-white text-2xl font-bold">
  <a href="#home" className="hover:text-yellow-300 transition duration-300">
    Yasin Maldar
  </a>
</h1>
        <ul className="flex space-x-6 text-white text-lg">
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
