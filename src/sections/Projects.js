import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

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
        <div className="px-4 py-2 w-1/2 flex justify-center items-center">
          <div className="lg:w-[380px] w-[320px] h-[300px]">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider() {
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

  const images = [
    "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  ];

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
