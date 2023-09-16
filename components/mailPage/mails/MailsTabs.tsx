import { useState } from "react";
import { HiInbox, HiOutlineTag, HiOutlineUsers, HiTag } from "react-icons/hi";

const MailsTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("primary");
  return (
    <div className="w-full flex items-center">
      {/* Primary tag */}
      <div
        className="flex justify-center w-1/4 hover:bg-[#f4f4f4] hover:cursor-pointer px-2 "
        onClick={() => setActiveTab("primary")}
      >
        <div
          className={`flex border-b-[3px] items-center w-full py-[16px] px-2  ${
            activeTab === "primary"
              ? " border-[#0b57d0]"
              : " border-transparent"
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

      {/* Promotions */}
      <div
        className="flex justify-center w-1/4 hover:bg-[#f4f4f4] hover:cursor-pointer px-2 "
        onClick={() => setActiveTab("promotions")}
      >
        <div
          className={`flex border-b-[3px] items-center w-full py-[16px] px-2  ${
            activeTab === "promotions"
              ? " border-[#0b57d0]"
              : "border-transparent"
          }`}
        >
          {activeTab === "promotions" ? (
            <HiTag size={20} color={"#0b57d0"} />
          ) : (
            <HiOutlineTag size={20} color={"#444746"} />
          )}

          <span
            className={`ml-3 text-sm font-semibold ${
              activeTab === "promotions" ? "text-[#0b57d0]" : "text-[#444746]"
            }`}
          >
            Promotions
          </span>
        </div>
      </div>

      {/* Social */}
      <div
        className="flex justify-center w-1/4 hover:bg-[#f4f4f4] hover:cursor-pointer px-2 "
        onClick={() => setActiveTab("social")}
      >
        <div
          className={`flex border-b-[3px] items-center w-full py-[16px] px-2  ${
            activeTab === "social" ? " border-[#0b57d0]" : "border-transparent"
          }`}
        >
          <HiOutlineUsers
            size={18}
            color={`${activeTab === "social" ? "#0b57d0" : "#444746"}`}
          />

          <span
            className={`ml-3 text-sm font-semibold ${
              activeTab === "social" ? "text-[#0b57d0]" : "text-[#444746]"
            }`}
          >
            Social
          </span>
        </div>
      </div>
    </div>
  );
};

export default MailsTabs;
