import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { ReliefSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Relief",
  description: "Medical clinics, prefabricated homes, pandemic hampers, learning devices and Project All agriculture.",
};

export default function ReliefPage() {
  return (
    <>
      <ReliefSection heading="h1" />
      <ChapterPager href="/relief" />
    </>
  );
}
