import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SGAEM Website",
  description: "SoGang Association of E-sports Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      // className="dark"
    >
      <body className="antialised">
        <Header />
        {children}
      </body>
    </html>
  );
}
