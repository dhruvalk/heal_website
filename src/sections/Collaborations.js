import Image from "next/image";
import React from "react";

export default function Collaborations() {
  const name_icon_map = {
    "Roslin Orphanage": "/roslin.png",
    "Operation Hope Foundation": "/operation_hope.png",
    Mistletoe: "/mistletoe.png",
    Terraformers: "/terraformers.png",
  };
  return (
    <div
      className="limit-screen flex w-full pb-12 md:pb-24 scroll-smooth"
      id="partners"
    >
      <div className="flex justify-center flex-col md:gap-16 gap-10 px-10">
        <h1 className="primary-header pt-24">Our Collaborations</h1>
        <p>
          We express our sincere appreciation to our dedicated partners for
          their invaluable contributions. Your support fuels our efforts to
          foster sustainability in Southeast Asia, and we are truly grateful for
          your partnership.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-12 md:gap-24">
          {Object.keys(name_icon_map).map((item) => (
            <div className="flex flex-col items-center gap-4">
              <div className="p-8 h-[220px] w-[220px] relative flex justify-center items-center text-center rounded-full bg-white border-2 border-yellow-secondary">
                <Image src={name_icon_map[item]} width={100} height={100} />
              </div>
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
