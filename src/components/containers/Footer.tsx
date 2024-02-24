//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Join from "../Join";
import { StartButton } from "@components/startButton";
import { Media } from "@components/Media";
const Footer = () => {
  const [bgColor, setBgColor] = useState("primary-color");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isRootUrl = window.location.pathname === "/";
      setBgColor(isRootUrl ? "bg-green-600" : "primary-color");
    }
  }, []);
  return (
    <div className="w-full primary-color">
      <div
        className={`${bgColor} w-full h-[400px] relative items-center justify-center pt-10 text-white lg:max-w-[1200px] mx-auto bottom-0`}
      >
        <div className="justify-center w-full text-4xl font-bold text-center">
          Sick of Applying?
          <br />
          <br />
          Start Roley today for free!
        </div>
        <div className="flex justify-center mt-8">
          <StartButton />
        </div>

        <div className="absolute bottom-0 left-0 mb-4 ml-4 space-y-2 flex flex-col">
          <div className="flex space-x-3">
            <Media />
          </div>
          <p className="">ROLE ME INC. 2024</p>
        </div>
        <div className="absolute bottom-0 right-0 mb-4 mr-4 flex-col text-right space-y-1">
          <ul>
            <li>
              <a className="hover:font-bold text-right" href="/">
                Home
              </a>
            </li>{" "}
            <li>
              <a className="hover:font-bold text-right" href="/terms">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-right" href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-right hover:font-bold"
                href="mailto:team@roley.me"
              >
                team@roley.me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
