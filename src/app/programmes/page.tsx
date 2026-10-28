import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { FlagshipSection, WorkSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Programmes",
  description: "School visits, youth intervention, partnerships, conflict resolution, sport, culture and community relief.",
};

export default function ProgrammesPage() {
  return (
    <>
      <WorkSection heading="h1" />
      <FlagshipSection />
      <ChapterPager href="/programmes" />
    </>
  );
}
