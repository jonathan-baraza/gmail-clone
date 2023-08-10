import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const UpdateProfile = () => {
  return (
    <div className="min-h-[100vh] z-50 space-y-6 md:space-y-5  flex  items-center justify-center flex-col">
      <div className="bg-[#5ab9c1] rounded-full p-8  z-50 relative">
        <FaUser size={40} color="#081314" />

        <div className="border border-gray-200 rounded-full p-2 hover:cursor-pointer hover:scale-105  flex top-[40%] bg-[#f8f9fa] absolute -right-[10%]">
          <MdEdit size={15} color="gray" />
        </div>
      </div>

      <div className="text-[#202124]  text-2xl text-center font-semibold ">
        Welcome!
      </div>
    </div>
  );
}

export default UpdateProfile