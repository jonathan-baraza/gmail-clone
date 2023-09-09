import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

const NavArea = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  return (
    <div className="w-full py-2">
      <div>
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
      </div>
    </div>
  );
};

export default NavArea;
