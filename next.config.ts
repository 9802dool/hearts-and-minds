import type { NextConfig } from "next";

const programmesImpact = "/programmes-impact";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/contact", destination: "/get-involved#contact", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/news/:slug", destination: "/", permanent: false },
      { source: "/events", destination: `${programmesImpact}#work`, permanent: false },
      { source: "/gallery", destination: "/", permanent: false },
      { source: "/programmes", destination: `${programmesImpact}#work`, permanent: false },
      { source: "/education", destination: `${programmesImpact}#education`, permanent: false },
      { source: "/youth", destination: `${programmesImpact}#youth`, permanent: false },
      { source: "/impact", destination: `${programmesImpact}#impact`, permanent: false },
      { source: "/relief", destination: `${programmesImpact}#relief`, permanent: false },
      { source: "/sport", destination: `${programmesImpact}#sport`, permanent: false },
      { source: "/intervention", destination: `${programmesImpact}#intervention`, permanent: false },
      { source: "/community", destination: `${programmesImpact}#community`, permanent: false },
      { source: "/partners", destination: `${programmesImpact}#partners`, permanent: false },
      { source: "/programmes/youth-sports", destination: `${programmesImpact}#sport`, permanent: false },
      { source: "/programmes/school-leadership", destination: "/initiatives#pycc", permanent: false },
      { source: "/programmes/community-library", destination: `${programmesImpact}#community`, permanent: false },
      { source: "/programmes/community-engagement", destination: "/about", permanent: false },
      { source: "/programmes/youth-achievement", destination: "/initiatives#aspiring-stars", permanent: false },
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
