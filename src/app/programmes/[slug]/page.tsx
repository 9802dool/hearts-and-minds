import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { flagships } from "@content/story";

export function generateStaticParams() {
  return flagships.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = flagships.find((entry) => entry.slug === slug);
  return {
    title: item?.name ?? "Initiative",
    description: item ? `${item.name}. ${item.text}` : undefined,
  };
}

export default function LegacyInitiativePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <LegacyInitiative params={params} />
    </Suspense>
  );
}

async function LegacyInitiative({ params }: { params: Promise<{ slug: string }> }): Promise<React.ReactNode> {
  const { slug } = await params;
  if (!flagships.some((entry) => entry.slug === slug)) notFound();
  redirect(`/initiatives#${slug}`);
  return null;
}
