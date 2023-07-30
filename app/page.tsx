"use client";
import type { Metadata } from "next";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LineLoader from "@/components/loaders/LineLoader";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="m-0 p-0 flex-1 w-full flex items-center justify-center relative">
      {loading && <LineLoader />}
      <img src="./welcomepic1.png" className="absolute left-0 -z-2 " />
      <img src="./welcomepic2.png" className="absolute right-0 -z-2" />
      <div className="min-h-[100vh] z-50 space-y-6 md:space-y-5  flex  items-center justify-center flex-col">
        <div className="bg-[#5ab9c1] rounded-full p-8 mb-10 z-50">
          <FaUser size={40} color="#081314" />
        </div>

        <div className="text-[#202124]  text-[27px] md:text-[35px] text-center font-semibold ">
          Set up your clone profile
        </div>
        <div className="text-gray-500 text-lg text-center mb-8 bg-white">
          To access your Chrome stuff across all your devices, sign in, then
          turn on sync.
        </div>
        <button
          onClick={() => {
            setLoading(true);
            router.push("/auth/signin");
          }}
          className="bg-[#1a73e8] text-xs py-2 w-[200px] hover:bg-[#1565d0] rounded text-white mb-4"
        >
          Sign in
        </button>
        <button
          onClick={() => {
            setLoading(true);
            router.push("/auth/signup");
          }}
          className="bg-[#1a73e8] text-xs py-2 w-[200px] hover:bg-[#1565d0] rounded text-white"
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
