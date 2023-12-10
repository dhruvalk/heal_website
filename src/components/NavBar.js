import React from "react";

function NavBar() {
  return (
    <nav className="bg-green-primary py-4 hidden md:block">
      <ul className="flex justify-center items-center text-white">
        <li className="mx-8">
          <a href="/">Home</a>
        </li>
        <li className="mx-8">
          <a href="#about">About</a>
        </li>
        <li className="mx-8">
          <a href="#projects">Projects</a>
        </li>
        <li className="mx-8">
          <a href="#partners">Partners</a>
        </li>
        <li className="mx-8">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
