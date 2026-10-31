"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@content/site";

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const button = buttonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () => {
      const nodes = panel?.querySelectorAll<HTMLElement>("a[href], button") ?? [];
      return [button, ...nodes].filter((node): node is HTMLElement => Boolean(node));
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuPath(null);
        button?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    panel?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-hm-navy text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/images/logo-mark.webp"
            alt=""
            width={640}
            height={305}
            className="h-10 w-auto shrink-0 sm:h-11"
            style={{ width: "auto" }}
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-base font-medium whitespace-nowrap sm:text-lg">Hearts and Minds</span>
            <span className="hidden truncate text-xs tracking-wide text-white/70 sm:block">Inter Agency Task Force</span>
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/get-involved"
            className="hidden min-h-11 items-center justify-center rounded-full bg-hm-red px-5 text-sm font-semibold text-white hover:bg-hm-red-dark sm:inline-flex"
          >
            Get involved
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setMenuPath(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav aria-label="Primary" className="hidden border-t border-white/10 lg:block">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 sm:px-6">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center border-b-2 px-2 text-sm font-semibold ${
                    active ? "border-hm-red text-white" : "border-transparent text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {open ? (
        <div ref={panelRef} id={menuId} className="min-h-[calc(100dvh-4rem)] border-t border-white/10 bg-hm-navy-2 lg:hidden">
          <nav aria-label="Mobile" className="max-h-[calc(100dvh-4rem)] overflow-y-auto px-4 py-2">
            <ul>
              {site.nav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-12 items-center border-b border-white/10 text-lg font-semibold"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
