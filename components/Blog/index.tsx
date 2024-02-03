"use client";
import { Button } from "antd";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type TPropsHero = {
  data: any[];
};

const Blog = ({ data }: TPropsHero) => {
  console.log({ data });
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <Button
          type="text"
          className="ml-auto mt-5 flex items-center justify-end text-black dark:text-white dark:hover:text-gray-100"
          onClick={() => {
            router.push("/blog");
          }}
          icon={<GrLinkNext />}
        >
          Selengkapnya
        </Button>
      </div>

      <div className="absolute right-2 top-[5300px]">
        <svg
          width="57"
          height="65"
          viewBox="0 0 57 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill="url(#paint0_linear_1028_600)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1028_600"
              x1="-18.3187"
              y1="55.1044"
              x2="37.161"
              y2="15.3509"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0.62"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute left-[50px] top-[5000px]">
        <svg
          width="162"
          height="91"
          viewBox="0 0 162 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              opacity="0.45"
              d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
              stroke="url(#paint0_linear_1028_603)"
            />
            <path
              opacity="0.45"
              d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
              stroke="url(#paint1_linear_1028_603)"
            />
            <path
              opacity="0.45"
              d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
              stroke="url(#paint2_linear_1028_603)"
            />
            <path
              opacity="0.45"
              d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
              stroke="url(#paint3_linear_1028_603)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1028_603"
              x1="291.35"
              y1="12.1032"
              x2="179.211"
              y2="237.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.328125"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1028_603"
              x1="333.35"
              y1="-12.8968"
              x2="221.211"
              y2="212.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.328125"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1028_603"
              x1="294.35"
              y1="-3.89678"
              x2="182.211"
              y2="221.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.328125"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0"
              />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1028_603"
              x1="331.35"
              y1="-36.8968"
              x2="219.211"
              y2="188.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.328125"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Blog;
