import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import {
  CommunitySection,
  EducationSection,
  ImpactSection,
  InterventionSection,
  PartnersSection,
  ProgrammesImpactContents,
  ReliefSection,
  SportSection,
  WorkSection,
  YouthSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Programmes & Impact",
  description:
    "School reach, youth clubs, sport, relief, early intervention, the Beetham community centre, measurable impact and programme partners.",
};

export default function ProgrammesImpactPage() {
  return (
    <>
      <header className="bg-hm-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">Programmes &amp; impact</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight font-medium text-balance sm:text-6xl">
            Programmes on the ground, proof of impact, and the partners who sustain the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/85">
            After the ten flagship initiatives, the briefing turns to everyday programmes, youth development, relief, sport,
            intervention, the community centre, and partnership.
          </p>
        </div>
      </header>
      <ProgrammesImpactContents />
      <WorkSection />
      <EducationSection />
      <YouthSection />
      <ImpactSection />
      <ReliefSection />
      <SportSection />
      <InterventionSection />
      <CommunitySection />
      <PartnersSection />
      <ChapterPager href="/programmes-impact" />
    </>
  );
}
