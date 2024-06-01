import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priapus",
  description: "AI platform ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
        <CrispProvider/>
          <body className={inter.className}>
            
            
            <ModalProvider/>
            
            
            
            {children}</body>
       </html>
    </ClerkProvider>
  );
}