import React from "react";

const LineLoader = ({ overlay }: { overlay?: boolean }) => {
  return (
    <div
      className={`absolute ${
        overlay && "bottom-0 bg-white bg-opacity-40 "
      }  overflow-x-hidden top-0 left-0 right-0  z-50`}
    >
      <div className={`w-full relative overflow-x-hidden rounded-xl h-[4px]`}>
        <div
          id="lineLoader"
          className="w-1/2 absolute rounded-xl bg-[#1a73e8] h-full"
        ></div>
      </div>
    </div>
  );
};

export default LineLoader;
