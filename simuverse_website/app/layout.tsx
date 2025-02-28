import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimuVerse | Multi-Agent AI Research Environment",
  description: "SimuVerse is a revolutionary multi-agent simulation environment built in Unity where AI agents interact dynamically within a structured world. Created by Roman Slack at Rochester Institute of Technology.",
  keywords: ["AI", "Multi-agent simulation", "Unity", "LLM", "Artificial Intelligence", "Research", "Roman Slack", "RIT", "Rochester Institute of Technology"],
  openGraph: {
    title: "SimuVerse | Multi-Agent AI Research Environment",
    description: "A revolutionary simulation platform for LLM-powered agents to live and interact on Mars.",
    url: "https://simuverse.com",
    siteName: "SimuVerse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SimuVerse - Making The Matrix Real",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
