import React from "react";

const LineLoader = () => {
  return (
    <div className="absolute overflow-x-hidden top-0 left-0 right-0 bg-gray-100 h-[4px] z-50">
      <div id="lineLoader" className="w-1/2 absolute bg-[#1a73e8] h-full"></div>
    </div>
  );
};

export default LineLoader;
