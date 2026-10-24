"use client";

import { useState } from "react";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  return (
    <div className="flex flex-wrap gap-2">
      <a className="min-h-11 rounded-full bg-hm-blue px-4 py-2 text-sm font-semibold text-white" href={facebook} target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a className="min-h-11 rounded-full border border-hm-blue/20 px-4 py-2 text-sm font-semibold" href={whatsapp} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <button
        className="min-h-11 rounded-full border border-hm-blue/20 px-4 py-2 text-sm font-semibold"
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
