"use client";
import './globals.css'
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import {session} from "next-auth/core/routes";
import {ReactNode} from "react";


interface rootProps {
    children: ReactNode;
    session: any;
}

export default function RootLayout({children, session}: rootProps) {
  return (
    <html lang="en">
      <body
          className="w-screen bg-[#1C1A1A] px-12 pt-5 flex flex-col gap-10">
      <SessionProvider session={session}>
      <Header />
      {children}
      </SessionProvider>
      </body>
    </html>
  )
}
