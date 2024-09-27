
import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";
import ReactQueryProvider from "./Provider";
import { Toaster } from "react-hot-toast";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TASK MANAGER",
  description: "!!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
     <ReactQueryProvider>
      {/* header */}
 
        {children}
        <Toaster/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
