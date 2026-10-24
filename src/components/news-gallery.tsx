"use client";

import { useState } from "react";
import Image from "next/image";
import type { NewsImage } from "@/lib/news-types";
import { PhotoDialog } from "@/components/photo-dialog";

export function NewsGallery({ images }: { images: NewsImage[] }) {
  const [active, setActive] = useState<NewsImage | null>(null);
  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {images.map((image) => (
          <button key={image.src} className="overflow-hidden rounded-3xl" aria-label={image.alt} onClick={() => setActive(image)}>
            <Image src={image.src} alt={image.alt} width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
          </button>
        ))}
      </div>
      <PhotoDialog image={active?.src ?? null} alt={active?.alt ?? ""} onClose={() => setActive(null)} />
    </>
  );
}
