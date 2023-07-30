"use client";
import "./globals.css";
import type { Metadata } from "next";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
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
        router.push("/mail");
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
