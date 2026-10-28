import type { Metadata, Viewport } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { site, siteUrl } from "@content/site";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/lib/seo";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

const url = siteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.name} · ${site.parent}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.tagline,
    locale: "en_TT",
    type: "website",
    url,
  },
  icons: { icon: "/images/icon-512.png" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: ["HMP", site.publicName, "Hearts & Minds Programme"],
  slogan: site.tagline,
  url,
  description: site.description,
  email: site.email,
  telephone: site.phoneTel,
  foundingDate: "2006-05-15",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.locality}`,
    addressLocality: site.address.city,
    addressCountry: "TT",
  },
  parentOrganization: {
    "@type": "GovernmentOrganization",
    name: site.parent,
  },
  areaServed: [
    { "@type": "Place", name: "East Port of Spain" },
    { "@type": "Place", name: "Laventille" },
  ],
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-hm-paper font-sans text-hm-ink">
        <JsonLd data={structuredData} />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content" className="min-w-0 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
