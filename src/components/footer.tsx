import Link from "next/link";
import { site } from "@content/site";

export function Footer() {
  return (
    <footer className="bg-hm-blue-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-xl font-bold">Hearts & Minds Programme</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/75">{site.parent}</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-white/70 uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-white/70 uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.address.street}</li>
            <li>
              {site.address.locality}, {site.address.country}
            </li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="font-semibold hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.facebook} className="hover:underline" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-white/80 md:px-6">{site.emergency}</p>
      </div>
    </footer>
  );
}
