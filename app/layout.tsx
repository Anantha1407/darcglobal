import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Aaditya's Rehab Centre",
  description: "Dr. Aaditya's Rehab Centre provides comprehensive rehabilitation services for patients recovering from various conditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer  />
      </body>
    </html>
  );
}
