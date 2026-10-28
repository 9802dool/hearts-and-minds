export type ActivityPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ActivityStory = {
  slug: string;
  /** ISO date when the page gave one. Null when no date was published. */
  date: string | null;
  dateLabel: string | null;
  title: string;
  excerpt: string;
  paragraphs: string[];
  photos: ActivityPhoto[];
};

export const recommendation = {
  quote: "Great work they do in the community of East Port of Spain.",
  name: "Terrence D McPherson",
  detail: "Public recommendation of Hearts & Minds",
} as const;

export const stories: ActivityStory[] = [
  {
    slug: "youth-empowerment-graduation",
    date: "2026-10-24",
    dateLabel: "24 October 2026",
    title: "First cohort graduates from the Youth Empowerment and Development Programme",
    excerpt:
      "PYCC members and young people from Highlanders Steel Orchestra completed a twelve-week programme and graduated at the US American Center.",
    paragraphs: [
      "On 24 October 2026, the first cohort of the Youth Empowerment and Development Programme graduated at the US American Center, Sweet Briar Place, St. Clair. Among the graduates were members of Progressive Youths Creating Change (PYCC), a youth initiative of the Inter Agency Task Force Hearts and Minds Programme, together with young people from Highlanders Steel Orchestra.",
      "The programme ran for twelve weeks at the Highlanders pan yard in Laventille and built life, leadership, and personal development skills. It was funded by the U.S. Embassy Port of Spain and facilitated by programme coordinators Jehoshua Williams and Giovanni Toussaint. Andrea Stanford, Public Affairs Officer at the U.S. Embassy Port of Spain, spoke to the graduates about leadership and community impact.",
      "Photographs from the day show officers and young people standing together with heads bowed, and a speaker at a United States Department of State lectern between the United States flag and the flag of Trinidad and Tobago.",
    ],
    photos: [
      {
        src: "/images/activity/graduation-gathering.webp",
        alt: "Officers in uniform and young people in white shirts stand with their heads bowed in a meeting room at the Youth Empowerment and Development Programme graduation.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/activity/graduation-podium.webp",
        alt: "A young man speaks at a United States Department of State lectern, with the United States flag and the flag of Trinidad and Tobago behind him.",
        width: 1600,
        height: 1280,
      },
    ],
  },
  {
    slug: "community-engagement-john-john",
    date: "2026-09",
    dateLabel: "Late September 2026",
    title: "Community engagement in John John, Laventille and environs",
    excerpt:
      "During Operation Stand Ready, officers walked through John John with residents. Hearts and Minds joined the Port of Spain community-policing effort.",
    paragraphs: [
      "In late September 2026, the Port of Spain Division Community-Oriented Policing Section led a community walk through John John, Laventille and the surrounding area. A specific day was not given.",
      "The Inter Agency Task Force, headed by Senior Superintendent Ramnarine, took part. The Hearts and Minds Programme was led by Woman Sergeant Marcano-Phillip. Also on the walk were Superintendent Ramdeen and the Besson Street police operational team, Ag. Superintendent Rampartap of Discipline and PMAS, and officers from Woodbrook and St. Clair Police Stations.",
      "The photographs show the kind of conversation the walk was for: an officer seated on a step with a resident, and officers speaking with a resident on a street in a hillside community.",
    ],
    photos: [
      {
        src: "/images/activity/engagement-doorstep.webp",
        alt: "An officer in khaki uniform sits on a step and talks with a resident during community engagement.",
        width: 1600,
        height: 1280,
      },
      {
        src: "/images/activity/engagement-street.webp",
        alt: "Two officers talk with a resident on a residential street, with hillside houses behind them.",
        width: 1600,
        height: 1280,
      },
    ],
  },
  {
    slug: "pycc-south-east",
    date: null,
    dateLabel: null,
    title: "PYCC builds skills and leadership at South East Port of Spain Secondary",
    excerpt:
      "PC Mc Pherson and WPC Mottley-Allsop led a session in camp craft, teamwork and creative problem-solving. No date was given.",
    paragraphs: [
      "PYCC, led by PC Mc Pherson and WPC Mottley-Allsop of the IATF Hearts and Minds Programme, hosted a session at South East Port of Spain Secondary School. The page did not give a date.",
      "The session covered camp craft and outdoor skills, team-building and creative problem-solving, in support of self-reliance, leadership and positive discipline.",
      "Photographs from the session show the group inside the school hall, where the wall crest reads S.E.P.O.S. Young people and officers stand in a circle, work through a floor exercise, and look over a clipboard together. An officer’s shirt reads Mc Pherson.",
    ],
    photos: [
      {
        src: "/images/activity/pycc-circle.webp",
        alt: "Young people and officers stand in a circle holding hands in a school hall. The officer nearest the camera wears a shirt reading Mc Pherson.",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/activity/pycc-drill.webp",
        alt: "Young people hold a hands-and-knees exercise on a hall floor while an officer in a Mc Pherson shirt and two women look on.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/activity/pycc-clipboard.webp",
        alt: "In a school hall marked S.E.P.O.S., two young women and two officers look at a clipboard. One shirt refers to progressive youth and reads “change starts with me.”",
        width: 1600,
        height: 1225,
      },
    ],
  },
  {
    slug: "fades-and-braids-outings",
    date: null,
    dateLabel: null,
    title: "Fades and Braids, out in the community",
    excerpt:
      "The page reported a visit to Maracas Bay and a strong turnout. The photographs show the haircuts, the banner, and children at play. No dates were given.",
    paragraphs: [
      "Two undated updates on the page are titled “Fades & Braids takes to Maracas Bay!” and “What a phenomenal turnout for Fades & Braids!”",
      "The photographs show the clinic at work. Barbers cut hair beneath a tent in front of a banner that reads IATF Hearts and Minds, Fades and Braids. In another, an officer in a Hearts and Minds shirt cuts a boy’s hair under an outdoor gazebo, with hills behind the gathering. A further photograph from the same set shows children around a bouncy castle on a grassy field.",
      "The posts do not give a date, and the photographs themselves do not label the location as Maracas Bay.",
    ],
    photos: [
      {
        src: "/images/activity/fades-banner.webp",
        alt: "Under a white tent, barbers cut hair in front of a banner that reads IATF Hearts and Minds, Fades and Braids.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/activity/fades-haircut.webp",
        alt: "An officer in a Hearts and Minds shirt cuts a boy’s hair under an outdoor gazebo, with purple balloons and green hills behind them.",
        width: 1600,
        height: 1280,
      },
      {
        src: "/images/activity/fades-play.webp",
        alt: "Children stand around a blue, yellow and red bouncy castle on a grassy field, with houses and hills behind them.",
        width: 1600,
        height: 1280,
      },
    ],
  },
  {
    slug: "empowering-the-next-generation",
    date: null,
    dateLabel: null,
    title: "Empowering the next generation",
    excerpt:
      "An undated post shares a group photograph of women and officers in front of a L.E.A.D. Girls banner.",
    paragraphs: [
      "An undated post on the page is titled “Empowering the Next Generation!”",
      "The photograph shows women and police officers posed on a stage, in front of a banner that reads L.E.A.D. Girls. The post does not give a date or a longer account.",
    ],
    photos: [
      {
        src: "/images/activity/lead-girls.webp",
        alt: "Women and police officers pose on a wooden stage in front of pink and gold drapes and a banner that reads L.E.A.D. Girls.",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    slug: "beetham-st-lucia-delegation",
    date: null,
    dateLabel: null,
    title: "Beetham hosts a St Lucia delegation",
    excerpt: "The page shared that Beetham hosted a delegation from St Lucia. No date or further detail was given.",
    paragraphs: [
      "The Hearts and Minds page shared that Beetham hosted a St Lucia delegation. No date, names or further detail were given with that update.",
    ],
    photos: [],
  },
];

export function storyBySlug(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function storiesBySlug(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const story = storyBySlug(slug);
    return story ? [story] : [];
  });
}

export const youthNotes = storiesBySlug(["empowering-the-next-generation"]);

export const howNotes = storiesBySlug(["community-engagement-john-john"]);

export const communityNotes = storiesBySlug(["beetham-st-lucia-delegation"]);
