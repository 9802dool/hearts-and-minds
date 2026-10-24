"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@content/site";
import { accentClass } from "@/components/brand";

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-hm-blue text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-5 md:h-24 md:px-6">
        <Link href="/" className="flex min-w-0 shrink items-center">
          <Image
            src="/images/logo-nav.png"
            alt="Hearts & Minds Programme"
            width={1699}
            height={1051}
            preload
            className="h-12 w-auto max-w-[58vw] sm:h-16 sm:max-w-none md:h-20"
            style={{ width: "auto" }}
          />
        </Link>
        <nav aria-label="Primary" className="hidden min-w-0 items-center gap-x-4 text-sm font-semibold xl:gap-x-5 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-1 whitespace-nowrap ${active ? "border-hm-red" : "border-transparent hover:border-white/60"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/get-involved" className={`${accentClass} shrink-0 whitespace-nowrap px-4 max-lg:hidden`}>
            Get Involved
          </Link>
          <button
            type="button"
            className="min-h-11 shrink-0 rounded-full px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/15 bg-hm-blue-dark px-4 py-2 sm:max-h-[calc(100dvh-5rem)] lg:hidden"
        >
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center border-b border-white/10 text-lg font-semibold"
                  onClick={() => setMenuPath(null)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
