export const site = {
  name: "Hearts and Minds Programme",
  shortName: "HMP",
  title: "Hearts and Minds Programme",
  tagline: "Changing hearts and minds to form better communities.",
  description:
    "The Hearts and Minds Programme is a community policing initiative of the Inter Agency Task Force, working with 54 communities in East Port of Spain and Laventille. It was initiated on 15 May 2006.",
  parent: "Inter Agency Task Force",
  publicName: "Hearts & Minds",
  publicIntro: "Inter Agency Task Force community-based police",
  category: "Nonprofit organization",
  facebook: "https://www.facebook.com/Heartsandminds17",
  followers: "2.5K",
  phoneDisplay: "+1 868-612-2470",
  phoneTel: "+18686122470",
  email: "inspectorsofficejc2@gmail.com",
  address: {
    street: "Garden Road",
    locality: "Aranguez South",
    city: "Port of Spain",
    country: "Trinidad and Tobago",
  },
  initiated: "15 May 2006",
  area: "East Port of Spain and Laventille",
  emergency: "In an emergency, call 999 or 911. This website is not for reporting a crime in progress.",
  nav: [
    { href: "/about", label: "About" },
    { href: "/programmes", label: "Programmes" },
    { href: "/education", label: "Education" },
    { href: "/youth", label: "Youth clubs" },
    { href: "/impact", label: "Impact" },
    { href: "/relief", label: "Relief" },
    { href: "/sport", label: "Sport" },
    { href: "/intervention", label: "Early intervention" },
    { href: "/community", label: "Community centre" },
    { href: "/partners", label: "Partners" },
    { href: "/get-involved", label: "Get involved" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
}
