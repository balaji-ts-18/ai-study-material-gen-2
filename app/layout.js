import localFont from "next/font/local";
import "./globals.css";
import { Outfit } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "PreparationAI",
  description: "A platform to prepare with the help of AI, smart way to study",
};

const outfit = Outfit({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} bg-[#12120d] text-white min-h-screen`}>
          <Provider>
            {children}
          </Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
