import React from "react";
import { BsSquare } from "react-icons/bs";
import { BiSquare } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";

const MailsHead = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="hover:bg-[#f2f2f2] py-3 w-fit rounded px-2 hover:cursor-pointer">
          <BiSquare size={15} color={"#5f6368"} className="font-bold" />
        </div>
        <div className="hover:bg-[#f2f2f2] py-3 w-fit rounded px-1 hover:cursor-pointer">
          <AiOutlineCaretDown
            size={15}
            color={"#5f6368"}
            className="font-bold"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MailsHead;
