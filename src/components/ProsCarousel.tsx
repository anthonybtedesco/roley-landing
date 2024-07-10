import React from "react";
import Carousel from "./Carousel";

const ProsCarousel = () => {
  const items = [
    [
      "Effortless",
      "/icons/roley-applier.png",
      "No more applications, just offers.",
    ],
    ["Freedom", "/icons/wink.png", "Own your time."],
    ["Power", "/icons/make-money.png", "Save time, make money."],
  ];

  return (
    <div className="h-max primary-color relative flex flex-col items-center w-full lg:max-w-[1200px] mx-auto">
      <div className="flex w-full h-full mb-4">
        <img
          src="/Actor-portrait.png"
          alt="Actor"
          className=" lg:w-[720px] lg:h-[960px] md:w-[550px] md:h-[720px] sm:w-[644px] sm:h-[840px] w-[399px] h-[480px] ml-auto relative opacity-50"
        />
      </div>
      <div className="sm:text-6xl absolute text-4xl font-bold text-white">
        With Roley
      </div>
      <div className="sm:mt-20 md:mt-16 lg:mt-20 absolute flex flex-col items-center w-full h-full mt-16 md:left-0 md:ml-5">
        <Carousel items={items}></Carousel>
      </div>
    </div>
  );
};

export default ProsCarousel;
