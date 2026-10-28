import Image from "next/image";
import Link from "next/link";
import { site } from "@content/site";
import { ContactDetails } from "@/components/contact-details";

export function Footer() {
  return (
    <footer className="bg-hm-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-mark.webp"
            alt="Hearts and Minds Programme"
            width={640}
            height={305}
            className="h-16 w-auto"
            style={{ width: "auto" }}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/70">
            {site.parent}
            <br />
            Initiated {site.initiated}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">The programme</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">Contact</p>
          <div className="mt-4">
            <ContactDetails />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/75">{site.emergency}</p>
        </div>
      </div>
    </footer>
  );
}
