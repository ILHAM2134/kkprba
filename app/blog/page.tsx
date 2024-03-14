"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { FloatButton, Input, Pagination, Select, Spin, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDebounce } from "use-debounce";

const getData = async (
  page: number,
  search: string,
  categories: number | string,
) => {
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
    const blogCategories = resBlogCategories?.data?.data?.map((item) => ({
      value: item?.id,
      label: item?.name,
    }));

    blogCategories.unshift({ value: "", label: "All Categories" });

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
  const [categories, setCategories] = useState<number | string>(0);
  const [total, setTotal] = useState<number>(0);

  const [searchDebounce] = useDebounce(search, 500);

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
  }, [page, searchDebounce, categories, pageSize]);

  return (
    <Spin spinning={loading}>
      <Breadcrumb
        pageName="Blog"
        description="Explore a wide range of topics, from individual tax strategies to business tax optimization, all readily available at your fingertips."
      />

      <div className="container mt-3 flex items-center gap-2">
        <Select
          className="w-[200px]"
          defaultValue=""
          options={data?.blogCategories}
          onChange={(e) => {
            setCategories(e);
          }}
        />

        <Input
          allowClear
          placeholder="Search"
          className="w-[250px]"
          prefix={<SearchOutlined />}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <section className="pb-[120px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data?.dataBlog?.map((blog) => (
              <div
                key={blog.id}
                className="my-3 w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
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
    </Spin>
  );
};

export default Blog;
