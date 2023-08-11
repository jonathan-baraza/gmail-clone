"use client";
import LineLoader from "@/components/loaders/LineLoader";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";
function Mail() {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const handleSignOut = async () => {
    setLoading(true);
    localStorage.clear();
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

  useEffect(() => {
    // if (!isAuthenticated) {
    //   return router.push("/auth/signin");
    // }
  }, []);

  return (
    <>
      {loading && <LineLoader overlay={true} />}
      {pageLoading ? (
        <div>Page Loading {String(isAuthenticated)}</div>
      ) : (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl">
            Welcome {user?.username} to you mail page
          </h1>
          <button
            onClick={handleSignOut}
            className="text-white bg-[#1a73e8] hover:bg-[#0d4b9c] hover:cursor-pointer rounded text-sm px-6 py-3 hover:shadow mt-6"
          >
            Sign out
          </button>
        </div>
      )}
    </>
  );
}

export default Mail;
