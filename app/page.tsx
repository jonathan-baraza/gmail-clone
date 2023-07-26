import type { Metadata } from "next";
import { FaUser } from "react-icons/fa";
export const metadata: Metadata = {
  title: "Gmail",
  description: "Gmail clone",
  icons: {
    icon: "/icons/icon4.png",
  },
};
export default function Home() {
  return (
    <div className="min-h-[100vh]  flex  items-center justify-center flex-col">
      <div className="bg-[#ffab40] rounded-full p-8 mb-10">
        <FaUser size={40} color="#402400" />
      </div>
      <div className="text-[#202124] text-[35px] font-semibold ">
        Set up your new chrome profile
      </div>
      <div className="text-gray-500 text-lg">
        To access your Chrome stuff across all your devices, sign in, then turn
        on sync.
      </div>
    </div>
  );
}
