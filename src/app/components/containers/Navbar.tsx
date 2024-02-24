"use client";
import React from "react";
import { Media } from "@components/Media";
import { StartButton } from "@components/startButton";

const Navbar = () => {
  return (
    <div className="primary-color ">
      <div className="primary-color flex items-center justify-between px-4 py-4 h-16 top-0 pt-6  mx-auto">
        <a className="flex items-center" href="/">
          <img src="/Logo.png" alt="Logo" className="sm:mx-2 w-16 h-16 mr-2" />
          <span className="text-2xl sm:text-4xl font-bold text-white">
            Roley
          </span>
        </a>
        <div className="flex items-center">
          <div className="sm:mr-2 px-2 py-1">
            <Media />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
