import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Suspense } from 'react';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoviesMod",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Suspense fallback={<div>Loading...</div>}>
        <Providers>
            <Header/>
            <Navbar/>
            <SearchBar/>
            {children}
            </Providers>
            </Suspense>
      </body>
    </html>
  );
}