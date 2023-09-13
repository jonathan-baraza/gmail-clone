import {useState} from "react";
import { HiInbox } from "react-icons/hi";

const MailsTabs = () => {
    const [activeTab,setActiveTab]=useState<string>("primary")
  return (
    <div className="w-full">
      <div className="flex items-center w-1/4 hover:bg-[#e8eaed] hover:cursor-pointer">
        <HiInbox color={`${activeTab === "primary" ? "#0b57d0" : "#444746"}`} />
        <span>Primary</span>
      </div>
    </div>
  );
};

export default MailsTabs;
