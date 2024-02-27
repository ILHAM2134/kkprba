type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  short_title: string;
  image: string;
  description: string;
  is_carousel: string;
  categories: { id: number; name: string }[];
  created_at: string;
  updated_at: string;
};
