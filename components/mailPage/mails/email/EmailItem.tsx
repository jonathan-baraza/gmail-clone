import { useState } from "react";
import { BiSquare, BiStar } from "react-icons/bi";
import { MdLabelImportant, MdLabelImportantOutline } from "react-icons/md";

const EmailItem = ({
  subject,
  body,
  isImportant,
  isStarred,
  time,
  isViewed,
}: EmailItemType) => {
  // const [subject, setSubject] = useState<string>("Meta Learning Program");
  // const [body, setBody] = useState<string>(
  //   "Final learning week!!!You have been added to week 7!!"
  // );

  return (
    <div
      className={`flex items-center w-full px-2 border-b border-[#eceff1] justify-between hover:shadow hover:cursor-pointer ${
        isViewed ? "bg-[#f2f6fc]" : "bg-white"
      } `}
    >
      {/* Action labels */}
      <div className="flex">
        <div className="hover:bg-[#e8eaed] rounded-full p-3  hover:cursor-pointer emailActionIconContainer">
          <BiSquare size={18} className="emailActionIcon" />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-3 -ml-[6px] hover:cursor-pointer emailActionIconContainer">
          <BiStar size={17} className="emailActionIcon" />
        </div>
        <div className="hover:bg-[#e8eaed] rounded-full p-3 -ml-[6px] hover:cursor-pointer">
          {!isImportant ? (
            <MdLabelImportantOutline size={19} color={"#5f6368"} />
          ) : (
            <MdLabelImportant size={19} color={"#f7ca4c"} />
          )}
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 flex">
        {/* Email Subject */}
        <div className="w-[25%] ">
          <span className="text-[14px] ">
            {subject.slice(0, 19) + `${subject.length > 20 ? ".":""}`}
          </span>
        </div>
        {/* Email Body */}
        <div className="w-[%] -ml-1">
          <span className="text-[14px]">
            {body.slice(0, 85) + `${body.length > 85 ? "..." : ""}`}
          </span>
        </div>
      </div>
      {/* Time */}
      <div className="mr-2">
        <span className="text-[#5f6368] text-[12px]">{time}</span>
      </div>
    </div>
  );
};

export default EmailItem;
