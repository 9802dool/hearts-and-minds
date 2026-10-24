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
    alt: "Tie-dye Saturday at Beetham Gardens Community Library.",
    width: 1000,
    height: 1300,
  },
  {
    id: "beetham-visit",
    album: "Beetham Gardens",
    title: "In the community",
    image: "/images/gallery-beetham-2.jpg",
    alt: "Another moment from tie-dye Saturday at Beetham Gardens.",
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
    alt: "Laventille Secondary U-16 players training on the field.",
    width: 1000,
    height: 1200,
  },
  {
    id: "john-john",
    album: "John John",
    title: "Community engagement",
    image: "/images/gallery-johnjohn-1.jpg",
    alt: "Community engagement in John John during Operation Stand Ready.",
    width: 1200,
    height: 900,
  },
  {
    id: "sepos",
    album: "South East Port of Spain",
    title: "School leadership",
    image: "/images/gallery-sepos-1.jpg",
    alt: "A leadership session at South East Port of Spain Secondary.",
    width: 1000,
    height: 1300,
  },
];
