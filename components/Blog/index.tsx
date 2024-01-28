"use client";
import { Button } from "antd";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
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
    </section>
  );
};

export default Blog;
