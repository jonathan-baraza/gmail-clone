import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { PiUsersThreeLight, PiVideoCamera } from "react-icons/pi";

const MinMenu = () => {
  return (
    <div className="h-full bg-[#eaf1fb] flex-col items-center w-[5%] px-1">
      <div className="p-3 rounded-full hover:cursor-pointer mt-3 hover:bg-[#d8dfe8] flex items-center justify-center w-3/4 mx-auto">
        <AiOutlineMenu size={22} />
      </div>

      {/* Mail option */}
      <div className="flex flex-col items-center mt-6">
        <div className="p-2 relative  rounded-3xl hover:cursor-pointer mt-3 bg-[#d3e3fd] flex items-center justify-center w-[70%] mx-auto">
          <FaEnvelope size={18} color={"#041e49"} />
          <span className="bg-[#b3261e] text-white px-[3px] py-[2px] rounded-3xl text-[10px] font-bold absolute -top-[14%] border border-white border-2 right-0">
            99+
          </span>
        </div>
        <span className="text-xs mt-1 font-semibold text-[#1f1f1f]">Mail</span>
      </div>

      {/* Chat */}
      <div className="flex flex-col items-center mt-1">
        <div className="p-2 relative  rounded-3xl hover:cursor-pointer mt-3 hover:bg-[#d8dfe8] flex items-center justify-center w-[70%] mx-auto">
          <BsChatLeft size={18} color={"#444746"} />
        </div>
        <span className="text-xs font-semibold text-[#444746]">Chat</span>
      </div>

      {/* Spaces */}
      <div className="flex flex-col items-center mt-1">
        <div className="p-2 relative  rounded-3xl hover:cursor-pointer mt-3 hover:bg-[#d8dfe8] flex items-center justify-center w-[70%] mx-auto">
          <PiUsersThreeLight size={18} color={"#444746"} />
        </div>
        <span className="text-xs font-semibold text-[#444746]">Spaces</span>
      </div>

      {/* Meet */}
      <div className="flex flex-col items-center mt-1">
        <div className="p-2 relative  rounded-3xl hover:cursor-pointer mt-3 hover:bg-[#d8dfe8] flex items-center justify-center w-[70%] mx-auto">
          <PiVideoCamera size={18} color={"#444746"} />
        </div>
        <span className="text-xs font-semibold text-[#444746]">Meet</span>
      </div>
    </div>
  );
};

export default MinMenu;
