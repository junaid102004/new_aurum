"use client";
import { useEffect, useRef, useState } from "react";

function GridComponent({ items = [] }) {
  const itemRefs = useRef([]);
  const containerRef = useRef(null);
  const [lastRowIndexes, setLastRowIndexes] = useState([]);

  const calculateLastRow = () => {
    requestAnimationFrame(() => {
      const positions = itemRefs.current.map((el) => el?.getBoundingClientRect());
      const rows = {};

      positions.forEach((pos, idx) => {
        if (!pos) return;
        const top = Math.round(pos.top);
        if (!rows[top]) rows[top] = [];
        rows[top].push(idx);
      });

      const rowTops = Object.keys(rows).map(Number);
      const lastTop = Math.max(...rowTops);
      const lastRow = rows[lastTop];
      setLastRowIndexes(lastRow);
    });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // ✅ Trigger once after first paint
    setTimeout(() => {
      calculateLastRow();
    }, 50);

    // ✅ Recalculate when container size changes
    const observer = new ResizeObserver(() => {
      calculateLastRow();
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="mt-12 px-6 space-y-6 bg-white">
      {/* Grid layout */}
      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {items.map((item, index) => {
          if (lastRowIndexes.includes(index)) return null;
          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="bg-orange-300 text-center py-4 px-4 rounded-md shadow font-semibold"
            >
              {item}
            </div>
          );
        })}
      </div>

      {/* Last row centered */}
      {lastRowIndexes.length > 0 && (
        <div className="flex justify-center flex-wrap gap-6">
          {lastRowIndexes.map((index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="bg-orange-300 text-center py-4 px-4 rounded-md shadow font-semibold"
            >
              {items[index]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GridComponent;
