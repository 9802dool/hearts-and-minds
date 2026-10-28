import type { Metadata } from "next";
import { ChapterPager } from "@/components/pager";
import { YouthSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Youth clubs",
  description: "Three Police Youth Clubs in Beetham Gardens, Beverly Hills and John John give young people safe places to belong and grow.",
};

export default function YouthPage() {
  return (
    <>
      <YouthSection heading="h1" notes="full" />
      <ChapterPager href="/youth" />
    </>
  );
}
