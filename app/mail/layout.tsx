"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  //TODO: set loading gif while app is finding out if authenticated

  // Auth state changed listener
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // router.push("/mail");
      } else {
        router.push("/auth/signin");
      }
    });
  }, []);

  if (!auth.currentUser?.email) {
    return router.push("/auth/signin");
  }
  return <div className="m-0 p-0">{children}</div>;
}
