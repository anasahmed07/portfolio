import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RightSidebar from '@/components/layout/right-sidebr'
import LeftSidebar from '@/components/layout/left-sidebar'
// import Header from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Anas Ahmed Shaikh",
  description:
    "Explore Anas Ahmed Shaikh's professional portfolio in web development, AI, and backend solutions. Discover projects using TypeScript, Next.js, and Python, crafted to drive innovation. Connect to collaborate on custom web solutions and cutting-edge technology!",

  // Open Graph Tags
  openGraph: {
    title: "Portfolio | Anas Ahmed Shaikh",
    description:
      "Explore Anas Ahmed Shaikh's professional portfolio in web development, AI, and backend solutions.",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "/path/to/your-image.jpg", // Replace with your image path
        width: 1200,
        height: 630,
        alt: "Anas Ahmed Shaikh's Portfolio",
      },
    ],
    type: "website",
  },

  // Twitter Card Tags
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Anas Ahmed Shaikh",
    description:
      "Explore Anas Ahmed Shaikh's professional portfolio in web development, AI, and backend solutions.",
    images: ["/path/to/your-image.jpg"], // Replace with your image path
  },
};
export default function RootLayout({
    children,
  }: Readonly<{ children: React.ReactNode }>) {
    return (
      <html lang="en">
        <body className={`${inter.variable} antialiased bg-cd-02 min-h-screen text-white flex`}>
          <LeftSidebar />
          {children}
          <RightSidebar />
        </body>
      </html>
    );
  }