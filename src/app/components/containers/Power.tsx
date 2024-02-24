import React from "react";

const Power = () => {
  return (
    <div className="text-white relative lg:max-w-[1200px] mx-auto">
      <div className="sm:space-y-10 sm:mt-14 sm:text-4xl md:mt-5 md:text-6xl lg:text-7xl lg:mt-24 absolute justify-center w-full mt-6 ml-5 text-2xl font-bold">
        <p>Roley gives the power of time</p>
        <p>back to the actor.</p>
      </div>
      {/* <div className="absolute md:text-4xl sm:text-2xl text-lg font-bold sm:space-y-4 lg:mt-[320px] mt-[210px] ml-5 text-darkblue-300 ">
        <p>Roley auto apllies to Casting Calls for you.</p>
        <p>Get offers, and accelerate your acting career!</p>
      </div> */}

      <img src="/Power.png" alt="Power" className="w-full" />
    </div>
  );
};

export default Power;
