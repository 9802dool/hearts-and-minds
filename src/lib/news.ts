import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { newsCategories, type NewsCategory, type NewsPost } from "@/lib/news-types";

export { newsCategories };
export type { NewsCategory, NewsImage, NewsPost } from "@/lib/news-types";

const newsDir = path.join(process.cwd(), "content", "news");

function asDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getUTCFullYear();
    const month = String(value.getUTCMonth() + 1).padStart(2, "0");
    const day = String(value.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return String(value ?? "").slice(0, 10);
}

function asCategory(value: unknown): NewsCategory {
  if (typeof value === "string" && newsCategories.includes(value as NewsCategory)) return value as NewsCategory;
  return "Community";
}

function readPost(fileName: string): NewsPost {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(newsDir, fileName), "utf8");
  const { data, content } = matter(raw);
  const gallery = Array.isArray(data.gallery)
    ? data.gallery.flatMap((item) => {
        if (!item || typeof item !== "object") return [];
        const image = item as { src?: unknown; alt?: unknown };
        if (typeof image.src !== "string") return [];
        return [{ src: image.src, alt: typeof image.alt === "string" ? image.alt : "" }];
      })
    : [];

  return {
    slug,
    title: String(data.title ?? slug),
    date: asDate(data.date),
    category: asCategory(data.category),
    excerpt: String(data.excerpt ?? ""),
    cover: String(data.cover ?? "/images/about-community.jpg"),
    coverAlt: String(data.coverAlt ?? ""),
    gallery,
    body: content.trim(),
  };
}

export function getPosts() {
  if (!fs.existsSync(newsDir)) return [];
  return fs
    .readdirSync(newsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
