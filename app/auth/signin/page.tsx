"use client";

import { ChangeEvent, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LineLoader from "@/components/loaders/LineLoader";

//Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AuthSignInFields>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<AuthSignInError>({
    email: [],
    password: [],
  });

  const [focused, setFocused] = useState<string>("");
  const handleSetData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    clearErrors();
    setData((prevData: AuthSignInFields) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleValidations = () => {
    clearErrors();
    if (!data.email || !data.password) {
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
    } else {
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email!,
        data.password!
      );
      console.log("sign in response");
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log("error");
        console.log(error?.message);
        const responseError =
          "Sign in error: " +
          error.message.split("/")[1].replace(")", "").replace(".", "");
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          errorMessage: responseError,
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  const clearErrors = () => {
    setErrors({ email: [], password: [], errorMessage: "" });
  };

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center ">
      <div className=" border border-gray-300 rounded-lg w-full md:w-1/3 py-12 px-6 flex flex-col items-center relative">
        {loading && <LineLoader overlay={true} />}
        <img src="/google.svg" className="w-1/5" alt="google" />
        <div className="text-[28px] text-dark mt-2 ">
          Sign in to your Account
        </div>
        <div
          className={`text-lg text-dark ${errors.errorMessage ? "" : "mb-8"}`}
        >
          Enter your details
        </div>
        {/* Error */}
        {errors.errorMessage && (
          <p className="text-red-500 font-semibold mb-8">
            {errors.errorMessage}
          </p>
        )}

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

        <div className="mt-8 flex justify-between items-center w-full">
          <div className=" text-[#1a73e8] hover:cursor-pointer hover:bg-[#f1f7fe] p-2  text-sm font-bold">
            Sign In with google (lol)
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
            router.push("/auth/signup");
          }}
          className=" text-[#1a73e8] mt-4 w-full hover:cursor-pointer hover:underline p-2  text-sm font-bold"
        >
          You don&apos;t have an account?
        </div>
      </div>
    </div>
  );
};

export default SignIn;
