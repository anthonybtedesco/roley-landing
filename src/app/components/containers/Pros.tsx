import React from "react";

const Pros = () => {
  return (
    <div className="h-max primary-color relative flex flex-col items-center w-full lg:max-w-[1200px] mx-auto">
      <div className="flex w-full h-full mb-4">
        <img
          src="/Actor-portrait.png"
          alt="Actor"
          className=" lg:w-[540px] lg:h-[780px] md:w-[390px] md:h-[520px] sm:w-[644px] sm:h-[840px] w-[399px] h-[480px] ml-auto relative opacity-50"
        />
      </div>
      <div className="lg:text-6xl absolute text-4xl font-bold text-white">
        With Roley
      </div>
      <div className="sm:mt-20 md:mt-16 lg:mt-20 absolute flex flex-col items-center w-full h-full mt-16">
        <div className="lg:max-w-[520px] sm:max-w-[400px] max-w-[260px] text-darkblue-50 opacity-90 lg:mt-[0px] sm:mt-[0px] mt-[0px] flex flex-col h-28 bg-gray-500 absolute rounded-lg w-2/3 text-center items-center md:w-1/2 md:left-0 md:ml-5">
          <p className="w-5/6 mt-2 text-2xl font-bold">Effortless</p>
          <p className="w-5/6">No more applications; just gigs.</p>
        </div>
        <div className="lg:max-w-[520px] sm:max-w-[400px] max-w-[260px] text-darkblue-50 opacity-90 lg:mt-[260px] sm:mt-[280px] md:mt-[160px] mt-[140px] flex flex-col h-28 bg-gray-500 absolute rounded-lg w-2/3 text-center items-center md:w-1/2 md:left-0 md:ml-5">
          <p className="whitespace-nowrap w-5/6 mt-2 text-2xl font-bold">
            Real Gigs
          </p>
          <p className="w-5/6">Actually book gigs.</p>
        </div>
        <div className="lg:max-w-[520px] sm:max-w-[400px] max-w-[260px] text-darkblue-50 opacity-90 lg:mt-[520px] sm:mt-[560px] md:mt-[320px] mt-[280px] flex flex-col h-28 bg-gray-500 absolute rounded-lg w-2/3 text-center items-center md:w-1/2 md:left-0 md:ml-5">
          <p className="whitespace-nowrap w-5/6 mt-2 text-2xl font-bold">
            Power
          </p>
          <p className="w-5/6">Save time, make money.</p>
        </div>
      </div>
    </div>
  );
};

export default Pros;
