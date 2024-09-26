
import type { Metadata } from "next";

import localFont from "next/font/local";
import Image from "next/image";
import Logo from '@/Assets/clickup-symbol-logo-BB24230BBB-seeklogo.com.png'
import "./globals.css";
import ReactQueryProvider from "./Provider";
import { Toaster } from "react-hot-toast";
import Link from "next/link";

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
     <div className=' w-full  h-[10vh]   bg-gray-200 flex justify-between px-3 items-center'>
       
      
       <Image src={Logo} height={30} width={30} alt='logo'/>

       <div className=' h-full flex items-center w-full justify-end'>
       <Link href={'/'}> <button className=' px-4 mx-2 bg-blue-500 py-1 rounded-md  text-white '>Home</button>
       </Link>
       <Link href={'/task/create'}> <button className=' my-2 px-4  bg-blue-500 py-1 rounded-md  text-white '>Create Task </button>
       </Link>
       </div>

    </div>
        {children}
        <Toaster/>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
