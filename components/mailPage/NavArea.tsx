import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineExpandMore } from "react-icons/md";

const NavArea = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  return (
    <div className="w-full py-2">
      <div className="flex">
        <div
          className={`flex items-center px-[6px] ${
            inputActive ? "bg-white" : "bg-[#eaf1fb]"
          } w-[70%]  rounded-3xl`}
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
        <div className="flex items-center space-x-2 bg-[#eaf1fb] rounded-3xl p-2">
          <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
          <span>Active</span>
          <MdOutlineExpandMore className="" size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavArea;
