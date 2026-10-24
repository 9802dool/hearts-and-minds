import type { Metadata } from "next";
import { pastEvents, upcomingEvents } from "@content/events";
import { site, siteUrl } from "@content/site";
import { EventBoard } from "@/components/event-board";
import { JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past Hearts & Minds community events. Dates marked as samples should be replaced before you publish a real diary.",
};

export default function EventsPage() {
  const structured = upcomingEvents.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port of Spain",
        addressCountry: "TT",
      },
    },
    organizer: {
      "@type": "NGO",
      name: site.name,
      url: siteUrl(),
    },
    description: event.summary,
  }));

  return (
    <section className="bg-hm-blue-light px-5 py-16 md:px-6">
      <JsonLd data={structured} />
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-extrabold text-hm-blue md:text-5xl">Events</h1>
        <p className="mt-4 max-w-2xl text-lg text-hm-muted">
          Future dates on this starter calendar are samples. Register sends a request to the programme office.
        </p>
        <div className="mt-10">
          <EventBoard upcoming={[...upcomingEvents]} past={[...pastEvents]} />
        </div>
      </div>
    </section>
  );
}
