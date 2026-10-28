import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { HowSection, WhySection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description: "Why the Hearts and Minds Programme exists, and how it listens, connects and acts with communities.",
};

export default function AboutPage() {
  return (
    <>
      <WhySection heading="h1" />
      <HowSection />
      <ChapterPager href="/about" />
    </>
  );
}
