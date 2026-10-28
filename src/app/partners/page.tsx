import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { PartnersSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Partners",
  description: "Government, companies, NGOs, churches, businesses and citizens power the work. The programme has no dedicated funding.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersSection heading="h1" />
      <ChapterPager href="/partners" />
    </>
  );
}
