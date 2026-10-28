import type { Metadata } from "next";
import { partners, nextChapter } from "@content/story";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageIntro } from "@/components/page-intro";
import { ChapterPager } from "@/components/pager";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Sponsor a youth, sport, education or relief initiative, contribute skills or equipment, or partner for the long term.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro kicker={nextChapter.kicker} title={nextChapter.title} lede={partners.funding} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl font-medium text-hm-navy">Three ways to help</h2>
          <ol className="mt-6 space-y-6">
            {nextChapter.asks.map((ask) => (
              <li key={ask.title} className="border-t border-hm-line pt-4">
                <h3 className="font-display text-2xl text-hm-navy">{ask.title}</h3>
                <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{ask.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <EnquiryForm />
      </section>
      <ChapterPager href="/get-involved" />
    </>
  );
}
