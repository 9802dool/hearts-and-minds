import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/contact", destination: "/get-involved#contact", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/news/:slug", destination: "/", permanent: false },
      { source: "/events", destination: "/programmes", permanent: false },
      { source: "/gallery", destination: "/", permanent: false },
      { source: "/programmes/youth-sports", destination: "/sport", permanent: false },
      { source: "/programmes/school-leadership", destination: "/programmes/pycc", permanent: false },
      { source: "/programmes/community-library", destination: "/community", permanent: false },
      { source: "/programmes/community-engagement", destination: "/about", permanent: false },
      { source: "/programmes/youth-achievement", destination: "/programmes/aspiring-stars", permanent: false },
      { source: "/programmes/regional-exchange", destination: "/", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
