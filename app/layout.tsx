"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import logo from "@/public/images/logo/logo.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>KKPRBA</title>

        <link rel="icon" type="image/png" href={logo.src} />
      </head>
      <body
        className={`bg-[#FCFCFC] scrollbar-thin scrollbar-track-gray-50 scrollbar-thumb-gray-300 dark:bg-black dark:scrollbar-track-gray-800 dark:scrollbar-thumb-gray-500 ${inter.className}`}
      >
        <Providers>
          <Header />

          {children}

          <Footer />

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
