export type FlagshipPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type FlagshipHighlight = {
  when: string;
  dateTime?: string;
  text: string;
};

export type FlagshipDetail = {
  slug: string;
  teaser?: string;
  heading?: string;
  intro?: string[];
  highlights: FlagshipHighlight[];
  notes?: string[];
  photos?: FlagshipPhoto[];
};

export const flagshipDetails: FlagshipDetail[] = [
  {
    slug: "zebapique-productions",
    teaser: "Children’s Carnival downtown parade, 14 February 2026.",
    intro: [
      "The Hearts and Minds page records officers with the band at mas camp and on the road.",
    ],
    highlights: [
      {
        when: "24 May 2023",
        dateTime: "2023-05-24",
        text: "In Petit Valley, the 2023 portrayal was “DANCE”.",
      },
      {
        when: "14 January 2024",
        dateTime: "2024-01-14",
        text: "At mas camp, US Ambassador Candace Bond, Minister Stuart Young and Mrs Sharon Clark-Rowley joined the work. IATF Hearts and Minds, led by Superintendent Dave Spence, helped with costume production.",
      },
      {
        when: "14 February 2026",
        dateTime: "2026-02-14",
        text: "Children’s Carnival 2026 Downtown Parade. The programme, led by Woman Police Sergeant Marcano Philip, partnered with Zebapique Productions. Officers were deployed for the safety, security and well-being of participants. Present were DCP (Operations) Suzette Martin, TTPS Carnival 2026 Gold Commander, and ACP Oswain Subero, whom the page calls “the pioneer of this initiative”.",
      },
    ],
    notes: [
      "In 2026 the page also recorded a launch with the Ministry of National Security, IATF Hearts and Minds and Republic Bank. No day was given.",
    ],
    photos: [
      {
        src: "/images/flagships/zebapique-parade.webp",
        alt: "People hold a parade banner that reads Zebapique Productions presents Down Memory Lane, 20 Years of Mas. It names Andrew Alleng as band leader and designer. Carnival costumes are behind them.",
        width: 590,
        height: 369,
      },
    ],
  },
  {
    slug: "aspiring-stars",
    teaser: "6th annual, 17 September 2026: SEA packages for students from 21 primary schools.",
    intro: [
      "The page’s line for the awards is “Yesterday’s learners. Tomorrow’s leaders.” Edition numbers on the page do not line up from year to year. The latest is given as the 6th annual (2026). Earlier editions are given as the 31 students each one recognised.",
    ],
    highlights: [
      {
        when: "2023 edition",
        text: "Posted in January 2024. Thirty-one students were recognised: the top male and female student from each school.",
      },
      {
        when: "2024 edition",
        text: "Posted in March 2025. Thirty-one students were recognised on the same basis.",
      },
      {
        when: "17 September 2026",
        dateTime: "2026-09-17",
        text: "The 6th annual Aspiring Stars of Laventille, under Woman Sergeant Marcano Phillip. Top Secondary Entrance Assessment students from 21 primary schools across East Port of Spain received SEA packages.",
      },
    ],
    notes: [
      "Sponsors of the 2026 edition were the Massy Foundation, NLCB, Achievement Center Limited, Magic Mist, Prestige Holdings, Hyatt Regency, Bmobile Business, Trinidad Orthopedics, DY Services and Trinidad Arthroplasty Services.",
      "Sponsors named across earlier editions include the Rotary Club of Central Port of Spain, Angostura, East Port of Spain Development Co., KIND, the TT Police Sports Club, NLCB and Hyatt Regency.",
    ],
    photos: [
      {
        src: "/images/flagships/aspiring-stars-trophies.webp",
        alt: "Gold trophies on a table. The plaques read Hearts and Minds Programme, Aspiring Stars, 2026.",
        width: 590,
        height: 472,
      },
    ],
  },
  {
    slug: "christmas-on-the-hill",
    teaser: "18 December 2025: more than 250 children at Desperlie Crescent.",
    highlights: [
      {
        when: "23 December 2022",
        dateTime: "2022-12-23",
        text: "At Sogren Trace, Laventille, with the US Embassy, the Ministry of National Security and the TTPS.",
      },
      {
        when: "2023",
        text: "With the US Embassy and the TTPS at Sogren Trace Recreation Ground, Laventille. The page reported “over 2000 kids”.",
      },
      {
        when: "18 December 2025",
        dateTime: "2025-12-18",
        text: "Posted on 8 January 2026. More than 250 children from East Port of Spain gathered at the Desperlie Crescent Youth Development Centre, with Santa, gifts, horseback rides by the TTPS Mounted and Canine Branch, and music by Courts Sound Specialists Steel Orchestra. Guests included Mayor Chinua Alleyne, DCP Suzette Martin, ACP Collis Hazel, SSP Harripersad Ramnarine and ASP Salindra Singh.",
      },
    ],
    notes: [
      "Sponsors named for the December 2025 gathering were Mac Foods, Better Deal Supermarket, Caribbean Chemical, Bmobile Business, Republic Bank, Blue Waters, Kiss Baking, Prestige Holdings, Zebapique Productions, NP, National Canners, First Citizens, Courts Sound Specialists and Ramps Logistics.",
    ],
    photos: [
      {
        src: "/images/flagships/christmas-gifts.webp",
        alt: "An officer in a Hearts and Minds shirt wraps a gift in Christmas paper. A Trinidad and Tobago Police Sports Club sign is on the wall behind her.",
        width: 456,
        height: 590,
      },
    ],
  },
  {
    slug: "spelling-bee",
    teaser: "A July 2026 post: 15 winners at Eastern Girls’ Government Primary School.",
    highlights: [
      {
        when: "Posted 28 January 2023",
        dateTime: "2023-01-28",
        text: "The post described the first annual spelling bee, held with NALIS at NALIS in Port of Spain and sponsored by the Rotary Club of Central Port of Spain and Nigel R Khan Booksellers.",
      },
      {
        when: "Posted 3 July 2026",
        dateTime: "2026-07-03",
        text: "A spelling bee with Eastern Girls’ Government Primary School, for Standards 1 to 5. Fifteen winners received trophies and medals. The post gives the date it was shared, not a separate day for the competition.",
      },
    ],
    photos: [
      {
        src: "/images/flagships/spelling-bee-hall.webp",
        alt: "People sit in a hall with arched windows. Banners for NALIS, Hearts and Minds and Rotary stand around the room.",
        width: 590,
        height: 332,
      },
    ],
  },
  {
    slug: "primary-school-football",
    teaser: "The page records other football work. It does not describe this primary-school tournament.",
    heading: "Related football activity",
    intro: [
      "The Hearts and Minds page has no matching account of this primary-school tournament. The notes below are other football work on the page.",
    ],
    highlights: [
      {
        when: "2025",
        text: "The Hearts and Minds under-15 team won the Kick It with Karyn tournament at Shaw Park, Tobago.",
      },
      {
        when: "23 May 2026",
        dateTime: "2026-05-23",
        text: "The Success-Laventille Champions League was launched, with 15 community teams.",
      },
      {
        when: "July 2026",
        text: "The Hearts and Minds Foundation under-15 team competed in the 5th Monsta Mentality Kids 7v7 Football Tournament at Speyside Recreation Ground, Tobago.",
      },
    ],
    photos: [
      {
        src: "/images/flagships/monsta-mentality.webp",
        alt: "A champions arch on a grass field. The sign reads MonstaMentality 7v7 Kids Football Tournament.",
        width: 590,
        height: 332,
      },
    ],
  },
  {
    slug: "medical-clinic",
    teaser: "26–27 January 2026 clinic at the Beetham Gardens Community Centre.",
    highlights: [
      {
        when: "26–27 January 2026",
        dateTime: "2026-01-26",
        text: "Doctors and nurses from several US states, with Mission To The World, held a two-day clinic at the Beetham Gardens Community Centre for residents across East Port of Spain. It was under the Covenant Reformed Evangelical Church, led by Pastor Ricky Gosyne, and IATF Hearts and Minds, under Woman Sergeant Marcano Phillip.",
      },
    ],
  },
  {
    slug: "pycc",
    teaser: "First cohort graduated on 24 October 2026.",
    highlights: [
      {
        when: "25 April 2026",
        dateTime: "2026-04-25",
        text: "An 11-week Empowerment and Development Programme. PYCC was led by PC Mc Pherson, with WPC Mottley-Allsop as assistant leader. Youth for Change TT ran it. Sponsors were the US Embassy, The Rose Foundation and Highlanders Steel Orchestra.",
      },
      {
        when: "19 July 2026",
        dateTime: "2026-07-19",
        text: "Children’s Spa Day with the Each One Empowerment Foundation.",
      },
      {
        when: "3 October 2026",
        dateTime: "2026-10-03",
        text: "A camp craft session at South East Port of Spain Secondary, led by PC Mc Pherson and WPC Mottley-Allsop.",
      },
      {
        when: "24 October 2026",
        dateTime: "2026-10-24",
        text: "The first cohort of the Youth Empowerment and Development Programme graduated at the US American Center, Sweet Briar Place, St. Clair. Graduates included PYCC members and young people from Highlanders Steel Orchestra. The page described a twelve-week programme at the Highlanders pan yard in Laventille, funded by the U.S. Embassy Port of Spain, with coordinators Jehoshua Williams and Giovanni Toussaint. Andrea Stanford, Public Affairs Officer, spoke to the graduates about leadership and community impact.",
      },
    ],
    notes: ["The page also records a hike up Mt St Catherine. No date was given."],
    photos: [
      {
        src: "/images/activity/graduation-gathering.webp",
        alt: "Officers in uniform and young people in white shirts stand with their heads bowed in a meeting room at the Youth Empowerment and Development Programme graduation.",
        width: 1600,
        height: 900,
        caption: "Graduation at the US American Center, 24 October 2026.",
      },
      {
        src: "/images/activity/graduation-podium.webp",
        alt: "A young man speaks at a United States Department of State lectern, with the United States flag and the flag of Trinidad and Tobago behind him.",
        width: 1600,
        height: 1280,
        caption: "Graduation at the US American Center, 24 October 2026.",
      },
      {
        src: "/images/activity/pycc-circle.webp",
        alt: "Young people and officers stand in a circle holding hands in a school hall. The officer nearest the camera wears a shirt reading Mc Pherson.",
        width: 1600,
        height: 1200,
        caption: "A session at South East Port of Spain Secondary.",
      },
      {
        src: "/images/activity/pycc-drill.webp",
        alt: "Young people hold a hands-and-knees exercise on a hall floor while an officer in a Mc Pherson shirt and two women look on.",
        width: 1600,
        height: 900,
        caption: "A session at South East Port of Spain Secondary.",
      },
      {
        src: "/images/activity/pycc-clipboard.webp",
        alt: "In a school hall marked S.E.P.O.S., two young women and two officers look at a clipboard. One shirt refers to progressive youth and reads “change starts with me.”",
        width: 1600,
        height: 1225,
        caption: "A session at South East Port of Spain Secondary.",
      },
    ],
  },
  {
    slug: "fades-and-braids",
    teaser: "5 September 2026 on the Brian Lara Promenade, with the Royal Bank of Canada.",
    highlights: [
      {
        when: "3 September 2025",
        dateTime: "2025-09-03",
        text: "Independence Square, with the Port of Spain City Police, TTPS Facilities Management and High Performance Unisex Salon.",
      },
      {
        when: "6 September 2025",
        dateTime: "2025-09-06",
        text: "An edition at the Beetham Community Centre.",
      },
      {
        when: "3 January 2026",
        dateTime: "2026-01-03",
        text: "The second edition, on the Brian Lara Promenade, with the TT Defence Force, the Port of Spain City Police and the TTPS Transport Branch.",
      },
      {
        when: "3 September 2026",
        dateTime: "2026-09-03",
        text: "A Maracas Bay edition at Sandboux Resort, Old Bay Road, with Ag. Woman Sergeant Fermine-Garcia of the North Eastern Division.",
      },
      {
        when: "5 September 2026",
        dateTime: "2026-09-05",
        text: "Saturday on Independence Square, the Brian Lara Promenade, with the Royal Bank of Canada. Commissioner of Police Alister Gueverro, DCP Suzette Martin and ASP Singh attended.",
      },
    ],
    photos: [
      {
        src: "/images/activity/fades-banner.webp",
        alt: "Under a white tent, barbers cut hair in front of a banner that reads IATF Hearts and Minds, Fades and Braids.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/flagships/fades-braiding.webp",
        alt: "An officer braids a girl’s hair under a tent, in front of a banner that reads IATF Hearts and Minds, Fades and Braids.",
        width: 456,
        height: 590,
      },
    ],
  },
  {
    slug: "beetham-vibrations",
    teaser: "Partnered with the Rotary Club of Central Port of Spain.",
    intro: [
      "The Hearts and Minds page names the Rotary Club of Central Port of Spain as the partner in this orchestra. It is housed at the Beetham Gardens Community Centre.",
    ],
    highlights: [
      {
        when: "April 2026",
        text: "A bingo fundraiser at St. Mary’s Parish Hall, Tacarigua, with a performance by the orchestra’s A-Team. Retired Police Inspector Charles was honoured as a pioneer and foundation member who helped set up the Rotary partnership. The page did not give a day in April.",
      },
    ],
    photos: [
      {
        src: "/images/flagships/beetham-vibrations-mark.webp",
        alt: "A purple shirt printed with Beetham Vibrations in multicoloured letters, and the words powered by Scotiabank.",
        width: 590,
        height: 332,
      },
    ],
  },
];

export function flagshipDetail(slug: string) {
  return flagshipDetails.find((item) => item.slug === slug);
}
