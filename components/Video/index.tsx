"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

// import ModalVideo from "react-modal-video";
import { Card, Col, Row, Image, Tooltip } from "antd";

import img1 from "@/public/images/about/1-clear.png";
import img2 from "@/public/images/about/2-clear.png";
import img3 from "@/public/images/about/3-clear.png";
import img4 from "@/public/images/about/4-clear.png";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="We're more than just tax consultants – we're your trusted tax partner!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" />

                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Row
        className="container mt-[60px] border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28"
        justify="center"
      >
        <Col xs={24} md={12} lg={6} className="my-2">
          <Card
            bordered={false}
            className="flex h-[450px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={img1.src}
              alt="video image"
              width={250}
              preview={false}
            />

            <p className="text-xs text-black dark:text-white">
              Roro Bella Ayu WPP, S.Pn., M.Ak., BKP., CTT
            </p>

            <p className="mt-1 text-xs font-semibold text-black dark:text-white">
              Managing Director
            </p>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={6} className="my-2">
          <Card
            bordered={false}
            className="flex h-[450px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={img3.src}
              alt="video image"
              width={250}
              preview={false}
            />

            <p className="text-xs text-black dark:text-white">
              Aqshal Izzah Kusuma
            </p>

            <p className="mt-1 text-xs font-semibold text-black dark:text-white">
              Supervisor
            </p>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={6} className="my-2">
          <Card
            bordered={false}
            className="flex h-[450px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={img2.src}
              alt="video image"
              width={250}
              preview={false}
            />

            <p className="text-xs text-black dark:text-white">
              Abighail Putri R
            </p>

            <p className="mt-1 text-xs font-semibold text-black dark:text-white">
              Junior Tax
            </p>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={6} className="my-2">
          <Card
            bordered={false}
            className="flex h-[450px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            <Image
              src={img4.src}
              alt="video image"
              width={250}
              preview={false}
            />

            <p className="text-xs text-black dark:text-white">
              Rafachinka Renjani R
            </p>

            <p className="mt-1 text-xs font-semibold text-black dark:text-white">
              Junior Tax
            </p>
          </Card>
        </Col>
      </Row>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
    </section>
  );
};

export default Video;
