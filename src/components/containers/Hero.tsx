"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StartButton } from "@components/startButton";
import { Launch } from "./Launch";

const Hero = () => {
  const [email, setEmail] = React.useState("");
  const [modal, setModal] = React.useState(false);

  const Headers = {
    hiddenTop: {
      y: "-100%",
      opacity: 0,
    },
    hiddenBottom: {
      y: "100%",
      opacity: 0,
    },

    visibleFast: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    visibleSlow: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    visibleSuperSlow: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <div className="relative h-1233 md:h-452 lg:max-w-[1200px] mx-auto">
      <div className="md:flex">
        <img
          src="/Spotlight.png"
          alt="Spotlight"
          className="md:ml-auto md:w-1/2"
        />

        <div className="primary-color md:w-1/2 md:ml-auto flex flex-col md:justify-center">
          <div className="md:text-6xl sm:5xl text-white text-center text-4xl font-bold">
            <AnimatePresence>
              <motion.p
                initial="hiddenTop"
                animate="visibleFast"
                variants={Headers}
                className=""
              >
                Your Virtual Casting Agent -
                <span className="text-hotpink-500"> Roley</span>
              </motion.p>
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.div
              initial="hiddenBottom"
              animate="visibleSlow"
              variants={Headers}
              className="text-center text-2xl font-bold mt-8 space-y-4 text-darkblue-300 mx-2"
            >
              <p>Roley auto applies to Casting Calls for you.</p>
              <p>Get offers, and accelerate your acting career!</p>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial="hiddenBottom"
              animate="visibleSlow"
              variants={Headers}
              className="flex justify-center"
            >
              <div className="ml-auto mr-auto w-[450px] mt-2 mb-10 h-full">
                <Launch />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;
