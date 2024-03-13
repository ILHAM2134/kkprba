"use client";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Regulation from "@/components/About/Regulation";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import axios from "axios";
import { useEffect, useState } from "react";

// import Brands from "@/components/Brands";
// import Contact from "@/components/Contact";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";

type TDataFetch = {
  dataBlogCarousel: any[];
  dataBlog: any[];
  dataRegulation: any[];
};

export default function Home() {
  const [data, setData] = useState<TDataFetch>({
    dataBlogCarousel: [],
    dataBlog: [],
    dataRegulation: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resDataBlog = await axios(
          "https://www.backend.kkprba.com/api/blog",
        );
        const dataBlogCarousel = resDataBlog?.data?.data?.filter(
          (item) => item?.is_carousel === "1",
        );

        const dataBlog = resDataBlog?.data?.data?.slice(0, 3);

        const resDataRegulation = await axios(
          "https://www.backend.kkprba.com/api/regulation",
        );
        const dataRegulation = resDataRegulation?.data?.data;

        setData({ dataBlogCarousel, dataBlog, dataRegulation });
      } catch {}
    };

    fetchData();
  }, []);

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
