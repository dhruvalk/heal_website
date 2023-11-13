import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="py-4 w-full bg-green-primary">
      <div className="limit-screen flex justify-between items-center px-8 text-white">
        <div className="text-left flex gap-6">
          <AiFillLinkedin
            size={30}
            className="cursor-pointer hover:scale-105"
          />
          <MdEmail size={30} className="cursor-pointer hover:scale-105" />
          <IoMdCall size={30} className="cursor-pointer hover:scale-105" />
        </div>
        <div>© HEAL {year}</div>
      </div>
    </footer>
  );
}

export default Footer;
