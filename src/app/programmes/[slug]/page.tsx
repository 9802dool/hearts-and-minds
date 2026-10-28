import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { storiesBySlug } from "@content/activity";
import { flagshipThemes, flagships } from "@content/story";
import { accentClass } from "@/components/brand";
import { PageNotes } from "@/components/page-notes";

export function generateStaticParams() {
  return flagships.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = flagships.find((entry) => entry.slug === slug);
  return {
    title: item?.name ?? "Initiative",
    description: item?.text,
  };
}

export default function FlagshipPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<p className="px-5 py-24 text-hm-muted">Opening this initiative…</p>}>
      <Flagship params={params} />
    </Suspense>
  );
}

async function Flagship({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = flagships.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const index = flagships.findIndex((entry) => entry.slug === slug);
  const previous = flagships[index - 1];
  const next = flagships[index + 1];
  const related = storiesBySlug(
    item.slug === "pycc"
      ? ["pycc-south-east", "youth-empowerment-graduation"]
      : item.slug === "fades-and-braids"
        ? ["fades-and-braids-outings"]
        : [],
  );

  return (
    <article>
      <header className="bg-hm-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">Flagship initiative {item.number}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight font-medium text-balance sm:text-6xl">{item.name}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6">
        <p className="text-xl leading-relaxed text-pretty">{item.text}</p>
        <p className="mt-6 text-hm-muted">Across the ten flagship initiatives: {flagshipThemes}</p>
        <Link href="/get-involved" className={`${accentClass} mt-8`}>
          Support this work
        </Link>
        {related.length > 0 ? (
          <PageNotes
            stories={related}
            titleAs="h2"
            intro={
              item.slug === "fades-and-braids"
                ? "The description above is the programme account, including the clinic on the Brian Lara Promenade. The page notes below are separate, and they do not give a date. The photographs do not label a location as Maracas Bay."
                : "These notes add detail from the Hearts & Minds page. They sit with this initiative."
            }
          />
        ) : null}
      </div>
      <nav aria-label="Other flagship initiatives" className="border-t border-hm-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 py-8 sm:grid-cols-2 sm:px-6">
          {previous ? (
            <Link href={`/programmes/${previous.slug}`} className="rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy">
              <span className="block text-xs font-semibold tracking-[0.16em] text-hm-muted uppercase">Previous</span>
              <span className="mt-1 block font-display text-xl text-hm-navy">{previous.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/programmes/${next.slug}`} className="rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy sm:text-right">
              <span className="block text-xs font-semibold tracking-[0.16em] text-hm-muted uppercase">Next</span>
              <span className="mt-1 block font-display text-xl text-hm-navy">{next.name}</span>
            </Link>
          ) : (
            <Link href="/education" className="rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy sm:text-right">
              <span className="block text-xs font-semibold tracking-[0.16em] text-hm-muted uppercase">Continue</span>
              <span className="mt-1 block font-display text-xl text-hm-navy">Education reach</span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
