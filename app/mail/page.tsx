"use client";
import LineLoader from "@/components/loaders/LineLoader";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";
import MinMenu from "@/components/mailPage/MinMenu";
import SideMenu from "@/components/mailPage/SideMenu";
import NavArea from "@/components/mailPage/NavArea";
import MyMails from "@/components/mailPage/MyMails";
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
        <div className="w-full h-[100vh] flex bg-[#f6f8fc] ">
          <MinMenu />
          <SideMenu />
          <div className="w-full ps-4">
            <NavArea />
            {/* <MyMails /> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Mail;
