import type { Metadata } from "next";
import Link from "next/link";
import { accentClass } from "@/components/brand";
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
      <div className="bg-hm-paper px-5 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/get-involved" className={accentClass}>
            Sponsor, contribute or partner
          </Link>
        </div>
      </div>
      <ChapterPager href="/partners" />
    </>
  );
}
