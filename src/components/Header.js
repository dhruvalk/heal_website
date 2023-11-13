import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <div className="limit-screen flex items-center py-6 px-4 justify-between ">
        <div className="text-left flex gap-6">
          <AiFillLinkedin
            size={30}
            className="hover:text-[#0077b5] cursor-pointer hover:scale-105"
          />
          <MdEmail
            size={30}
            className="hover:text-red-500 cursor-pointer hover:scale-105"
          />
          <IoMdCall
            size={30}
            className="hover:text-green-500 cursor-pointer hover:scale-105"
          />
        </div>
        <div className="text-center">Logo</div>
        <div className="text-right">
          <div className="border-2 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-green-primary hover:text-white">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
