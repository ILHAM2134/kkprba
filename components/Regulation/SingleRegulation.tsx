import { Card, Divider, Tag } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type TPropsSingleRegulations = {
  regulation: any;
};

export const SingleRegulation = ({ regulation }: TPropsSingleRegulations) => {
  const router = useRouter();

  return (
    <Card
      size="small"
      title={
        <p className="dark:text-slate-50">
          {regulation?.title?.length > 100
            ? regulation?.title?.slice(0, 100) + "..."
            : regulation?.title}
        </p>
      }
      extra={
        <a
          onClick={() => router.push(`/regulation/${regulation?.id}`)}
          className="dark:text-white"
        >
          Read More
        </a>
      }
      className="mb-2 w-full bg-gray-100 dark:bg-gray-800 dark:text-slate-50 md:mb-3"
    >
      <p className="">
        <span>Kategori :&nbsp;&nbsp;</span>

        {regulation?.categories?.map((item) => (
          <Tag key={item?.id} className="dark:bg-[#2C303B] dark:text-slate-50">
            {item?.name}
          </Tag>
        ))}
      </p>

      <p
        className="mt-8"
        dangerouslySetInnerHTML={{
          __html:
            regulation?.description?.length > 500
              ? regulation?.description?.slice(0, 500) + "..."
              : regulation?.description,
        }}
      />

      <Divider className="mb-3 dark:border-white" />

      <p className="">
        <span>Publish Date :&nbsp;&nbsp;</span>

        <span>{dayjs(regulation?.created_at).format("DD MMMM YYYY")}</span>
      </p>
    </Card>
  );
};
