import React from "react";

const Time = () => {
  return (
    <div className="primary-color text-white lg:max-w-[1200px] mx-auto">
      <div className="mt-24 mb-10 text-center">
        <p className="lg:text-6xl text-4xl font-bold mx-2">
          Acting applications waste actors' time.
        </p>
        {/* <p className="lg:text-4xl text-2xl font-bold md:mx-20 mx-2 mt-6 text-darkblue-300">
          Roley applies to gigs on Backstage and Casting Networks for actors so
          that all they have to do is accept offers and act!
        </p> */}
      </div>
      <img src="/Time.png" alt="Time" className="mt-" />
    </div>
  );
};

export default Time;
