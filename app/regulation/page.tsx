"use client";
import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import {
  Card,
  Checkbox,
  ConfigProvider,
  Input,
  Pagination,
  Select,
  Spin,
  Tag,
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDebounce } from "use-debounce";
import { SingleRegulation } from "@/components/Regulation";
import { CheckboxValueType } from "antd/es/checkbox/Group";

const getData = async (
  page: number,
  search: string,
  categories: number | string,
) => {
  try {
    const resDataRegulation = await axios(
      `https://www.backend.kkprba.com/api/regulation?page=${page}&search=${search}&categories=${categories}`,
    );

    const resRegulationCategory = await axios(
      `https://www.backend.kkprba.com/api/regulation-category`,
    );

    const dataRegulations = resDataRegulation?.data?.data;
    const links = resDataRegulation?.data?.links;
    const meta = resDataRegulation?.data?.meta;
    const regulationsCategory = resRegulationCategory?.data?.data?.map(
      (item) => ({
        value: item?.id,
        label: item?.name,
      }),
    );

    regulationsCategory.unshift({ value: "", label: "All Categories" });

    return {
      dataRegulations,
      links,
      meta,
      regulationsCategory,
    };
  } catch {
    return {
      dataRegulations: [],
      links: {},
      meta: {},
      regulationsCategory: [],
    };
  }
};

const Regulation = () => {
  const [data, setData] = useState<any>({ dataRegulations: [] });
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  const [categories, setCategories] = useState<CheckboxValueType[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [searchDebounce] = useDebounce(search, 500);

  const [loading, setLoading] = useState<boolean>(false);

  const [modalCategoryOpen, setModalCategoryOpen] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getDataFetch = async () => {
      const processedCategories = categories?.join(",");

      const data = await getData(page, search, processedCategories);

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
        pageName="Regulation Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <div className="container block pb-[100px] pt-[50px] lg:flex">
        <section className="sticky top-24 z-50 w-full lg:w-1/3">
          <Card
            size="small"
            title={<p className="dark:text-slate-50">Categories</p>}
            // extra={<a href="#">More</a>}
            className="container sticky top-24 z-50 mb-6 w-full dark:bg-gray-800 dark:text-slate-50 lg:mb-3"
          >
            <ConfigProvider
              theme={{
                token: {
                  colorText: "slate",
                },
              }}
            >
              <Checkbox.Group
                className="dark:text-slate-50"
                options={data?.regulationsCategory}
                onChange={(e) => {
                  setCategories(e);
                }}
              />
            </ConfigProvider>

            <Input
              allowClear
              placeholder="Search by title"
              className="mt-10 w-[250px]"
              prefix={<SearchOutlined />}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Card>
        </section>

        <section className="w-full lg:w-2/3">
          {data?.dataRegulations?.map((regulation) => (
            <div key={regulation.id} className="my-2 w-full px-4">
              <SingleRegulation regulation={regulation} />
            </div>
          ))}
        </section>
      </div>

      <div className="container mb-8 flex justify-center">
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
    </Spin>
  );
};

export default Regulation;
