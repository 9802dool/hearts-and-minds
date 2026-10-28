import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { accentClass } from "@/components/brand";
import {
  CloseSection,
  CommunitySection,
  EducationSection,
  FlagshipSection,
  HomeContents,
  HowSection,
  ImpactSection,
  InterventionSection,
  PartnersSection,
  ReliefSection,
  SportSection,
  WhySection,
  WorkSection,
  YouthSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-hm-navy text-white">
        <Image
          src="/images/east-port-of-spain.webp"
          alt="Hillside view over Port of Spain, with dense housing in the foreground and the city skyline beyond."
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hm-navy via-hm-navy/75 to-hm-navy/25" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-5 pt-16 pb-12 sm:px-6 sm:pb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">{site.parent}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] font-medium text-balance sm:text-6xl md:text-7xl">
            Hearts and Minds Programme
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/90 sm:text-xl">
            Community policing in East Port of Spain and Laventille.
          </p>
          <p className="mt-2 text-sm font-semibold tracking-wide text-white/75">Initiated {site.initiated}</p>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#why" className={`${accentClass} w-full sm:w-auto`}>
                Read the briefing
              </a>
              <Link
                href="/get-involved"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold sm:w-auto"
              >
                Support the work
              </Link>
            </div>
            <p>
              <span className="block font-display text-6xl leading-none">54</span>
              <span className="mt-1 block text-sm font-semibold tracking-wide text-white/80">communities</span>
            </p>
          </div>
        </div>
      </section>
      <HomeContents />
      <WhySection />
      <HowSection />
      <WorkSection />
      <FlagshipSection />
      <EducationSection />
      <YouthSection />
      <ImpactSection />
      <ReliefSection />
      <SportSection />
      <InterventionSection />
      <CommunitySection />
      <PartnersSection />
      <CloseSection />
    </>
  );
}
