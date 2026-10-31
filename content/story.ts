export const why = {
  id: "why",
  kicker: "Why we exist",
  title: "The programme was created to bridge the gap between the police and the people.",
  year: "2006",
  origin:
    "Inspector Gordon Walcott initiated Hearts and Minds on 15 May 2006, three years after the Inter Agency Task Force was launched.",
  mission:
    "The work brings citizens and police together in positive ways: saving lives by building communities and breaking down borders.",
  quote: "Bridge the gap",
  communities: "54",
  communitiesLabel: "communities across East Port of Spain and Laventille",
};

export const how = {
  id: "how",
  kicker: "How we work",
  title: "Trust grows when police listen, connect and act with communities.",
  steps: [
    {
      number: "01",
      title: "Listen",
      text: "Understand local needs through school, home and community engagement.",
    },
    {
      number: "02",
      title: "Connect",
      text: "Link young people and families to positive role models, services and opportunities.",
    },
    {
      number: "03",
      title: "Act",
      text: "Deliver practical programmes with trusted partners and community leaders.",
    },
  ],
  with: "Government ministries, corporations, NGOs and NPOs, churches, the business community, and concerned citizens.",
};

export const work = {
  id: "work",
  kicker: "What we do",
  title: "Turn trust into visible community support.",
  items: [
    { number: "01", title: "School visits and lectures" },
    { number: "02", title: "Youth and community intervention" },
    { number: "03", title: "Stakeholder partnerships" },
    { number: "04", title: "Conflict resolution" },
    { number: "05", title: "Sporting initiatives" },
    { number: "06", title: "Cultural and social initiatives" },
    { number: "07", title: "Community relief initiatives" },
  ],
};

export const supportIntents = ["Sponsor", "Contribute", "Partner"] as const;
export const supportFocus = ["Youth", "Sport", "Education", "Relief", "The wider programme"] as const;

export const flagships = [
  {
    slug: "zebapique-productions",
    number: "01",
    name: "Zebapique Productions",
    text: "A sixteen-year partnership gives children a free four-day Carnival experience, with costumes, refreshments and hands-on costume-making.",
  },
  {
    slug: "aspiring-stars",
    number: "02",
    name: "Aspiring Stars of Laventille",
    text: "Honours the top male and female Secondary Entrance Assessment (SEA) students from primary schools in Laventille and the surrounding area, with tokens to support their preparation for secondary school.",
  },
  {
    slug: "christmas-on-the-hill",
    number: "03",
    name: "Christmas on the Hill",
    text: "An annual programme that gives children from East Port of Spain and the surrounding area a chance to experience joy and love during the Christmas season.",
  },
  {
    slug: "spelling-bee",
    number: "04",
    name: "Primary School Spelling Bee",
    text: "An annual spelling competition in primary schools across East Port of Spain and the surrounding area. It promotes literacy and builds cognitive and critical-thinking skills.",
  },
  {
    slug: "primary-school-football",
    number: "05",
    name: "Primary School Football Tournament",
    text: "An annual football competition that brings together primary schools across East Port of Spain and the surrounding area through the discipline of sport.",
  },
  {
    slug: "medical-clinic",
    number: "06",
    name: "Mission to the World Medical Clinic",
    text: "Missionary doctors from Georgia, Covenant Reform Church, and Hearts and Minds provide free medical services in East Port of Spain.",
  },
  {
    slug: "operation-rebuild",
    number: "07",
    name: "Operation Rebuild Homes",
    text: "The Inter Agency Task Force, Hearts and Minds and stakeholders provide prefabricated homes to families who lose their housing through disaster.",
  },
  {
    slug: "pycc",
    number: "08",
    name: "PYCC — Progressive Youths Creating Change",
    text: "Hands-on sessions at South East Port of Spain Secondary combine camp craft, outdoor skills, teamwork and creative problem-solving. They build self-reliance, leadership, positive discipline and etiquette, and they include hospitality training for young people across East Port of Spain and the surrounding area.",
  },
  {
    slug: "fades-and-braids",
    number: "09",
    name: "Fades and Braids",
    text: "A back-to-school clinic on the Brian Lara Promenade provides free haircuts and hairstyles, so students return properly groomed, confident and ready for the new term.",
  },
  {
    slug: "beetham-vibrations",
    number: "10",
    name: "Beetham Vibrations Steel Orchestra",
    text: "Launched in 2022 through a Hearts and Minds partnership, the youth steel orchestra uses pan to build discipline, self-esteem, belonging and pathways through music.",
  },
] as const;

