import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdApps, IoMdOptions, IoMdSettings } from "react-icons/io";
import { MdHelpOutline, MdOutlineExpandMore } from "react-icons/md";

const NavArea = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  return (
    <div className="w-full py-2">
      <div className="flex justify-between pr-4  w-full">
        <div
          className={`flex items-center px-[6px] ${
            inputActive ? "bg-white shadow" : "bg-[#eaf1fb]"
          } w-[68%]  rounded-3xl`}
        >
          <div className="mr-1 hover:cursor-pointer hover:bg-[#dde3ec] p-2 rounded-full">
            <HiOutlineSearch color={"#5f6368"} size={20} />
          </div>
          <input
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
            className="placeholder:text-[#5e5e63] placeholder:font-[400] py-3  flex-1 bg-transparent  outline-none "
            placeholder="Search in emails"
          />
          <div className="ml-1 hover:cursor-pointer hover:bg-[#dde3ec] p-2 rounded-full">
            <IoMdOptions color={"#3c3d3f"} size={20} />
          </div>
        </div>
        {/* User status */}
        <div className="flex items-center space-x-1 bg-[#eaf1fb] hover:bg-[#e4ecf8] hover:cursor-pointer rounded-3xl py-2 px-3 w-[10%]">
          <div className="w-[12px] h-[12px] rounded-full bg-[#1e8e3e] mr-1"></div>
          <span className="font-semibold text-[#444746] text-[14px]">
            Active
          </span>
          <MdOutlineExpandMore className="" size={18} />
        </div>

        {/* Options settings */}
        <div className="flex items-center w-[15%] justify-between mr-3">
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

          {/* User profile */}
          <div className="hover:cursor-pointer ml-3">
            <div className="w-[32px] h-[32px] text-white bg-[#004d40] flex items-center justify-center rounded-full text-lg">
              J
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavArea;
