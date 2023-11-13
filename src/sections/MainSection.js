import React from "react";

export default function MainSection() {
  return (
    <div>
      <div className="relative w-screen h-[80vh] bg-gray-500">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex-col flex gap-8 border p-12 rounded-3xl text-center bg-white bg-opacity-40 backdrop-blur-10">
          <h1 className="text-8xl font-bold">HEAL</h1>
          <span className="text-xl">
            A student-led engineering think tank driving sustainable solutions
            in Southeast Asia.
          </span>
          <div className="flex divide-x-2 divide-black justify-center items-center">
            <div className="flex flex-col justify-center items-center px-14">
              <h2 className="text-6xl font-bold">5</h2>
              <p className="text-xl">years</p>
            </div>
            <div className="flex flex-col justify-center items-center px-14">
              <h2 className="text-6xl font-bold">8</h2>
              <p className="text-xl">projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
