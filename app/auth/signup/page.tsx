"use client";

import { ChangeEvent, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LineLoader from "@/components/loaders/LineLoader";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AuthSignUpFields>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState<AuthSignUpError>({
    name: [],
    email: [],
    password: [],
    password2: [],
  });

  const [focused, setFocused] = useState<string>("");
  const handleSetData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    clearErrors();
    setData((prevData: AuthSignUpFields) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleValidations = () => {
    clearErrors();
    if (
      !data.name ||
      !data.email ||
      !data.password ||
      !data.password2 ||
      (data.password && data.password.length < 6) ||
      data.password !== data.password2
    ) {
      if (!data.name) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          name: ["Please enter your name"],
        }));
      }

      if (!data.email) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          email: ["Please enter your email"],
        }));
      }

      if (!data.password) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          password: ["Please enter your password"],
        }));
      }

      if (!data.password2) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          password2: ["Please confirm your password"],
        }));
      }

      if (data.password && data.password.length < 6) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          password: ["Password must be atleast six characters"],
        }));
      }

      if (data.password !== data.password2) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          password: ["The two passwords do not match"],
          password2: ["The two passwords do not match"],
        }));
      }
    } else {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    setLoading(true);
  };

  const clearErrors = () => {
    setErrors({ name: [], email: [], password: [], password2: [] });
  };

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center ">
      <div className=" border border-gray-300 rounded-lg w-full md:w-1/3 py-12 px-6 flex flex-col items-center relative">
        {loading && <LineLoader overlay={true} />}
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
            className={`w-full bg-white z-3 border ${
              errors?.name?.length > 0 ? "border-red-500" : "border-gray-300"
            } rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="name"
          >
            Name
          </label>
          <ul>
            {errors.name.map((error) => (
              <li
                key={error}
                className="text-red-500 text-xs flex items-center p-1"
              >
                <FaInfoCircle className="mr-1" />
                {error}
              </li>
            ))}
          </ul>
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
            className={`w-full bg-white z-3 border ${
              errors?.email?.length > 0 ? "border-red-500" : "border-gray-300"
            } rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="email"
          >
            Email
          </label>
          <ul>
            {errors.email.map((error) => (
              <li
                key={error}
                className="text-red-500 text-xs flex items-center p-1"
              >
                <FaInfoCircle className="mr-1" />
                {error}
              </li>
            ))}
          </ul>
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
            className={`w-full bg-white z-3 border ${
              errors?.password?.length > 0
                ? "border-red-500"
                : "border-gray-300"
            } rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="password"
          >
            Password
          </label>
          <ul>
            {errors.password.map((error) => (
              <li
                key={error}
                className="text-red-500 text-xs flex items-center p-1"
              >
                <FaInfoCircle className="mr-1" />
                {error}
              </li>
            ))}
          </ul>
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
            className={`w-full bg-white z-3 border ${
              errors?.password2?.length > 0
                ? "border-red-500"
                : "border-gray-300"
            } rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="password2"
          >
            Confirm password
          </label>
          <ul>
            {errors.password2.map((error) => (
              <li
                key={error}
                className="text-red-500 text-xs flex items-center p-1"
              >
                <FaInfoCircle className="mr-1" />
                {error}
              </li>
            ))}
          </ul>
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
        <div
          onClick={() => {
            setLoading(true);
            router.push("/auth/signin");
          }}
          className=" text-[#1a73e8] mt-4 w-full hover:cursor-pointer hover:underline p-2  text-sm font-bold"
        >
          Already have an account?
        </div>
      </div>
    </div>
  );
};

export default SignUp;
