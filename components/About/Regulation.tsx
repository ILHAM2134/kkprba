"use client";
import { Button, Collapse, CollapseProps, ConfigProvider, Image } from "antd";
import imgRegulation from "@/public/images/about/regulation.png";
import SectionTitle from "../Common/SectionTitle";
import { GrLinkNext } from "react-icons/gr";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { useRouter } from "next/navigation";

type TDataRegulations = {
  categories: { id: number; name: string }[];
  created_at: string;
  description: string;
  id: number;
  image: string;
  is_carousel: number | string | boolean | null;
  short_title: string;
  title: string;
  updated_at: string;
};

type TPropsRegulation = {
  data: TDataRegulations[] | [];
};

const Regulation = ({ data }: TPropsRegulation) => {
  const router = useRouter();

  const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

  const items: CollapseProps["items"] = data?.slice(0, 3)?.map((item) => ({
    key: item?.id,
    label: <p className="text-black dark:text-white">{item?.short_title}</p>,
    children: <p className="text-black dark:text-white">{item?.title}</p>,
  }));

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="regulation" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src={imgRegulation.src}
                  alt="about-image"
                  width={500}
                  preview={false}
                  className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                />

                <SectionTitle
                  title="Regulation"
                  paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                  mb="44px"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp mb-12 lg:mb-0" data-wow-delay=".15s">
                <ConfigProvider
                  theme={{
                    components: {
                      Collapse: {
                        contentBg: "transparent",
                      },
                    },
                  }}
                >
                  <Collapse
                    expandIcon={(panelProps) => {
                      return panelProps?.isActive ? (
                        <div className="bg-white dark:bg-black">
                          <IoIosArrowUp className="text-black dark:text-white" />
                        </div>
                      ) : (
                        <div className="">
                          <IoIosArrowDown className="text-black dark:text-white" />
                        </div>
                      );
                    }}
                    size="large"
                    className="w-full bg-transparent"
                    rootClassName="dark:bg-black"
                    items={items}
                    defaultActiveKey={["1"]}
                  />
                </ConfigProvider>

                <Button
                  type="text"
                  className="ml-auto mt-5 flex items-center justify-end text-black dark:text-white dark:hover:text-gray-100"
                  icon={<GrLinkNext />}
                  onClick={() => router.push("/regulation")}
                >
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[4700px] z-50">
        <svg
          width="179"
          height="158"
          viewBox="0 0 179 158"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
            fill="url(#paint0_linear_70:153)"
          />
          <path
            opacity="0.3"
            d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
            fill="url(#paint1_linear_70:153)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_70:153"
              x1="69.6694"
              y1="29.9033"
              x2="196.108"
              y2="83.2919"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_70:153"
              x1="165.348"
              y1="-75.4466"
              x2="-3.75136"
              y2="103.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Regulation;
