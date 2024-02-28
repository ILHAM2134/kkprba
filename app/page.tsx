import AboutSectionOne from "@/components/About/AboutSectionOne";
import Regulation from "@/components/About/Regulation";
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
import { useEffect, useState } from "react";

const getData = async () => {
  try {
    const resDataBlog = await axios("https://www.backend.kkprba.com/api/blog");
    const dataBlogCarousel = resDataBlog?.data?.data?.filter(
      (item) => item?.is_carousel === "1",
    );

    const dataBlog = resDataBlog?.data?.data?.slice(0, 3);

    const resDataRegulation = await axios(
      "https://www.backend.kkprba.com/api/regulation",
    );
    const dataRegulation = resDataRegulation?.data?.data;

    return {
      dataBlogCarousel,
      dataBlog,
      dataRegulation,
    };
  } catch {
    return {
      dataBlogCarousel: [],
      dataBlog: [],
      dataRegulation: [],
    };
  }
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      <ScrollUp />

      <Hero data={data?.dataBlogCarousel} />

      <AboutSectionOne />

      <Features />

      <Video />

      {/* <Brands /> */}

      <Regulation data={data?.dataRegulation} />

      {/* <Testimonials /> */}

      {/* <Pricing /> */}

      <Blog data={data?.dataBlog} />

      {/* <Contact /> */}
    </>
  );
}
