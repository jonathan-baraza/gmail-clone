import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdApps, IoMdSettings } from "react-icons/io";
import { MdHelpOutline, MdOutlineExpandMore } from "react-icons/md";

const NavArea = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  return (
    <div className="w-full py-2">
      <div className="flex justify-between pr-4">
        <div
          className={`flex items-center px-[6px] ${
            inputActive ? "bg-white" : "bg-[#eaf1fb]"
          } w-[65%]  rounded-3xl`}
        >
          <div className="mr-1 hover:cursor-pointer hover:bg-[#dde3ec] p-2 rounded-full">
            <HiOutlineSearch color={"#5f6368"} size={20} />
          </div>
          <input
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
            className="placeholder:text-[#5e5e63] placeholder:font-[400] py-3  bg-transparent  outline-none "
            placeholder="Search in emails"
          />
        </div>
        {/* User status */}
        <div className="flex items-center space-x-1 bg-[#eaf1fb] rounded-3xl py-2 px-3">
          <div className="w-[12px] h-[12px] rounded-full bg-[#1e8e3e] mr-1"></div>
          <span className="font-semibold text-[#444746] text-[14px]">Active</span>
          <MdOutlineExpandMore className="" size={18} />
        </div>

        {/* Options settings */}
        <div className="flex items-center">
          {/* Help */}
          <div className="hover:bg-[#e8eaed] rounded-full p-2 hover:cursor-pointer">
            <MdHelpOutline size={25} color={"#5f6368"} />
          </div>
          {/* Settings */}
          <div className="hover:bg-[#e8eaed] rounded-full p-2 hover:cursor-pointer">
            <IoMdSettings size={25} color={"#5f6368"} />
          </div>
          {/* Google Apps */}
          <div className="hover:bg-[#e8eaed] rounded-full p-2 hover:cursor-pointer">
            <IoMdApps size={25} color={"#5f6368"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavArea;
