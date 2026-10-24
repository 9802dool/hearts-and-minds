"use client";

import { useState } from "react";
import Image from "next/image";
import { albums, type GalleryItem } from "@content/gallery";
import { PhotoDialog } from "@/components/photo-dialog";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [album, setAlbum] = useState<(typeof albums)[number] | "All">("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const visible = album === "All" ? items : items.filter((item) => item.album === album);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {(["All", ...albums] as const).map((name) => (
          <button
            key={name}
            className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-bold ${album === name ? "bg-hm-blue text-white" : "bg-white text-hm-blue"}`}
            onClick={() => {
              setAlbum(name);
              setActive(null);
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item) => (
          <button key={item.id} className="mb-4 block w-full overflow-hidden rounded-3xl text-left" aria-label={item.alt} onClick={() => setActive(item)}>
            <Image src={item.image} alt={item.alt} width={item.width} height={item.height} className="h-auto w-full object-cover" />
            <span className="block bg-white px-4 py-3 text-sm font-semibold">
              {item.title}
              {item.youtubeId !== undefined || item.facebookUrl !== undefined ? " · Video" : ""}
            </span>
          </button>
        ))}
      </div>
      <PhotoDialog image={active && !active.youtubeId && !active.facebookUrl ? active.image : null} alt={active?.alt ?? ""} onClose={() => setActive(null)} />
      {active && (active.youtubeId !== undefined || active.facebookUrl !== undefined) ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-hm-blue-dark/80 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-4">
            {active.youtubeId ? (
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={`https://www.youtube.com/embed/${active.youtubeId}`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : active.facebookUrl ? (
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(active.facebookUrl)}&show_text=false`}
                title={active.title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <p className="p-6 text-hm-muted">
                Add a YouTube id or a Facebook Reel URL on this item in <code>content/gallery.ts</code>.
              </p>
            )}
            <button className="mt-3 min-h-11 rounded-full bg-hm-blue px-4 text-sm font-bold text-white" onClick={() => setActive(null)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
