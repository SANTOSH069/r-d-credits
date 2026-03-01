import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from '@clerk/nextjs'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  style: ['normal'],
  subsets: ["latin"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  style: ['normal'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyrx",
  description: "R&D Credits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
            <header className="flex justify-end items-center">
              
              {/* Show the user button when the user is signed in */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <Navbar/>
            {children}
          </body>
        </html>
      </ClerkProvider>
  );
}
