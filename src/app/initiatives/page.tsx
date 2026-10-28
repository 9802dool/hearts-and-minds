import type { Metadata } from "next";
import Link from "next/link";
import { flagshipThemes, flagships } from "@content/story";
import { accentClass } from "@/components/brand";
import { FlagshipEnrichment } from "@/components/flagship-enrichment";
import { ChapterPager } from "@/components/pager";

export const metadata: Metadata = {
  title: "Flagship initiatives",
  description: `Ten flagship initiatives. ${flagshipThemes}`,
};

export default function InitiativesPage() {
  return (
    <>
      <header className="bg-hm-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">Flagship initiatives</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight font-medium text-balance sm:text-6xl">
            Ten initiatives carry the work into schools, homes and public life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/85">{flagshipThemes}</p>
        </div>
      </header>
      {flagships.map((item, index) => (
        <article
          key={item.slug}
          id={item.slug}
          aria-labelledby={`${item.slug}-title`}
          className={`scroll-mt-32 ${index % 2 === 0 ? "bg-white" : "bg-hm-paper"}`}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
            <p className="text-xs font-semibold tracking-[0.16em] text-hm-red uppercase">Initiative {item.number}</p>
            <h2 id={`${item.slug}-title`} className="mt-3 max-w-4xl font-display text-3xl leading-tight font-medium text-balance text-hm-navy sm:text-5xl">
              {item.name}
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-pretty">{item.text}</p>
            <FlagshipEnrichment slug={item.slug} />
          </div>
        </article>
      ))}
      <div className="border-t border-hm-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <Link href="/get-involved" className={accentClass}>
            Support this work
          </Link>
        </div>
      </div>
      <ChapterPager href="/initiatives" />
    </>
  );
}
