import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { outfit } from "@/ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entertaiment-Web-App",
  description: "watch videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
