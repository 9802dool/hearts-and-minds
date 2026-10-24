import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { site, siteUrl } from "@content/site";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/lib/seo";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    default: `${site.name} · IATF`,
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
  icons: { icon: "/logo.jpg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  url,
  email: site.email,
  telephone: site.phoneTel,
  parentOrganization: {
    "@type": "GovernmentOrganization",
    name: site.parent,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: "TT",
  },
  areaServed: site.communities,
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-hm-ink">
        <JsonLd data={structuredData} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-hm-red focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
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
