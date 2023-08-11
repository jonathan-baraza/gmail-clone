"use client";
import "./globals.css";
import type { Metadata } from "next";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { Provider } from "react-redux";
import { store } from "@/features/store/store";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "Gmail",
  description: "Gmail clone",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  //Auth state changed listener

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.push("/mail");
      } else {
        // router.push("/auth/signin");
      }
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
        <ToastContainer pauseOnHover={false} position="bottom-left" hideProgressBar={true} autoClose={1500} />
      </body>
    </html>
  );
}
