import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="limit-screen flex md:flex-row flex-col gap-4 items-center py-6 px-4 justify-between">
      <SocialMediaIcons />
      <HEALlogo />
      <ContactButton />
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex gap-6 md:order-1 order-2">
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
  );
}

function HEALlogo() {
  return (
    <div className="relative w-28 h-28 order-1 md:order-2">
      <Image
        src={"/logo.png"}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

function ContactButton() {
  return (
    <div className="border-2 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-green-primary hover:text-white transition-all hidden md:block md:order-3">
      <a href="#contact">Contact Us</a>
    </div>
  );
}
