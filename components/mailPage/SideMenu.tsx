import React from "react";
import { HiPencil, HiInbox } from "react-icons/hi";

const SideMenu = () => {


  return (
    <div className="w-[19%] h-full ">
      <div className=" pt-4">
        <div className="ml-5 flex items-center space-x-2">
          <img src={"/gmail.svg"} className="h-[35px]" />
          <span className=" text-gray-700 text-2xl">Gmail</span>
        </div>

        <div className=" pl-3 mt-6 ">
          <div className="bg-[#c2e7ff] flex items-center justify-around p-[14px] rounded-2xl w-[55%] hover:cursor-pointer hover:shadow-lg">
            <HiPencil size={23} />
            <span className="text-[16px]">Compose</span>
          </div>
          <div className="flex items-center justify-between px-2 bg-[#d3e3fd] hover:cursor-pointer mt-4 rounded-2xl px-3 py-1">
            <span className="flex items-center">
              <HiInbox className="" size={20} />
              <span className="ml-3 text-sm">Inbox</span>
            </span>
            <span className="text-sm">746</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
