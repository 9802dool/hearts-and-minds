"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsCategories, type NewsPost } from "@/lib/news-types";
import { formatDate } from "@/lib/dates";

export function NewsBrowser({ posts }: { posts: NewsPost[] }) {
  const [category, setCategory] = useState<(typeof newsCategories)[number] | "All">("All");
  const visible = category === "All" ? posts : posts.filter((post) => post.category === category);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {(["All", ...newsCategories] as const).map((name) => (
          <button
            key={name}
            className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-bold ${category === name ? "bg-hm-red text-white" : "bg-white text-hm-blue"}`}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <Link href={`/news/${post.slug}`}>
              <Image src={post.cover} alt={post.coverAlt} width={1200} height={800} className="aspect-[16/10] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-bold tracking-wide text-hm-red uppercase">{post.category}</p>
                <h2 className="mt-2 font-display text-xl font-bold text-hm-blue">{post.title}</h2>
                <p className="mt-2 text-sm text-hm-muted">{formatDate(post.date)}</p>
                <p className="mt-3 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}


