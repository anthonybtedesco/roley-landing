import { StartButton } from "@components/startButton";
import React, { useEffect, useState } from "react";

export const Launch = () => {
  const [countdown, setCountdown] = useState([[0], [0], [0], [0]]);
  const [spotsLeft, setSpotsLeft] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date("February 1, 2024 00:00:00");
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown([[days], [hours], [minutes], [seconds]]);
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);


    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    const data = fetch("/api/users/count")
      .then((response) => response.json())
      .then((data) => {
        setSpotsLeft(50-(data.count));
      });
  }, []);


  return (
    <div className="w-full">
      <div className="flex items-center justify-center space-y-2 flex-col  mx-auto ">
        <div className="text-center mb-2">
          <p className="text-white font-bold">
            There are only{" "}
            <span className="text-hotpink-500">
              {spotsLeft} spots left!{" "}
            </span>
            Launches February 1.
          </p>
        </div>
        <StartButton />
        <div className="flex space-x-1 text-xs">
          <div className="flex flex-col items-center ">
            <div className="h-6 w-6 justify-center items-center flex bg-hotpink-500 bg-opacity-40 rounded-md">
              {countdown[0]}
            </div>
            <p className="text-white"></p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 justify-center items-center flex bg-hotpink-500 bg-opacity-40 rounded-md">
              {countdown[1]}
            </div>
            <p className="text-white"></p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 justify-center items-center flex bg-hotpink-500 bg-opacity-40 rounded-md">
              {countdown[2]}
            </div>
            <p className="text-white"></p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-6 w-6 justify-center items-center flex bg-hotpink-500 bg-opacity-40 rounded-md">
              {countdown[3]}
            </div>
            <p className="text-white"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
