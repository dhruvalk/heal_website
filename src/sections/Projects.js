import React from "react";

export default function Projects() {
  return (
    <div className="limit-screen flex w-full" id="projects">
      <div className="w-full flex justify-center flex-col px-10">
        <h1 className="primary-header py-10">Projects</h1>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="px-20 flex gap-16 items-center">
      <h1 className="font-bold text-xl">Mar 2016</h1>
      <div className="flex relative h-full">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-yellow-secondary bg-white"></div>
        <div className="border-l-2 border-yellow-secondary"></div>
      </div>
      <div className="bg-green-primary rounded-2xl my-4 flex divide-x-2 divide-white text-white p-2">
        <div className="flex flex-col justify-center p-8 w-1/2">
          <h1 className="font-bold text-xl py-2">
            Drip - Irrigation | Cambodia
          </h1>
          <p>
            Demonstrated the application of slow-release NPK fertilizer pellets
            and taught students to craft homemade pesticides from local
            ingredients to improve soil quality and ensure sustainable pest
            management respectively.
          </p>
        </div>
        <div className="px-4 w-1/2 flex justify-center items-center">
          <div className="w-[380px] h-[300px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}
