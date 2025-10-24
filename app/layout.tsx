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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat min-h-screen bg-fixed  `}
      >
        <Hero />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
