import { useState } from "react";
import { HiInbox } from "react-icons/hi";

const MailsTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("primary");
  return (
    <div className="w-full">
      <div
        className="flex justify-center w-1/4 hover:bg-[#f4f4f4] hover:cursor-pointer px-2 "
        onClick={() => setActiveTab("primary")}
      >
        <div
          className={`flex items-center w-full py-[15px] px-2 ${
            activeTab === "primary"
              ? "border-b-[3px] border-[#0b57d0]"
              : "border-none"
          }`}
        >
          <HiInbox
            size={20}
            color={`${activeTab === "primary" ? "#0b57d0" : "#444746"}`}
          />
          <span
            className={`ml-3 text-sm font-semibold ${
              activeTab === "primary" ? "text-[#0b57d0]" : "text-[#444746]"
            }`}
          >
            Primary
          </span>
        </div>
      </div>
    </div>
  );
};

export default MailsTabs;
