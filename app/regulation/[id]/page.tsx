"use client";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

const getBlogDetail = (id: string) => {
  return axios(`https://www.backend.kkprba.com/api/regulation/${id}`);
};

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const [dataNews, setDataNews] = useState<any>({});

  useEffect(() => {
    getBlogDetail(params?.id).then((res) => {
      const data = res?.data?.data;

      setDataNews(data);
    });
  }, []);

  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {dataNews?.title}
                </h2>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {dataNews?.short_title}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <img
                        src={dataNews?.image}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg";
                        }}
                        alt="image"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p
                    className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: dataNews?.description }}
                  ></p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>

                      <div className="flex items-center">
                        {dataNews?.categories?.map((item) => (
                          <TagButton key={item.id} text={item?.name} />
                        ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
