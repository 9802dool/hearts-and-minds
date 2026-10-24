export const albums = [
  "Beetham Gardens",
  "Laventille",
  "John John",
  "South East Port of Spain",
] as const;

export type Album = (typeof albums)[number];

export type GalleryItem = {
  id: string;
  album: Album;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  youtubeId?: string;
  facebookUrl?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "beetham-library",
    album: "Beetham Gardens",
    title: "Community library workshop",
    image: "/images/gallery-beetham-1.jpg",
    alt: "Placeholder for a Beetham Gardens Community Library photograph.",
    width: 1000,
    height: 1300,
  },
  {
    id: "beetham-visit",
    album: "Beetham Gardens",
    title: "In the community",
    image: "/images/gallery-beetham-2.jpg",
    alt: "Placeholder for a Beetham Gardens community photograph.",
    width: 1200,
    height: 900,
  },
  {
    id: "beetham-reel",
    album: "Beetham Gardens",
    title: "Add a Reel or YouTube video",
    image: "/images/programme-library.jpg",
    alt: "Placeholder still for a video. Add a Facebook Reel or YouTube link in content/gallery.ts.",
    width: 1200,
    height: 900,
    youtubeId: "",
    facebookUrl: "",
  },
  {
    id: "laventille-sport",
    album: "Laventille",
    title: "U-16 training",
    image: "/images/gallery-laventille-1.jpg",
    alt: "Placeholder for Laventille football training.",
    width: 1000,
    height: 1200,
  },
  {
    id: "john-john",
    album: "John John",
    title: "Community engagement",
    image: "/images/gallery-johnjohn-1.jpg",
    alt: "Placeholder for community engagement in John John.",
    width: 1200,
    height: 900,
  },
  {
    id: "sepos",
    album: "South East Port of Spain",
    title: "School leadership",
    image: "/images/gallery-sepos-1.jpg",
    alt: "Placeholder for a South East Port of Spain Secondary session.",
    width: 1000,
    height: 1300,
  },
];
