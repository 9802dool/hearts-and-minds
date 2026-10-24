export const newsCategories = ["Youth", "Sport", "Community", "Education", "Partnerships"] as const;
export type NewsCategory = (typeof newsCategories)[number];

export type NewsImage = { src: string; alt: string };

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  cover: string;
  coverAlt: string;
  gallery: NewsImage[];
  body: string;
};
