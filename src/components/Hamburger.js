import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = () => setShowMenu((prev) => !prev);
  return (
    <div className="md:hidden">
      <div className="fixed right-2 top-2 z-20">
        {showMenu ? (
          <IoMdClose size={30} onClick={clickHandler} className="text-white" />
        ) : (
          <GiHamburgerMenu size={30} onClick={clickHandler} />
        )}
      </div>

      <div
        className={`fixed h-screen w-screen bg-green-primary z-10 ease-in-out duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <ul className="h-full flex flex-col justify-center items-center text-white gap-8">
          <li className="">
            <a href="#home" onClick={clickHandler}>
              Home
            </a>
          </li>
          <li className="">
            <a href="#about" onClick={clickHandler}>
              About
            </a>
          </li>
          <li className="">
            <a href="#projects" onClick={clickHandler}>
              Projects
            </a>
          </li>
          <li className="">
            <a href="#partners" onClick={clickHandler}>
              Partners
            </a>
          </li>
          <li className="">
            <a href="#contact" onClick={clickHandler}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
