import React from "react";
import { BiSquare, BiStar } from "react-icons/bi";
import { MdLabelImportantOutline } from "react-icons/md";

const EmailItem = () => {
  return (
    <div className="flex items-center w-full px-2 justify-between ">
      {/* Action labels */}
      <div className="flex">
        <div className="hover:bg-[#e8eaed] rounded-full p-2  hover:cursor-pointer">
          <BiSquare size={18} color={"#5f6368"} />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 -ml-2 hover:cursor-pointer">
          <BiStar size={19} color={"#5f6368"} />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 -ml-2 hover:cursor-pointer">
          <MdLabelImportantOutline size={19} color={"#5f6368"} />
        </div>
      </div>

      {/* Email Content */}
      <div className="bg-red-500 flex-1 flex">
        {/* Email Subject */}
        <div className="w-[30%] bg-blue-400">
          <span className="text-sm" >Meta Learning Program</span>
        </div>
        {/* Email Body */}
        <div className="w-[70%] bg-yellow-300">
          <span className="text-sm" >Final learning week!!!You have been added to week 7!!</span>
        </div>
      </div>
      {/* Time */}
      <div className="mr-2">
        <span className="text-[#5f6368] text-sm">12:04</span>
      </div>
    </div>
  );
};

export default EmailItem;
