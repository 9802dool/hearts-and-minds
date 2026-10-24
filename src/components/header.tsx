"use client";

import { useEffect, useState } from "react";
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
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-hm-blue text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="" className="h-12 w-auto shrink-0 md:h-14" />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide md:text-base">Hearts & Minds</span>
            <span className="block text-xs text-white/80">Programme</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm font-semibold lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-1 ${active ? "border-hm-red" : "border-transparent hover:border-white/60"}`}
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
            className="min-h-11 rounded-full px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/15 bg-hm-blue-dark px-4 py-3 lg:hidden">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-lg font-semibold">
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
