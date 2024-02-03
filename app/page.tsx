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
import { useState } from "react";

const getData = () => {
  return axios("https://www.backend.kkprba.com/api/blog");
};

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  getData().then((res) => {
    console.log({ res });
    const data = res?.data?.data?.filter((item) => item?.is_carousel === "1");

    setData(data);

    console.log({ data });
  });

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
