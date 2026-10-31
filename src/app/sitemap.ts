import type { MetadataRoute } from "next";
import { siteUrl } from "@content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteUrl();
  const paths = ["", "/about", "/initiatives", "/programmes-impact", "/get-involved"];
  return [
    ...paths.map((path) => ({
      url: `${root}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/initiatives" ? 0.8 : 0.7,
    })),
  ];
}
