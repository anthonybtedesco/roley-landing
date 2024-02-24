import React from "react";
import Carousel from "./Carousel";

const ConsCarousel = () => {
  const items = [
    [
      "Stress",
      "/icons/procrastination.png",
      "Actors should be acting not applying.",
    ],
    [
      "Limited Time",
      "/icons/waste-time.png",
      "No human could possibly apply to all their best fits.",
    ],
    [
      "Boring Applications",
      "/icons/applications.png",
      "We know, applying is boring.",
    ],
  ];

  return (
    <div className="h-max primary-color relative flex flex-col items-center w-full lg:max-w-[1200px] mx-auto">
      <div className="sm:text-6xl absolute text-4xl font-bold text-white">
        Without Roley
      </div>
      <div className="flex w-full h-full mb-4">
        <img
          src="/Applying-noBG.png"
          alt="Applying"
          className=" lg:w-[720px] lg:h-[960px] md:w-[550px] md:h-[720px] sm:w-[644px] sm:h-[840px] w-[399px] h-[480px] ml-auto relative opacity-50"
        />
      </div>
      <div className=" sm:mt-20 md:mt-16 lg:mt-20 absolute flex flex-col items-center w-full h-full mt-16 md:left-0 md:ml-5">
        <Carousel items={items}></Carousel>
      </div>
    </div>
  );
};

export default ConsCarousel;
