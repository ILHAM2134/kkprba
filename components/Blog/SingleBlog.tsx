import { Blog } from "@/types/blog";
import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";

import { UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const {
    id,
    title,
    short_title,
    image,
    description,
    is_carousel,
    categories,
    created_at,
    updated_at,
  } = blog;

  return (
    <>
      <div
        className="wow fadeInUp group relative h-[500px] overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`/blog/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {categories?.[0]?.name}
          </span>

          <img src={image} alt="image" height={300} />
        </Link>

        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>

          <div
            className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
            dangerouslySetInnerHTML={{
              __html:
                description?.length > 50
                  ? description?.slice(0, 50) + "..."
                  : description,
            }}
          />

          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative overflow-hidden rounded-full">
                  <Avatar icon={<UserOutlined />} />
                </div>
              </div>

              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By Admin
                </h4>

                <p className="text-xs text-body-color">admin2024</p>
              </div>
            </div>

            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Publish Date
              </h4>

              <p className="text-xs text-body-color">
                {dayjs(created_at).format("DD MMMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
