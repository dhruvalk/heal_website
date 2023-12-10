import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="py-4 w-full bg-green-primary">
      <div className="limit-screen flex justify-between items-center px-8 text-white">
        <div className="text-left flex gap-6">
          <Link href="https://www.linkedin.com/showcase/humanitarian-engineers-and-leaders/about/">
            <AiFillLinkedin
              size={30}
              className="cursor-pointer hover:scale-110 transition-all"
            />
          </Link>
          <Link href="mailto:reclub-heal@e.ntu.edu.sg">
            <MdEmail
              size={30}
              className="cursor-pointer hover:scale-110 transition-all"
            />
          </Link>
          <Link href="tel:83438517">
            <IoMdCall
              size={30}
              className="cursor-pointer hover:scale-110 transition-all"
            />
          </Link>
        </div>
        <div>© HEAL {year}</div>
      </div>
    </footer>
  );
}

export default Footer;
