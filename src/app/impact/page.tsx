import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { ImpactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Impact",
  description: "Young people from the programme have earned WCOPA medals and recognition in netball, football and international youth sport.",
};

export default function ImpactPage() {
  return (
    <>
      <ImpactSection heading="h1" />
      <ChapterPager href="/impact" />
    </>
  );
}
