"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import logo from "@/public/images/logo/logo.jpg";

import { Providers } from "./providers";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const isCountVisitor = window.localStorage.getItem("dateCountVisitor");

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();

    const fullDate = `${year}-${month}-${dt}`;

    if (isCountVisitor) {
      if (isCountVisitor !== fullDate) {
        axios.put("https://www.backend.kkprba.com/api/total-viewer");
        window.localStorage.setItem("dateCountVisitor", fullDate);
      }
    } else {
      axios.put("https://www.backend.kkprba.com/api/total-viewer");
      window.localStorage.setItem("dateCountVisitor", fullDate);
    }
  }, [pathname]);

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
