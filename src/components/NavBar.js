import React from "react";

function NavBar() {
  return (
    <nav className="bg-green-primary py-4">
      <ul className="flex justify-center items-center text-white">
        <li className="mx-8">
          <a href="#">Home</a>
        </li>
        <li className="mx-8">
          <a href="#">About</a>
        </li>
        <li className="mx-8">
          <a href="#">Projects</a>
        </li>
        <li className="mx-8">
          <a href="#">Partners</a>
        </li>
        <li className="mx-8">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
