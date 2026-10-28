import Link from "next/link";
import { accentClass } from "@/components/brand";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-6">
      <h1 className="font-display text-4xl font-medium text-hm-navy">That page is not part of this briefing.</h1>
      <p className="mt-4 text-lg leading-relaxed text-hm-muted">
        The programme is set out from the home page, in the same order as its public briefing.
      </p>
      <Link href="/" className={`${accentClass} mt-8`}>
        Back to the programme
      </Link>
    </section>
  );
}
