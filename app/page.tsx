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
    <>
      {loading && <LineLoader />}
      <div className="min-h-[100vh]  flex  items-center justify-center flex-col">
        <div className="bg-[#5ab9c1] rounded-full p-8 mb-10">
          <FaUser size={40} color="#081314" />
        </div>
        <img src="./welcomepic1.png" className="absolute left-0" />
        <img src="./welcomepic2.png" className="absolute right-0" />
        <div className="text-[#202124] text-[35px] font-semibold ">
          Set up your clone profile
        </div>
        <div className="text-gray-500 text-lg mb-8">
          To access your Chrome stuff across all your devices, sign in, then
          turn on sync.
        </div>
        <button
          onClick={() => {
            setLoading(true);
            router.push("/auth/Login");
          }}
          className="bg-[#1a73e8] text-xs py-2 w-[200px] hover:bg-[#1565d0] rounded text-white mb-4"
        >
          Sign in
        </button>
        <button
          onClick={() => {
            setLoading(true);
            router.push("/auth/Register");
          }}
          className="bg-[#1a73e8] text-xs py-2 w-[200px] hover:bg-[#1565d0] rounded text-white"
        >
          Create an account
        </button>
      </div>
    </>
  );
}
