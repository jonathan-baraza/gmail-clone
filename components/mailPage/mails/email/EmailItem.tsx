import { useState } from "react";
import { BiSquare, BiStar } from "react-icons/bi";
import { MdLabelImportantOutline } from "react-icons/md";

const EmailItem = () => {
  const [subject, setSubject] = useState<string>("Meta Learning Program");
  const [body, setBody] = useState<string>(
    "Final learning week!!!You have been added to week 7!!"
  );
  return (
    <div className="flex items-center w-full px-2 justify-between hover:shadow hover:cursor-pointer ">
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
      <div className="flex-1 flex">
        {/* Email Subject */}
        <div className="w-[25%] ">
          <span className="text-[14px] ">{subject.slice(0, 19)}</span>
        </div>
        {/* Email Body */}
        <div className="w-[%] ">
          <span className="text-[14px]"></span>
        </div>
      </div>
      {/* Time */}
      <div className="mr-2">
        <span className="text-[#5f6368] text-[12px]">12:04</span>
      </div>
    </div>
  );
};

export default EmailItem;
