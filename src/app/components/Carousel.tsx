//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "10%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-10%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === items.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <AnimatePresence>
      <motion.div
        key={currentIndex}
        src={items[currentIndex]}
        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
        animate="visible"
        exit="exit"
        variants={slideVariants}
        className="carousel lg:max-w-[520px] sm:max-w-[400px] max-w-[260px]
          text-darkblue-50 opacity-90  sm:mt-[0px] mt-[0px]
          flex flex-col h-5/6 bg-gray-500 bg-opacity-30 border-4 border-gray-500 absolute rounded-2xl w-2/3
          text-center md:mt-6  md:w-full md:left-0 md:ml-0 md:justify-start"
      >
        <div className="carousel-items relative h-5/6 w-5/6 m-auto overflow-hidden rounded-lg">
          <div
            className="flex flex-col justify-between items-center h-full"
            key={currentIndex}
            src={items[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          >
            <h3
              className=" md:text-5xl sm:text-4xl w-5/6 mt-2 text-2xl font-bold"
              src={items[currentIndex]}
            >
              {items[currentIndex][0]}
            </h3>
            <img
              className="w-2/3"
              src={items[currentIndex][1]}
              alt={items[currentIndex].title}
            />
            <p className="md:text-3xl sm:text-2xl w-5/6 ">
              {items[currentIndex][2]}
            </p>
          </div>
        </div>
        <div className="slide_direction flex justify-between">
          <motion.div
            variants={slidersVariants}
            whilehover="hover"
            className="left left-0 top-0 bottom-0 p-1 flex items-center ml-3 absolute opacity-1"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
              fill="white"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whilehover="hover"
            className="right right-0 top-0 bottom-0 p-1 flex items-center mr-1 absolute opacity-1"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
              fill="white"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
        <div className="carousel-indicator mt-2 flex justify-center gap-5">
          {items.map((_, index) => (
            <div
              key={index}
              className={`dot mb-5 bg-gray-700 w-4 h-4 rounded-full ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whilehover="hover"
              variants={dotsVariants}
            ></div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Carousel;
