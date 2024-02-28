"use client";
import { ModalBlogCategories } from "@/components/Blog";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FloatButton, Pagination, Spin, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const getData = async (page: number, search: string, categories: number) => {
  try {
    const resDataBlog = await axios(
      `https://www.backend.kkprba.com/api/blog?page=${page}&search=${search}&categories=${categories}`,
    );

    const resBlogCategories = await axios(
      `https://www.backend.kkprba.com/api/blog-category`,
    );

    const dataBlog = resDataBlog?.data?.data;
    const links = resDataBlog?.data?.links;
    const meta = resDataBlog?.data?.meta;
    const blogCategories = resBlogCategories?.data?.data;

    return {
      dataBlog,
      links,
      meta,
      blogCategories,
    };
  } catch {
    return {
      dataBlog: [],
      links: {},
      meta: {},
      blogCategories: [],
    };
  }
};

const Blog = () => {
  const [data, setData] = useState<any>({ dataBlog: [] });
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const [modalCategoryOpen, setModalCategoryOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getDataFetch = async () => {
      const data = await getData(page, search, categories);

      setData(data);
      setPage(data?.meta?.current_page);
      setPageSize(data?.meta?.per_page);
      setTotal(data?.meta?.total);
      setLoading(false);
    };

    getDataFetch();
  }, [page, search, categories, pageSize]);

  return (
    <Spin spinning={loading}>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data?.dataBlog?.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-8 max-w-[400px]">
          <FloatButton
            onClick={() => setModalCategoryOpen(true)}
            type="primary"
            shape="square"
            className="fixed bottom-8 right-20 z-[99]"
            tooltip={<div>Click for Blog Categories</div>}
          />
        </div>

        <div className="container mt-12 flex justify-center">
          <Pagination
            pageSizeOptions={[10, 15, 20]}
            className="container flex justify-center py-5 dark:bg-slate-600"
            showSizeChanger
            total={total}
            onChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
          />
        </div>
      </section>

      <ModalBlogCategories
        modalCategoryOpen={modalCategoryOpen}
        setModalCategoryOpen={setModalCategoryOpen}
        blogCategories={data?.blogCategories}
        setCategories={setCategories}
      />
    </Spin>
  );
};

export default Blog;
