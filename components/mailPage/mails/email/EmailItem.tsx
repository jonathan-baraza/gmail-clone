import React from "react";
import { BiSquare, BiStar } from "react-icons/bi";
import { MdLabelImportantOutline } from "react-icons/md";

const EmailItem = () => {
  return (
    <div>
      <div className="flex">
        <div className="hover:bg-[#e8eaed] rounded-full p-2 ml-3 hover:cursor-pointer">
          <BiSquare size={18} color={"#5f6368"} />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 ml-3 hover:cursor-pointer">
          <BiStar size={20} color={"#5f6368"} />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 ml-3 hover:cursor-pointer">
          <MdLabelImportantOutline size={20} color={"#5f6368"} />
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
