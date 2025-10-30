import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/components/(header)/Hero";
import Footer from "@/components/(footer)/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Aussie Rest",
  description: "Australian hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen relative flex justify-center `}
      >
        <div className="fixed inset-0 -z-10 bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
        </div>
        <div className=" ">
          <Hero />
          {children}
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
