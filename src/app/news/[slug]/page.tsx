import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { siteUrl } from "@content/site";
import { Markdown } from "@/components/markdown";
import { NewsGallery } from "@/components/news-gallery";
import { ShareButtons } from "@/components/share-buttons";
import { formatDate } from "@/lib/dates";
import { getPost, getPosts } from "@/lib/news";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Story",
    description: post?.excerpt,
    openGraph: post ? { images: [post.cover] } : undefined,
  };
}

export default function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="px-5 py-24 text-hm-muted">Loading the story…</div>}>
      <Article params={params} />
    </Suspense>
  );
}

async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `${siteUrl()}/news/${post.slug}`;

  return (
    <article>
      <div className="relative min-h-[46vh] bg-hm-blue">
        <Image src={post.cover} alt={post.coverAlt} fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-3xl flex-col justify-end px-5 py-12 text-white md:px-6">
          <p className="text-sm font-bold tracking-wide uppercase">{post.category}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-3 text-sm">{formatDate(post.date)}</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-12 md:px-6">
        <Markdown source={post.body} />
        <NewsGallery images={post.gallery} />
        <ShareButtons url={url} title={post.title} />
      </div>
    </article>
  );
}


