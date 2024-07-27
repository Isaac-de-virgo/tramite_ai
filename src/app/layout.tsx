import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ComponentNavbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heaven",
  description: "Creado con AI SDK Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ComponentNavbar/>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        {children}
      </body>
    </html>
  );
}
