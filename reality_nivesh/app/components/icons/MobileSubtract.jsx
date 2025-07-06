"use client";

import React, { useEffect, useState } from "react";

const MobileSubtract = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Toggle visibility every 5 seconds
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 5000);

    // Show on scroll
    const handleScroll = () => {
      setVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="w-full fixed bottom-0 left-0 z-40 sm:hidden transition-opacity duration-500 pb-[5px]">
      <svg
        width="100%"
        height="59"
        viewBox="0 0 336 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M139.684 12.6696C136.324 6.36929 130.618 0.705566 123.478 0.705566H10.1139C4.80278 0.705566 0.497253 5.01109 0.497253 10.3222V49.3111C0.497253 54.6222 4.80277 58.9277 10.1139 58.9277H326.373C331.684 58.9277 335.989 54.6222 335.989 49.3111V10.3222C335.989 5.01109 331.684 0.705566 326.373 0.705566H213.009C205.869 0.705566 200.163 6.36929 196.803 12.6696C191.362 22.8725 180.614 29.8168 168.243 29.8168C155.873 29.8168 145.125 22.8725 139.684 12.6696Z"
          fill="#FFDEAC"
        />
      </svg>
    </div>
  );
};

export default MobileSubtract;
