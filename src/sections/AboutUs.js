import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="limit-screen flex w-full" id="about">
      <div className="w-2/3 flex justify-center flex-col gap-16 px-10">
        <h1 className="primary-header pt-10">About Us</h1>
        <p>
          HEAL (Humanitarian Engineers And Leaders) is a group of dedicated
          engineering students from NTU's Renaissance Engineering Programme
          (REP). Our passion lies in using our business and engineering skills
          to make a positive difference in society. Inspired by sustainability,
          inclusivity, and diverse communities in Southeast Asia, our mission is
          to create social impact through engineering, particularly in this
          region. Our expertise lies in:
        </p>
        <div className="flex justify-between items-center">
          {[
            "Diverse Backgrounds in STEM",
            "Experienced members in volunteering & education",
            "Structured membership & project continuity",
          ].map((item) => (
            <div className="mx-8 w-full h-full p-8 flex justify-center items-center text-center rounded-xl bg-green-primary text-white font-bold">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 relative p-8">
        <Image
          src={"/about_us.png"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
