import type { Metadata } from "next";
import "@/app/globals.css";
import { outfit } from "@/ui/fonts";
import Container from "@/ui/shared/container";
import NavBar from "@/ui/home/nav.bar";
import NavBarTablet from "@/ui/home/nav.bar.tablet";

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
      <body className={outfit.className}>
        <Container>
          {/* <div className="w-full h-min-screen flex flex-col lg:flex-row"> */}
          <div className="w-full min-h-screen flex flex-col lg:flex-row">
            <div className="w-full lg:w-[200px]">
              <NavBar />
              <NavBarTablet />
            </div>
            <div className="w-full pl-[32px] lg:p-0 lg:w-[calc(100%-200px)]">
              {children}
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}
