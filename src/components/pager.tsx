import Link from "next/link";
import { site } from "@content/site";

export function ChapterPager({ href }: { href: string }) {
  const index = site.nav.findIndex((item) => item.href === href);
  const prev = index > 0 ? site.nav[index - 1] : undefined;
  const next = index >= 0 ? site.nav[index + 1] : undefined;

  return (
    <nav aria-label="Continue through the programme" className="border-t border-hm-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-3 px-5 py-8 sm:grid-cols-2 sm:px-6">
        {prev ? (
          <Link href={prev.href} className="rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy">
            <span className="block text-xs font-semibold tracking-[0.16em] text-hm-muted uppercase">Previous</span>
            <span className="mt-1 block font-display text-xl text-hm-navy">{prev.label}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={next.href} className="rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy sm:text-right">
            <span className="block text-xs font-semibold tracking-[0.16em] text-hm-muted uppercase">Next</span>
            <span className="mt-1 block font-display text-xl text-hm-navy">{next.label}</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
