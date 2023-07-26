import "./globals.css";
import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
