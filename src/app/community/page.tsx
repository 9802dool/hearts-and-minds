import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { CommunitySection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Community centre",
  description: "The Joint Community Services Centre in Beetham Gardens offers a NALIS library, homework support, mentorship and outreach.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunitySection heading="h1" />
      <ChapterPager href="/community" />
    </>
  );
}
