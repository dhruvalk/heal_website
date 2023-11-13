import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="limit-screen flex w-full" id="contact">
      <div className="flex justify-center p-24 w-full items-center">
        <div className="flex justify-center items-center border-2 rounded-xl w-2/3 border-black px-10 py-4 divide-x-2 divide-black">
          <div className="px-8 flex flex-col justify-center gap-2 text-right w-1/2">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <p>
              Reach out to find out more about what we do and how we can work
              together!
            </p>
          </div>
          <div className="px-8 w-1/2 flex flex-col justify-center gap-6 py-2 text-left">
            <div className="flex gap-5 items-center">
              <AiFillLinkedin
                size={30}
                className="cursor-pointer hover:scale-105"
              />
              Humanitarian Engineers And Leaders (HEAL)
            </div>
            <div className="flex gap-5 items-center">
              <MdEmail size={30} className="cursor-pointer hover:scale-105" />
              rep.ntu.heal@gmail.com
            </div>
            <div className="flex gap-5 items-center">
              <IoMdCall size={30} className="cursor-pointer hover:scale-105" />
              +65 90888888
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
