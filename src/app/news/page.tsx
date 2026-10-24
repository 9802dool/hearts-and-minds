import type { Metadata } from "next";
import { NewsBrowser } from "@/components/news-browser";
import { getPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "Stories from Hearts & Minds: youth, sport, community, education, and partnerships.",
};

export default function NewsPage() {
  const posts = getPosts();

  return (
    <section className="bg-hm-blue-light px-5 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-extrabold text-hm-blue sm:text-4xl md:text-5xl">News & stories</h1>
        <p className="mt-4 max-w-2xl text-lg text-hm-muted">
          Sample stories from September and October 2026. Add a new file in content/news to publish the next one.
        </p>
        <div className="mt-10">
          <NewsBrowser posts={posts} />
        </div>
      </div>
    </section>
  );
}
