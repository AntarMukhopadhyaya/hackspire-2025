"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-30T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex space-x-4 text-white">
        <div className="flex flex-col items-center">
          <div
            className="text-4xl md:text-5xl font-bold text-cyber-yellow"
            style={{
              fontFamily: "Mokoto Demo",
              textShadow: "0 0 10px rgba(255, 193, 7, 0.5)",
            }}
          >
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div
            className="text-sm md:text-base text-white/80 uppercase tracking-wider"
            style={{
              fontFamily: "Mokoto Demo",
            }}
          >
            Days
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="text-4xl md:text-5xl font-bold text-cyber-yellow"
            style={{
              fontFamily: "Mokoto Demo",
              textShadow: "0 0 10px rgba(255, 193, 7, 0.5)",
            }}
          >
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div
            className="text-sm md:text-base text-white/80 uppercase tracking-wider"
            style={{
              fontFamily: "Mokoto Demo",
            }}
          >
            Hours
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="text-4xl md:text-5xl font-bold text-cyber-yellow"
            style={{
              fontFamily: "Mokoto Demo",
              textShadow: "0 0 10px rgba(255, 193, 7, 0.5)",
            }}
          >
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div
            className="text-sm md:text-base text-white/80 uppercase tracking-wider"
            style={{
              fontFamily: "Mokoto Demo",
            }}
          >
            Minutes
          </div>
        </div>
      </div>
    </div>
  );
}
