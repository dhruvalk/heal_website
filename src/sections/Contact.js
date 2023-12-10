import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="limit-screen flex w-full" id="contact">
      <div className="flex justify-center p-4 lg:p-24 w-full items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center border-2 rounded-xl w-full lg:w-2/3 border-black px-4 lg:px-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black">
          <div className="py-8 lg:px-8 flex flex-col justify-center gap-2 lg:text-right w-full lg:w-1/3">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <p>
              Reach out to find out more about what we do and how we can work
              together!
            </p>
          </div>
          <div className="lg:px-8 w-full lg:w-2/3 flex flex-col justify-center gap-6 py-8 lg:py-2 text-left">
            <div className="flex gap-5 items-center">
              <Link href="https://www.linkedin.com/showcase/humanitarian-engineers-and-leaders/about/">
                <AiFillLinkedin className="cursor-pointer hover:scale-110 transition-all" />
              </Link>
              Humanitarian Engineers And Leaders (HEAL)
            </div>
            <div className="flex gap-5 items-center">
              <Link href="mailto:reclub-heal@e.ntu.edu.sg">
                <MdEmail className="cursor-pointer hover:scale-110 transition-all" />
              </Link>
              rep.ntu.heal@gmail.com
            </div>
            <div className="flex gap-5 items-center">
              <Link href="tel:83438517">
                <IoMdCall className="cursor-pointer hover:scale-110 transition-all" />
              </Link>
              +65 83438517
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
