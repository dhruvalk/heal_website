import React from "react";

export default function Collaborations() {
  return (
    <div className="limit-screen flex w-full">
      <div className="bg-green-100 flex justify-center flex-col gap-16 px-10">
        <h1 className="primary-header pt-24">Our Collaborations</h1>
        <p>
          We express our sincere appreciation to our dedicated partners for
          their invaluable contributions. Your support fuels our efforts to
          foster sustainability in Southeast Asia, and we are truly grateful for
          your partnership.
        </p>
        <div className="flex justify-center items-center">
          {["Operation Hope Foundation", "Mistletoe", "Terraformers"].map(
            (item) => (
              <div className="flex flex-col items-center gap-4">
                <div className="h-[220px] w-[220px] mx-16 flex justify-center items-center text-center rounded-full bg-white border-2 border-yellow-secondary"></div>
                <p className="font-bold">{item}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
