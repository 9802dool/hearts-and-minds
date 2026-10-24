export const events = [
  {
    slug: "tie-dye-november",
    name: "Tie-dye Saturday",
    date: "2026-11-07",
    time: "10:00am to 1:00pm",
    location: "Beetham Gardens Community Library",
    summary: "A creative workshop at the community library. Sample date. Replace it when the real Saturday is set.",
    image: "/images/programme-library.jpg",
  },
  {
    slug: "u16-training-november",
    name: "U-16 football training",
    date: "2026-11-14",
    time: "Afternoon session",
    location: "Laventille Secondary School",
    summary: "Training with the Laventille Secondary School U-16 team. Sample date. Replace it with the fixture list.",
    image: "/images/programme-sports.jpg",
  },
  {
    slug: "john-john-walk",
    name: "Community engagement, John John",
    date: "2026-11-21",
    time: "Morning",
    location: "John John, Laventille",
    summary: "Officers and residents together in John John and the surrounding area. Sample date.",
    image: "/images/programme-engagement.jpg",
  },
  {
    slug: "u16-training-october",
    name: "U-16 football training",
    date: "2026-10-18",
    time: "Afternoon session",
    location: "Laventille Secondary School",
    summary: "Training session with the school U-16 team.",
    image: "/images/programme-sports.jpg",
  },
  {
    slug: "tie-dye-october",
    name: "Tie-dye Saturday",
    date: "2026-10-04",
    time: "10:00am to 1:00pm",
    location: "Beetham Gardens Community Library",
    summary: "Creative workshop at the Beetham Gardens Community Library.",
    image: "/images/programme-library.jpg",
  },
  {
    slug: "stand-ready",
    name: "Operation Stand Ready",
    date: "2026-09-26",
    time: "Daytime operation",
    location: "John John, Laventille and environs",
    summary: "Community engagement with residents during Operation Stand Ready.",
    image: "/images/programme-engagement.jpg",
  },
  {
    slug: "st-lucia-visit",
    name: "St Lucia delegation at Beetham",
    date: "2026-09-12",
    time: "Day visit",
    location: "Beetham Gardens",
    summary: "Hearts & Minds hosted the St Lucia delegation in the community.",
    image: "/images/programme-exchange.jpg",
  },
] as const;

export type CommunityEvent = (typeof events)[number];

/** Sample calendar date for this starter site. Move events, or change this date, when the real diary is ready. */
export const calendarToday = "2026-10-24";

export const upcomingEvents = events.filter((event) => event.date >= calendarToday);
export const pastEvents = events.filter((event) => event.date < calendarToday);
