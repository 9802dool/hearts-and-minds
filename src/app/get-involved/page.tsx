import type { Metadata } from "next";
import { programmes } from "@content/programmes";
import { site } from "@content/site";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer, mentor, partner, or ask Hearts & Minds to bring a programme to your school or community.",
};

const person = [
  { name: "name", label: "Name", required: true },
  { name: "phone", label: "Phone", required: true },
  { name: "email", label: "Email", type: "email", required: true },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-hm-blue px-5 py-16 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.18em] uppercase">Get involved</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">There is a place for you in this work.</h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Call {site.phoneDisplay} if a form is easier by phone. For emergencies call 999 or 911.
          </p>
        </div>
      </section>
      <section className="bg-hm-blue-light px-5 py-16 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <EnquiryForm
            form="volunteer"
            title="Volunteer"
            submitLabel="Offer to volunteer"
            fields={[
              ...person,
              { name: "interest", label: "Where would you like to help?", required: true },
              { name: "message", label: "Anything we should know?", type: "textarea" },
            ]}
          />
          <EnquiryForm
            form="mentor"
            title="Mentor"
            submitLabel="Offer to mentor"
            fields={[
              ...person,
              { name: "expertise", label: "What can you share with a young person?", required: true },
              { name: "availability", label: "When are you free?", required: true },
            ]}
          />
          <EnquiryForm
            form="partner"
            title="Partner or sponsor"
            submitLabel="Send an enquiry"
            fields={[
              ...person,
              { name: "organisation", label: "Organisation", required: true },
              { name: "message", label: "How would you like to partner?", type: "textarea", required: true },
            ]}
          />
          <div id="request">
            <EnquiryForm
              form="request"
              title="Request a programme"
              submitLabel="Request a visit"
              fields={[
                ...person,
                { name: "organisation", label: "School or community", required: true },
                {
                  name: "programme",
                  label: "Programme",
                  required: true,
                  options: programmes.map((programme) => programme.name),
                },
                { name: "message", label: "Tell us about the group", type: "textarea", required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
