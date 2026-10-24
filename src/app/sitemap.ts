import type { MetadataRoute } from "next";
import { programmes } from "@content/programmes";
import { siteUrl } from "@content/site";
import { getPosts } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteUrl();
  const paths = ["", "/about", "/programmes", "/news", "/events", "/gallery", "/get-involved", "/contact"];
  return [
    ...paths.map((path) => ({ url: `${root}${path}`, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...programmes.map((programme) => ({ url: `${root}/programmes/${programme.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...getPosts().map((post) => ({ url: `${root}/news/${post.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
