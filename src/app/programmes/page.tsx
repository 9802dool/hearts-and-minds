import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@content/programmes";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Youth sport, school leadership, library workshops, community engagement, recognition, and regional exchange.",
};

export default function ProgrammesPage() {
  return (
    <section className="bg-hm-blue-light px-5 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-extrabold text-hm-blue md:text-5xl">Our programmes</h1>
        <p className="mt-4 max-w-2xl text-lg text-hm-muted">Six ways Hearts & Minds shows up. Open a card for the detail.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programmes.map((programme) => (
            <Link key={programme.slug} href={`/programmes/${programme.slug}`} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <Image src={programme.image} alt={programme.imageAlt} width={1200} height={900} className="aspect-[16/9] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-bold tracking-wide text-hm-red uppercase">{programme.community}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-hm-blue">{programme.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-hm-muted">{programme.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
