import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { SportSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Sport",
  description: "Football, Kicking for Inclusion and scholarship pathways that use sport to build discipline and teamwork.",
};

export default function SportPage() {
  return (
    <>
      <SportSection heading="h1" />
      <ChapterPager href="/sport" />
    </>
  );
}
