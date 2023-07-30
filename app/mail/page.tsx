"use client";
import LineLoader from "@/components/loaders/LineLoader";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Mail() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      router.push("/auth/signin");
    } catch (error) {
      //TODO: handle signout error better
      alert("Failed to sign you out");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <LineLoader overlay={true} />}
      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">
          Welcome {auth?.currentUser?.email} to you mail page{" "}
        </h1>
        <button
          onClick={handleSignOut}
          className="text-white bg-[#1a73e8] hover:bg-[#0d4b9c] hover:cursor-pointer rounded text-sm px-6 py-3 hover:shadow mt-6"
        >
          Sign out
        </button>
      </div>
    </>
  );
}

export default Mail;
