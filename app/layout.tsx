import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Providers from "./Provider";
import Nav from "@/components/main/Nav";


export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Providers>
        <StarsCanvas />
        {/* <Navbar /> */}
        <Nav/>
        {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
