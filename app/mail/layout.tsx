// "use client";

import { redirect } from "next/navigation";
import { auth } from "@/config/firebase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!auth.currentUser?.email) {
    return redirect("/auth/signin");
  }
  return <>{children}</>;
}
