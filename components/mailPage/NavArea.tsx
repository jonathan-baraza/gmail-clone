import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const NavArea = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex items-center bg-[#eaf1fb]">
          <HiOutlineSearch color={"#5f6368"} size={30} />
          <input
            className="placeholder:text-[#5e5e63]"
            placeholder="Search in emails"
          />
        </div>
      </div>
    </div>
  );
};

export default NavArea;
