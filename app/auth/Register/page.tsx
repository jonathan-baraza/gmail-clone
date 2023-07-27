import React from "react";

const Register = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="border border-gray-300 rounded-lg w-1/3 py-12 px-6 flex flex-col items-center">
        <img src="/google.svg" className="w-1/5" alt="google" />
        <div className="text-[28px] text-dark mt-2 ">Create your Account</div>
        <div className="text-lg text-dark mb-8">Enter your details</div>
        <div className="w-full">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded p-[15px] placeholder:text-gray-500 placeholder:text-lg outline-[#1b66c8]"
          />
        </div>
        <div className="w-full mt-5">
          <input
            type="text"
            placeholder="Last name"
            className="w-full border custom_input  border-gray-300 rounded p-[15px] placeholder:text-gray-500 placeholder:text-lg outline-[#1b66c8] focus:placeholder-opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