export const flagshipThemes = "Culture, education, confidence, health and housing relief.";

export const education = {
  id: "education",
  kicker: "Education reach",
  title: "The programme maintains a presence across 48 learning institutions.",
  figure: "48",
  figureLabel: "schools and learning centres engaged",
  note: "From early childhood through technical and vocational education.",
  breakdown: [
    { figure: "34", label: "Primary schools" },
    { figure: "05", label: "Secondary schools" },
    { figure: "04", label: "Preschools" },
    { figure: "02", label: "Special schools" },
    { figure: "02", label: "Life centres" },
    { figure: "01", label: "Technical-vocational school" },
  ],
};

export const youth = {
  id: "youth",
  kicker: "Youth development",
  title: "Three Police Youth Clubs give young people safe places to belong and grow.",
  clubs: [
    {
      year: "2016",
      name: "IATF Police Youth Club",
      place: "Beetham Gardens, Joint Community Services Centre",
      activities: ["Netball", "Football", "Basketball", "Music (pan)", "Kendo", "After school"],
    },
    {
      year: "2016",
      name: "Beverly Hills / Block 8",
      place: "Marcano Quarry, Beverly Hills, Laventille",
      activities: ["Stilt training", "Football", "Music (pan)", "Caterpillar Mentorship Camp"],
    },
    {
      year: "1974 / 2016",
      name: "John John Police Youth Club",
      place: "Spree Simon Community Centre",
      activities: ["Dancing", "Drumming", "Kendo", "Pan", "Stilt training", "Netball", "Football"],
    },
  ],
};

export const impact = {
  id: "impact",
  kicker: "Proof of possibility",
  title: "Young people have carried community talent onto national and international stages.",
  figure: "4",
  figureLabel: "WCOPA medals",
  detail: "1 gold, 2 silver and 1 bronze, plus a vocalist scholarship.",
  results: [
    {
      title: "Miami Junior Netball Classic",
      text: "The under-16 female team placed second. The under-21 female team placed first.",
    },
    {
      title: "Port of Spain Netball League",
      text: "First-place finishes and MVP recognition from 2017 to 2019.",
    },
    {
      title: "Footballer's Commissioner's Cup",
      text: "The IATF Police Youth Club team received the Golden Boots award.",
    },
    {
      title: "Barcelona U10 exposure",
      text: "Two Beverly Hills youths joined an international tournament and training experience.",
    },
  ],
};

export const relief = {
  id: "relief",
  kicker: "Relief and resilience",
  title: "Relief initiatives meet families where the need is greatest.",
  figure: "500+",
  figureLabel: "children connected to devices",
  items: [
    {
      title: "Free medical clinics",
      text: "Clinics are held twice a year.",
      href: "/initiatives#medical-clinic",
    },
    {
      title: "Operation Rebuild Homes",
      text: "Prefabricated homes for families after a disaster.",
      href: "/initiatives#operation-rebuild",
    },
    {
      title: "Food and learning access",
      text: "Hampers brought relief during the pandemic, and devices were provided for online learning.",
    },
    {
      title: "Project All agriculture",
      text: "Growing food and livestock creates household resilience and income opportunities.",
    },
  ],
};

export const sport = {
  id: "sport",
  kicker: "Sport as a bridge",
  title: "Sport creates discipline, teamwork and pathways.",
  items: [
    {
      marker: "2019",
      title: "Primary School Football Tournament",
      text: "Schools and communities meet through teamwork, camaraderie and good sportsmanship.",
    },
    {
      marker: "600",
      title: "Children in Kicking for Inclusion",
      text: "Can Bou Play and the US Embassy clinic reached young people across six communities.",
    },
    {
      marker: "Pathways",
      title: "IATF Hearts and Minds Foundation",
      text: "Top-level football training, peer education and life skills open scholarship pathways.",
    },
  ],
  alongside: [
    "Kick it with Karyn",
    "Republic Bank League",
    "Shaka Academy",
    "United Union Academy",
    "Concepts Coaching Clinic",
  ],
};

export const intervention = {
  id: "intervention",
  kicker: "Early intervention",
  title: "The right support can redirect a young person’s future.",
  from: {
    year: "2014",
    text: "CHINS intervention begins with monitoring, mentorship and family support.",
  },
  to: {
    year: "2026",
    text: "The young person excels in the SEA and earns her first-choice secondary school.",
  },
  items: [
    {
      title: "School Suspension Programme",
      text: "Mentoring and specialist lectures support students from four secondary schools.",
    },
    {
      title: "School and home intervention",
      text: "Lectures and family meetings address attendance, behaviour, safety and responsibility.",
    },
    {
      title: "Parenting Programme",
      text: "Parents build practical skills in supervision, discipline, love and self-esteem.",
    },
  ],
};

