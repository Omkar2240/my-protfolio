import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'
import StarsCanvas from "@/components/main/StarBackground";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({variable: "--font-inter",
  subsets: ['latin']})

export const metadata: Metadata = {
  title: "Omkar Ramgirwar - Portfolio",
  description: "A Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} bg-[#000002] antialiased`}
      >
        <Header />
        <Analytics/>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
