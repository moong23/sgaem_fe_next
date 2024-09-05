import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGAEM Website",
  description: "Welcome to SGAEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialised">{children}</body>
    </html>
  );
}
