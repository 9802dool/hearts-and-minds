export const site = {
  name: "Hearts & Minds Programme",
  shortName: "HMP",
  title: "Hearts & Minds Programme",
  tagline: "Changing Hearts & Minds To Form Better Communities.",
  description:
    "The Hearts & Minds Programme is a community-based policing initiative of the Inter Agency Task Force in Port of Spain, Trinidad and Tobago.",
  parent: "Inter Agency Task Force",
  phoneDisplay: "(868) 612-2470",
  phoneTel: "+18686122470",
  email: "inspectorsofficejc2@gmail.com",
  facebook: "https://www.facebook.com/Heartsandminds17",
  address: {
    street: "Garden Road, Aranguez South",
    locality: "Port of Spain",
    country: "Trinidad and Tobago",
  },
  mapQuery: "Garden Road, Aranguez South, Port of Spain, Trinidad and Tobago",
  communities: [
    "Beetham Gardens",
    "Laventille",
    "John John",
    "South East Port of Spain",
    "Surrounding areas",
  ],
  nav: [
    { href: "/about", label: "About" },
    { href: "/programmes", label: "Programmes" },
    { href: "/news", label: "News" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ],
  emergency: "For emergencies call 999 / 911. This site is not for reporting crimes in progress.",
} as const;

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
}