export const community = {
  id: "community",
  kicker: "A place in the community",
  title: "The Beetham Gardens centre keeps support close to home.",
  mark: "JCSC",
  name: "Joint Community Services Centre",
  place: "Beetham Gardens",
  services: [
    {
      number: "01",
      title: "NALIS library",
      text: "Reading and academic development in the community. NALIS is the National Library and Information System.",
    },
    {
      number: "02",
      title: "Homework centre",
      text: "Support for children aged five to fourteen.",
    },
    {
      number: "03",
      title: "Mentorship",
      text: "Ongoing guidance, after-school support and role models.",
    },
    {
      number: "04",
      title: "Lectures and outreach",
      text: "A trusted base for youth and community engagement.",
    },
  ],
};

export const partners = {
  id: "partners",
  kicker: "Partnership and sustainability",
  title: "Partnership powers the work. Sustainable funding remains the constraint.",
  kinds: [
    "Government ministries",
    "Corporations",
    "NGOs and NPOs",
    "Churches",
    "Business community",
    "Concerned citizens",
  ],
  named:
    "The Rotary Club of Central Port of Spain is a partner of Beetham Vibrations Steel Orchestra, Aspiring Stars of Laventille and the Primary School Spelling Bee.",
  funding:
    "The programme has no dedicated funding. Projects rely on officers’ personal contributions, internal fundraising and stakeholder sponsorship.",
};

export const nextChapter = {
  id: "next",
  kicker: "The next chapter",
  title: "Help us turn trust into safer, stronger communities.",
  asks: [
    { title: "Sponsor", text: "A youth, sport, education or relief initiative." },
    { title: "Contribute", text: "Equipment, professional services or programme support." },
    { title: "Partner", text: "Work with the programme for sustained community impact." },
  ],
};

export const programmesImpactPath = "/programmes-impact";

export const programmesImpactSections = [
  { id: work.id, label: "What we do", note: "Seven kinds of community support" },
  { id: education.id, label: "Education reach", note: "48 schools and learning centres" },
  { id: youth.id, label: "Youth clubs", note: "Three Police Youth Clubs" },
  { id: impact.id, label: "Proof of possibility", note: "National and international stages" },
  { id: relief.id, label: "Relief and resilience", note: "Health, housing, food and learning" },
  { id: sport.id, label: "Sport as a bridge", note: "Tournaments, clinics and pathways" },
  { id: intervention.id, label: "Early intervention", note: "School, home and parenting support" },
  { id: community.id, label: "Community centre", note: "The Beetham Gardens JCSC" },
  { id: partners.id, label: "Partnership", note: "Who stands with the work, and how it is funded" },
] as const;

export const homeContents = [
  { href: "/about#why", label: "Why we exist", note: "Origin, purpose and the 54 communities" },
  { href: "/about#how", label: "How we work", note: "Listen, connect and act" },
  { href: `${programmesImpactPath}#${work.id}`, label: "What we do", note: "Seven kinds of community support" },
  { href: "/initiatives", label: "Flagship initiatives", note: "Ten programmes, from Carnival to housing" },
  { href: `${programmesImpactPath}#${education.id}`, label: "Education reach", note: "48 schools and learning centres" },
  { href: `${programmesImpactPath}#${youth.id}`, label: "Youth clubs", note: "Three Police Youth Clubs" },
  { href: `${programmesImpactPath}#${impact.id}`, label: "Proof of possibility", note: "National and international stages" },
  { href: `${programmesImpactPath}#${relief.id}`, label: "Relief and resilience", note: "Health, housing, food and learning" },
  { href: `${programmesImpactPath}#${sport.id}`, label: "Sport as a bridge", note: "Tournaments, clinics and pathways" },
  { href: `${programmesImpactPath}#${intervention.id}`, label: "Early intervention", note: "School, home and parenting support" },
  { href: `${programmesImpactPath}#${community.id}`, label: "Community centre", note: "The Beetham Gardens JCSC" },
  { href: `${programmesImpactPath}#${partners.id}`, label: "Partnership", note: "Who stands with the work, and how it is funded" },
  { href: "/get-involved", label: "The next chapter", note: "Sponsor, contribute or partner" },
];
