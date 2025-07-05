"use client";
import React from "react";

const ProjectStatus2 = () => {
  const items = new Array(20).fill(0);
  const columns = 9;

  const rows = [];
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <div className="w-full container mx-auto mt-10 space-y-5">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`w-full ${
            row.length < columns
              ? "flex justify-center"
              : "grid xl:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 grid-cols-3"
          }`}
        >
          {row.map((_, colIndex) => {
            const globalIndex = rowIndex * columns + colIndex;
            const isLastInRow = colIndex === row.length - 1;

            return (
              <div
                key={colIndex}
                className="w-[150px] h-[150px] flex flex-col items-center relative"
              >
                {/* Circle with line */}
                <div
                  className={`rounded-full w-[60px] h-[60px] flex items-center justify-center relative ${
                    globalIndex === 0 ? "bg-green-600" : "bg-orange-400"
                  } ${!isLastInRow ? "after:content-[''] after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-[90px] after:bg-black after:translate-y-[-50%]" : ""}`}
                ></div>

                {/* Label */}
                <p className="text-[14px] mt-4 text-center">Completion {globalIndex + 1} Floor</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ProjectStatus2;
