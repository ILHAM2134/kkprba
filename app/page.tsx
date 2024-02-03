"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
};

const getData = async () => {
  try {
    const data: any = await axios("https://www.backend.kkprba.com/api/blog");

    return {
      data,
    };
  } catch {
    return {
      data: {},
    };
  }
};

export default async function Home() {
  const resData = await getData();

  const data = resData?.data?.data?.data?.filter(
    (item) => item?.is_carousel === "1",
  );

  return (
    <>
      <ScrollUp />

      <Hero data={data} />

      <AboutSectionOne />

      <Features />

      <Video />

      {/* <Brands /> */}

      <AboutSectionTwo />

      {/* <Testimonials /> */}

      {/* <Pricing /> */}

      <Blog data={data} />

      <Contact />
    </>
  );
}
