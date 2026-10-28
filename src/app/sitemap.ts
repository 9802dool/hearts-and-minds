import type { MetadataRoute } from "next";
import { siteUrl } from "@content/site";
import { flagships } from "@content/story";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteUrl();
  const paths = [
    "",
    "/about",
    "/programmes",
    "/education",
    "/youth",
    "/impact",
    "/relief",
    "/sport",
    "/intervention",
    "/community",
    "/partners",
    "/get-involved",
  ];
  return [
    ...paths.map((path) => ({
      url: `${root}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...flagships.map((item) => ({
      url: `${root}/programmes/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
