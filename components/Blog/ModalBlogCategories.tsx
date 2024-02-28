import { Modal, Tag } from "antd";
import { Dispatch, SetStateAction } from "react";

type TPropsModalBlogCategories = {
  modalCategoryOpen: boolean;
  setModalCategoryOpen: Dispatch<SetStateAction<boolean>>;
  blogCategories: any[];
  setCategories: Dispatch<SetStateAction<number>>;
};

export const ModalBlogCategories = ({
  modalCategoryOpen,
  setModalCategoryOpen,
  blogCategories,
  setCategories,
}: TPropsModalBlogCategories) => {
  return (
    <Modal
      title={<p className="">Explore Blog by Category</p>}
      open={modalCategoryOpen}
      onCancel={() => setModalCategoryOpen(false)}
      okButtonProps={{ className: "hidden" }}
      cancelText="Close"
    >
      <p className="mt-4 py-2 font-medium">
        Discover more of what matters to you
      </p>

      <div className="mb-4 flex max-w-[400px] flex-wrap gap-y-2">
        <Tag
          key={0}
          color="blue"
          className="cursor-pointer p-1"
          onClick={() => {
            setCategories(0);
            setModalCategoryOpen(false);
          }}
        >
          All Categories
        </Tag>

        {blogCategories?.map((item) => (
          <Tag
            key={item?.id}
            color="blue"
            className="cursor-pointer p-1"
            onClick={() => {
              setCategories(item?.id);
              setModalCategoryOpen(false);
            }}
          >
            {item?.name}
          </Tag>
        ))}
      </div>
    </Modal>
  );
};
