import type { Metadata } from "next";
import { site } from "@content/site";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Garden Road, Aranguez South. Call (868) 612-2470 or write to the Inspector’s office.",
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-hm-red px-5 py-6 text-white md:px-6">
        <p className="mx-auto max-w-6xl text-lg font-bold">{site.emergency}</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-6 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-hm-blue sm:text-4xl md:text-5xl">Contact</h1>
          <address className="mt-6 space-y-3 text-lg not-italic">
            <p>
              {site.address.street}
              <br />
              {site.address.locality}
              <br />
              {site.address.country}
            </p>
            <p>
              <a className="font-bold text-hm-blue underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="font-semibold break-all text-hm-blue underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="font-semibold text-hm-blue underline" href={site.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </p>
          </address>
          <iframe
            title="Map of Garden Road, Aranguez South, Port of Spain"
            src={mapSrc}
            className="mt-8 aspect-[4/3] w-full rounded-3xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <EnquiryForm
          form="contact"
          title="Write to us"
          submitLabel="Send message"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Phone", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "subject",
              label: "Subject",
              required: true,
              options: ["Volunteer", "Mentoring", "Partnership", "Request a programme", "General", "Other"],
            },
            { name: "message", label: "Message", type: "textarea", required: true },
          ]}
        />
      </section>
    </>
  );
}
