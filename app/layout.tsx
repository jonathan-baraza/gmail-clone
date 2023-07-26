import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gmail",
  description: "Gmail clone",
  icons: {
    icon: "/icons/icon4.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/icon4.png" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
