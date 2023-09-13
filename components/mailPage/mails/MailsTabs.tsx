import { useState } from "react";
import { HiInbox } from "react-icons/hi";

const MailsTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("primary");
  return (
    <div className="w-full">
      <div
        className="flex items-center w-1/4 hover:bg-[#e8eaed] hover:cursor-pointer p-3"
        onClick={() => setActiveTab("primary")}
      >
        <HiInbox
          size={20}
          color={`${activeTab === "primary" ? "#0b57d0" : "#444746"}`}
        />
        <span
          className={`ml-3 ${
            activeTab === "primary" ? "text-[#0b57d0]" : "text-[#444746]"
          }`}
        >
          Primary
        </span>
      </div>
    </div>
  );
};

export default MailsTabs;
