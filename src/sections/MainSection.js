import Image from "next/image";
import React from "react";
import headerPng from "../../public/header.png";

export default function MainSection() {
  return (
    <div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
}

function DesktopHeader() {
  return (
    <div className="relative 2xl:w-screen hidden md:block">
      <Image
        src={headerPng}
        width={10000}
        height={10000}
        placeholder="blur"
        className="hidden md:block"
      />
      <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex-col gap-6 lg:gap-8 border p-8 lg:p-12 rounded-3xl text-center bg-white bg-opacity-40 backdrop-blur-sm">
        <h1 className="text-6xl lg:text-8xl font-bold">HEAL</h1>
        <span className="lg:text-xl">
          A student-led engineering think tank driving sustainable solutions in
          Southeast Asia.
        </span>
        <div className="flex divide-x-2 divide-black justify-center items-center">
          <div className="flex flex-col justify-center items-center px-14">
            <h2 className="text-6xl font-bold">5</h2>
            <p className="lg:text-xl">years</p>
          </div>
          <div className="flex flex-col justify-center items-center px-14">
            <h2 className="text-6xl font-bold">8</h2>
            <p className="lg:text-xl">projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <div className="flex md:hidden justify-center items-center flex-col gap-6 p-8 text-center bg-green-primary rounded-3xl m-2 text-white">
      <h1 className="text-6xl font-bold">HEAL</h1>
      <span className="">
        A student-led engineering think tank driving sustainable solutions in
        Southeast Asia.
      </span>
      <div className="flex divide-x-2 divide-white justify-center items-center">
        <div className="flex flex-col justify-center items-center px-14">
          <h2 className="text-6xl font-bold">5</h2>
          <p>years</p>
        </div>
        <div className="flex flex-col justify-center items-center px-14">
          <h2 className="text-6xl font-bold">8</h2>
          <p>projects</p>
        </div>
      </div>
    </div>
  );
}
