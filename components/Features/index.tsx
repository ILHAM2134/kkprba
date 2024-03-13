import { Card, Col, Row, Image } from "antd";
import { FaHandHoldingHeart, FaHands } from "react-icons/fa";
import { GrCompliance, GrPlan } from "react-icons/gr";
import { BsFileEarmarkText } from "react-icons/bs";

import ourService from "@/public/images/about/our-service.png";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const items = [];
  for (let i = 0; i < 4; i++) {
    items.push({ id: i });
  }

  return (
    <>
      <section id="our-services" className="py-16  md:py-20 lg:py-28">
        <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <Row
            justify={{ xs: "end", md: "space-between" }}
            className="flex flex-wrap-reverse md:flex-none"
          >
            <Col xs={24} md={14} className="mx-auto flex flex-wrap gap-6 p-2">
              {/* TAX COMPLIANCE */}
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <Card
                      bordered={false}
                      className=" flex h-[250px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
                    >
                      <GrCompliance className="mx-auto mb-3 text-4xl text-black dark:text-white" />

                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Compliance
                      </p>

                      <p className="mt-3 text-center text-black dark:text-white">
                        Help you to achieve tax compliance for personal /
                        business
                      </p>
                    </Card>
                  </div>

                  <div className="card-back hover:z-40">
                    <Card
                      bordered={false}
                      className="h-[250px] w-[300px] bg-gray-100 dark:bg-gray-800"
                    >
                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Compliance
                      </p>

                      <ul className="ml-3 list-disc">
                        <li className="my-2 text-black dark:text-white">
                          Konsultasi Perpajakan
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          Penyusunan dan Pelaporan SPT Masa
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          Penyusunan dan Pelaporan SPT Tahunan
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          Pengajuan Pemindah Bukuan Setoran Pajak (PBK)
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              {/* TAX ADMINISTRATOR */}
              <div className="flip-card-container lg:mt-[100px]">
                <div className="flip-card">
                  <div className="card-front">
                    <Card
                      bordered={false}
                      className=" flex h-[250px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
                    >
                      <BsFileEarmarkText className="mx-auto mb-3 text-4xl text-black dark:text-white" />

                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Administration
                      </p>

                      <p className="mt-3 text-center text-black dark:text-white">
                        Take the Stress Out of Tax Season: We Handle the
                        Administration.
                      </p>
                    </Card>
                  </div>

                  <div className="card-back hover:z-40">
                    <Card
                      bordered={false}
                      className="h-[250px] w-[300px] bg-gray-100 dark:bg-gray-800"
                    >
                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Administration
                      </p>

                      <ul className="ml-3 list-disc">
                        <li className="my-2 text-black dark:text-white">
                          Nomor Pokok Wajib Pajak (NPWP)
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          Validasi Nomor Induxs: 'end'dukan (NIK)
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          EFIN & Surat Keterangan Bebas (SKB)
                        </li>

                        <li className="my-2 text-black dark:text-white">
                          Pengukuhan Pengusaha Kena Pajak (PKP)
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Tax Planning Advisory */}
              <div className="flip-card-container lg:mt-[-100px]">
                <div className="flip-card">
                  <div className="card-front">
                    <Card
                      bordered={false}
                      className=" flex h-[250px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
                    >
                      <GrPlan className="mx-auto mb-3 text-4xl text-black dark:text-white" />

                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Planning Advisory
                      </p>

                      <p className="mt-3 text-center text-black dark:text-white">
                        Future-Proof Your Finances: Get Personalized Tax
                        Planning Advice.
                      </p>
                    </Card>
                  </div>

                  <div className="card-back hover:z-40">
                    <Card
                      bordered={false}
                      className="h-[250px] w-[300px] bg-gray-100 dark:bg-gray-800"
                    >
                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Planning Advisory
                      </p>

                      <ul className="ml-3 list-disc">
                        <li className="my-2 text-black dark:text-white">
                          Membuat Perencanaan Pajak untuk Perusahaan
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Review Laporan Keuangan Fiskal
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Memaksimalkan Penghematan Pajak
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Meminimalisir Tax Exposure
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Tax Litigation Services */}
              <div className="flip-card-container">
                <div className="flip-card">
                  <div className="card-front">
                    <Card
                      bordered={false}
                      className=" flex h-[250px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
                    >
                      <FaHands className="mx-auto mb-3 text-4xl text-black dark:text-white" />

                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Litigation Services
                      </p>

                      <p className="mt-3 text-center text-black dark:text-white">
                        Facing a Tax Dispute? Don't Go It Alone. Get Expert Tax
                        Litigation Representation.
                      </p>
                    </Card>
                  </div>

                  <div className="card-back hover:z-40">
                    <Card
                      bordered={false}
                      className="h-[250px] w-[300px] bg-gray-100 dark:bg-gray-800"
                    >
                      <p className="text-center text-2xl text-black dark:text-white">
                        Tax Litigation Services
                      </p>

                      <ul className="ml-3 list-disc">
                        <li className="my-2 text-black dark:text-white">
                          Pengajuan Permohonan Pengurangan Sanksi Administrasi
                          Pajak
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Restitusi Perpajakan
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Pemeriksaan Perpajakan
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Sengketa Perpajakan
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Kuasa Hukum Pengadilan Pajak
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Brevet & Pelatihan*/}
              <div className="flip-card-container lg:mt-[-100px]">
                <div className="flip-card">
                  <div className="card-front">
                    <Card
                      bordered={false}
                      className=" flex h-[250px] w-[300px] items-center justify-center bg-gray-100 dark:bg-gray-800"
                    >
                      <FaHands className="mx-auto mb-3 text-4xl text-black dark:text-white" />

                      <p className="text-center text-2xl text-black dark:text-white">
                        Brevet & Pelatihan
                      </p>

                      <p className="mt-3 text-center text-black dark:text-white">
                        Empower Yourself & Your Team: Get Certified in Tax with
                        Our Expert Guidance.
                      </p>
                    </Card>
                  </div>

                  <div className="card-back hover:z-40">
                    <Card
                      bordered={false}
                      className="h-[250px] w-[300px] bg-gray-100 dark:bg-gray-800"
                    >
                      <p className="text-center text-2xl text-black dark:text-white">
                        Brevet & Pelatihan
                      </p>

                      <ul className="ml-3 list-disc">
                        <li className="my-2 text-black dark:text-white">
                          Pelajari tentang sistem perpajakan di Indonesia
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Melaporkan SPT Masa dan Tahunan
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Memahami mekanisme penyelesaian sengketa pajak
                        </li>
                        <li className="my-2 text-black dark:text-white">
                          Pelatihan Bea Masuk dan Cukai
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={24} md={10} className="flex items-center">
              <div className="w-full" data-wow-delay=".1s">
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Our Services
                </h2>

                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  We offer a comprehensive suite of tax services designed to
                  meet your individual and business needs. we're here to help
                  you every step of the way.
                </p>

                <Image
                  src={ourService.src}
                  alt="about-image"
                  preview={false}
                  className=" mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Features;
