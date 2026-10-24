import type { Metadata } from "next";
import { gallery } from "@content/gallery";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs and video from Beetham Gardens, Laventille, John John, and South East Port of Spain.",
};

export default function GalleryPage() {
  return (
    <section className="bg-hm-blue-light px-5 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-extrabold text-hm-blue md:text-5xl">Gallery</h1>
        <p className="mt-4 max-w-2xl text-lg text-hm-muted">
          Every photograph here is a labelled placeholder. Swap the files in public/images, and add a YouTube id or Facebook Reel URL in content/gallery.ts for the video card.
        </p>
        <div className="mt-10">
          <GalleryGrid items={[...gallery]} />
        </div>
      </div>
    </section>
  );
}
