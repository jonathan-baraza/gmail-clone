import React from "react";
import { BsSquare } from "react-icons/bs";
import { BiSquare } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdMoreVert, MdRefresh } from "react-icons/md";

const MailsHead = () => {
  return (
    <div className="w-full flex">
      <div className="flex items-center">
        <div className="hover:bg-[#f2f2f2] py-[10px] w-fit rounded px-1 hover:cursor-pointer">
          <BiSquare size={18} color={"#5f6368"} className="font-bold" />
        </div>
        <div className="hover:bg-[#f2f2f2] py-[10px] w-fit rounded px-1 hover:cursor-pointer">
          <AiOutlineCaretDown
            size={12}
            color={"#5f6368"}
            className="font-bold"
          />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 ml-3 hover:cursor-pointer">
          <MdRefresh size={20} color={"#5f6368"} />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-2 hover:cursor-pointer">
          <MdMoreVert size={20} color={"#5f6368"} />
        </div>
      </div>
      <div>
        <span className="text-[#6b6b6b] text-xs">1-5 of 5,001</span>
      </div>
    </div>
  );
};

export default MailsHead;
