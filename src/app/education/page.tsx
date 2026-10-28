import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { EducationSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Education",
  description: "Hearts and Minds is present across 48 schools and learning centres, from early childhood through technical and vocational education.",
};

export default function EducationPage() {
  return (
    <>
      <EducationSection heading="h1" />
      <ChapterPager href="/education" />
    </>
  );
}
