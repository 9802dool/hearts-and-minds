import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { InterventionSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Early intervention",
  description: "CHINS support, the School Suspension Programme, school and home intervention, and a parenting programme.",
};

export default function InterventionPage() {
  return (
    <>
      <InterventionSection heading="h1" />
      <ChapterPager href="/intervention" />
    </>
  );
}
