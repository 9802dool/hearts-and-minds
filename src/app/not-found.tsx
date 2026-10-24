import Link from "next/link";
import { accentClass } from "@/components/brand";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 md:px-6">
      <h1 className="font-display text-4xl font-extrabold text-hm-blue">That page is not on the site.</h1>
      <p className="mt-4 text-lg text-hm-muted">Head back to the programme home, or call the office if you were looking for something specific.</p>
      <Link href="/" className={`${accentClass} mt-8`}>
        Home
      </Link>
    </section>
  );
}
