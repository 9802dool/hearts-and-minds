export const programmes = [
  {
    slug: "youth-sports",
    name: "Youth Sports & Football",
    summary: "Training and match play that give young people a team, a routine, and adults who show up.",
    example: "Laventille Secondary School U-16 football team training.",
    community: "Laventille",
    image: "/images/programme-sports.jpg",
    imageAlt: "The Laventille Secondary U-16 team training with hurdles on the field.",
    body: [
      "Sport is one of the ways the Hearts & Minds Programme meets young people where they already gather.",
      "A current example is training with the Laventille Secondary School U-16 football team. Officers and coaches work with the squad on the field, and the session is as much about showing up for each other as it is about the game.",
    ],
  },
  {
    slug: "school-leadership",
    name: "School Leadership & PYCC",
    summary: "Skills and leadership work inside secondary schools in South East Port of Spain.",
    example: "South East Port of Spain Secondary School skills and leadership.",
    community: "South East Port of Spain",
    image: "/images/programme-leadership.jpg",
    imageAlt: "Students and officers in a circle during a South East Port of Spain Secondary leadership session.",
    body: [
      "Schools are partners, not venues we pass through.",
      "At South East Port of Spain Secondary School, the programme supports skills and leadership sessions, including work with the Police Youth Club. Students practise speaking up, working as a group, and taking responsibility in school.",
    ],
  },
  {
    slug: "community-library",
    name: "Community Library & Creative Workshops",
    summary: "Reading, making, and Saturday workshops in the community library.",
    example: "Tie-dye Saturday at Beetham Gardens Community Library.",
    community: "Beetham Gardens",
    image: "/images/programme-library.jpg",
    imageAlt: "A participant holding up a pink tie-dye shirt from Saturday at Beetham Gardens.",
    body: [
      "The community library is a place to read, make something, and be expected.",
      "Tie-dye Saturday at the Beetham Gardens Community Library is one of those sessions: a simple creative workshop, open to the community, with Hearts & Minds there for the afternoon.",
    ],
  },
  {
    slug: "community-engagement",
    name: "Community Engagement Operations",
    summary: "Officers in the community, talking with residents rather than only passing through.",
    example: "Community engagement in John John, Laventille and environs during Operation Stand Ready.",
    community: "John John and Laventille",
    image: "/images/programme-engagement.jpg",
    imageAlt: "An officer sitting and talking with a resident during community engagement.",
    body: [
      "Community-based policing means the work happens on the block, in the yard, and at the corner, not only from a vehicle.",
      "During Operation Stand Ready, Hearts & Minds and the Inter Agency Task Force carried out community engagement in John John, Laventille and the surrounding area.",
    ],
  },
  {
    slug: "youth-achievement",
    name: "Youth Achievement & Recognition",
    summary: "A public thank-you for young people who are doing the work.",
    example: "Celebrating young achievers from the communities we serve.",
    community: "Port of Spain",
    image: "/images/programme-achievement.jpg",
    imageAlt: "Hearts and Minds Aspiring Stars 2026 trophies ready for young achievers.",
    body: [
      "Recognition tells a young person that the effort was seen.",
      "Hearts & Minds sets aside time to celebrate young achievers from the communities the programme serves. Bring the names, the photos, and the reason. This page is ready for the real roll of honour.",
    ],
  },
  {
    slug: "regional-exchange",
    name: "Regional Exchange",
    summary: "Hosting visitors so communities can show the work, not only hear about it.",
    example: "Hosting the St Lucia delegation at Beetham.",
    community: "Beetham Gardens",
    image: "/images/programme-exchange.jpg",
    imageAlt: "The group gathered at Beetham when Hearts and Minds hosted the St Lucia delegation.",
    body: [
      "The programme also makes room for visitors who want to see community-based policing up close.",
      "One of those visits was hosting a St Lucia delegation at Beetham, so guests could meet the community and see the work in the place it happens.",
    ],
  },
] as const;

export type Programme = (typeof programmes)[number];
