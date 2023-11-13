import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <div className="limit-screen flex items-center py-6 px-4 justify-between">
        <div className="text-left flex gap-6">
          <AiFillLinkedin
            size={30}
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <MdEmail
            size={30}
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <IoMdCall
            size={30}
            className="cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="text-center relative w-28 h-28">
          <Image
            src={"/logo.png"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="text-right">
          <div className="border-2 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-green-primary hover:text-white transition-all">
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
