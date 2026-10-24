import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { programmes } from "@content/programmes";
import { accentClass } from "@/components/brand";

export function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);
  return { title: programme?.name ?? "Programme", description: programme?.summary };
}

export default function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="px-5 py-24 text-hm-muted">Loading the programme…</div>}>
      <ProgrammeDetail params={params} />
    </Suspense>
  );
}

async function ProgrammeDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = programmes.find((item) => item.slug === slug);
  if (!programme) notFound();

  return (
    <article>
      <div className="relative min-h-[46vh] bg-hm-blue">
        <Image src={programme.image} alt={programme.imageAlt} fill priority sizes="100vw" className="object-cover opacity-50" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-6xl flex-col justify-end px-5 py-12 text-white md:px-6">
          <p className="text-sm font-bold tracking-wide uppercase">{programme.community}</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">{programme.name}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl space-y-4 px-5 py-12 text-lg leading-relaxed md:px-6">
        <p className="font-semibold text-hm-blue">{programme.example}</p>
        {programme.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Link href="/get-involved#request" className={`${accentClass} mt-4`}>
          Request this programme
        </Link>
      </div>
    </article>
  );
}
