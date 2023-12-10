import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const projects = [
  {
    name: "Solar Powered Lamps | Cambodia, Indonesia",
    date: "2015-2018",
    description:
      "Two humanitarian engineering projects were successfully executed in Tesabela and Prev Veng, Cambodia, addressing the need for sustainable lighting solutions in areas vulnerable to climate change and inconsistent electricity supplies. The projects involved the installation of solar streetlamps and portable solar lamps, aiming to enhance visibility, safety, and community empowerment through the use of renewable energy sources.",
    images: [
      "/projects/solar_lamp/1.png",
      "/projects/solar_lamp/2.png",
      "/projects/solar_lamp/3.png",
      "/projects/solar_lamp/4.png",
    ],
  },
  {
    name: "Arduino Experience Workshops | Cambodia",
    date: "Oct 2017",
    description:
      "Our team conducted a 3-day Arduino Experience workshop for students enrolled in OHF's Training Job Skills for Service Sector (TJSSS) program at the Hope Training Centre. The workshop focused on building a functional mini keyboard using Arduino's sensor hardware and coding, aiming to spark interest in STEM, cultivate confidence in technical abilities, and encourage a spirit of innovation and ongoing experimentation among the participants.",
    images: [
      "/projects/arduino/1.png",
      "/projects/arduino/2.png",
      "/projects/arduino/3.png",
      "/projects/arduino/4.png",
    ],
  },
  {
    name: "Drip Irrigation | Cambodia",
    date: "Oct 2017/18",
    description:
      "The project aimed to enhance water distribution and reduce water usage in garden plots through the introduction of a drip irrigation system. Additionally, our team demonstrated the application of slow-release NPK fertilizer pellets and taught locals to create homemade pesticides from local ingredients, promoting sustainable pest management and improving soil quality. The project's outcomes include teaching community members how to build a functional drip irrigation system using local materials, introducing the benefits of slow-release NPK fertilizer pellets for healthier crop growth, and empowering individuals to craft and use homemade pesticides to reduce reliance on harmful chemicals in agriculture.",
    images: [
      "/projects/water_irrigation/1.png",
      "/projects/water_irrigation/2.png",
      "/projects/water_irrigation/3.png",
      "/projects/water_irrigation/4.png",
      "/projects/water_irrigation/5.png",
    ],
  },
  {
    name: "Vertical Farming | Cambodia",
    date: "Oct 2018",
    description:
      "our team launched a vertical farming project to introduce the community to innovative farming practices. Embracing the space and water conservation benefits of vertical farming, the project aimed to develop and implement a cost-efficient system using locally available materials. Through hands-on training, we deployed these setups and taught locals how to build, operate, and maintain their own vertical farming systems, fostering long-term usability. Additionally, the project sought to spark interest in sustainable agriculture, experimentation, and STEM by introducing the community to a diverse range of crops suitable for vertical farming.",
    images: [
      "/projects/vertical_farming/1.png",
      "/projects/vertical_farming/2.png",
      "/projects/vertical_farming/3.png",
    ],
  },
  {
    name: "Currency Literacy Game | Cambodia",
    date: "Oct 2018",
    description:
      "Our team created an interactive currency literacy game to facilitate seamless decision-making in both USD and KHR, designed specifically for TJSSS students. The project's objectives included instructing students on handling mixed currency transactions with confidence to improve their financial literacy and future career prospects. The game provided an engaging and interactive educational experience, featuring progressive difficulty levels and constant feedback to enhance the learning process. The overarching goal was to instill a spirit of curiosity and introduce an element of fun into the educational journey for the students.",
    images: [
      "/projects/currency_game/1.png",
      "/projects/currency_game/2.png",
      "/projects/currency_game/3.png",
      "/projects/currency_game/4.png",
    ],
  },
];

export default function Projects() {
  return (
    <div className="limit-screen flex w-full" id="projects">
      <div className="w-full flex justify-center flex-col px-10">
        <h1 className="primary-header py-10">Projects</h1>
        {projects.map(({ name, date, description, images }, idx) => (
          <Project
            key={idx}
            name={name}
            date={date}
            description={description}
            images={images}
          />
        ))}
      </div>
    </div>
  );
}

function Project({ name, date, description, images }) {
  return (
    <div className="px-10 flex gap-16 items-center">
      <h1 className="font-bold text-xl whitespace-pre-line w-1/6 text-right">
        {date}
      </h1>
      <div className="flex relative h-full">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-yellow-secondary bg-white"></div>
        <div className="border-l-2 border-yellow-secondary"></div>
      </div>
      <div className="bg-green-primary rounded-2xl my-4 flex divide-x-2 divide-white text-white p-2 w-5/6">
        <div className="flex flex-col justify-center p-8 w-1/2">
          <h1 className="font-bold text-xl py-2">{name}</h1>
          <p className="whitespace-pre-line">{description}</p>
        </div>
        <div className="px-4 py-2 w-1/2 flex justify-center items-center">
          <div className="lg:w-[380px] w-[320px] h-[300px]">
            <Slider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {images.map((image, idx) => {
            return (
              <div
                key={idx}
                className="keen-slider__slide flex items-center justify-center h-[300px] w-[320px] lg:w-[380px]"
              >
                <img src={image} />
              </div>
            );
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center -translate-y-5">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
