"use client";

import { ChangeEvent, ReactEventHandler, useState } from "react";
type dataType = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};
const Register = () => {
  const [data, setData] = useState<dataType>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [focused, setFocused] = useState<string>("");
  const handleSetData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setData((prevData: dataType) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleValidations = () => {
    console.log("setData");
    console.log(data);
  };
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center ">
      <div className=" border border-gray-300 rounded-lg w-full md:w-1/3 py-12 px-6 flex flex-col items-center">
        <img src="/google.svg" className="w-1/5" alt="google" />
        <div className="text-[28px] text-dark mt-2 ">Create your Account</div>
        <div className="text-lg text-dark mb-8">Enter your details</div>
        {/* Name */}
        <div
          className={`w-full float-label-container ${
            focused !== "name" && data.name && "active-label-container"
          } relative flex flex-col `}
        >
          <input
            type="text"
            name="name"
            id="name"
            autoComplete={"Off"}
            onChange={handleSetData}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused("")}
            className={`w-full bg-white z-3 border border-gray-300 rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="name"
          >
            Name
          </label>
        </div>

        {/* Email */}
        <div
          className={`w-full float-label-container ${
            focused !== "email" && data.email && "active-label-container"
          } relative flex flex-col mt-5`}
        >
          <input
            type="email"
            name="email"
            id="email"
            autoComplete={"Off"}
            onChange={handleSetData}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[13px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="email"
          >
            Email
          </label>
        </div>

        {/* Passsword */}
        <div
          className={`w-full float-label-container ${
            focused !== "password" && data.password && "active-label-container"
          } relative flex flex-col mt-5`}
        >
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleSetData}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused("")}
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[13px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="password"
          >
            Password
          </label>
        </div>

        {/* Confirm Password */}
        <div
          className={`w-full float-label-container ${
            focused !== "password2" &&
            data.password2 &&
            "active-label-container"
          } relative flex flex-col mt-5`}
        >
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={handleSetData}
            onFocus={() => setFocused("password2")}
            onBlur={() => setFocused("")}
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[13px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="password2"
          >
            Confirm password
          </label>
        </div>
        <div className="mt-8 flex justify-between items-center w-full">
          <div className=" text-[#1a73e8] hover:cursor-pointer hover:bg-[#f1f7fe] p-2  text-sm font-bold">
            Sign up with google (lol)
          </div>
          <button
            onClick={handleValidations}
            className="bg-[#1a73e8] hover:bg-[#1567d5] text-sm text-white rounded py-2 px-6"
          >
            Next
          </button>
        </div>
        <div className=" text-[#1a73e8] mt-4 w-full hover:cursor-pointer hover:underline p-2  text-sm font-bold">
          Already have an account?
        </div>
      </div>
    </div>
  );
};

export default Register;
