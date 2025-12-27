import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import {ClerkProvider} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "AI Agent Builder Platform",
  description: "The app where you can build AI agent by simply drag and drop",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
