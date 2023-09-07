import React from "react";
import { HiPencil } from "react-icons/hi";

const SideMenu = () => {
  return (
    <div className="w-[19%] h-full ">
      <div className="pl-5 pt-4">
        <div className="flex items-center space-x-2">
          <img src={"/gmail.svg"} className="h-[35px]" />
          <span className=" text-gray-700 text-2xl">Gmail</span>
        </div>

        <div className="mt-5">
          <div className="bg-[#c2e7ff] flex items-center justify-around p-3 rounded-xl w-[60%]">
            <HiPencil size={25} />
            <span className="">Compose</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
