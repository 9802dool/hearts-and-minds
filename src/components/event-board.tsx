"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { CommunityEvent } from "@content/events";
import { EnquiryForm } from "@/components/enquiry-form";
import { formatDate } from "@/lib/dates";

export function EventBoard({ upcoming, past }: { upcoming: CommunityEvent[]; past: CommunityEvent[] }) {
  const [which, setWhich] = useState<"upcoming" | "past">("upcoming");
  const [active, setActive] = useState<CommunityEvent | null>(null);
  const list = which === "upcoming" ? upcoming : past;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Event list">
        {(["upcoming", "past"] as const).map((key) => (
          <button
            key={key}
            className={`min-h-11 rounded-full px-5 text-sm font-bold capitalize ${which === key ? "bg-hm-blue text-white" : "bg-white text-hm-blue"}`}
            onClick={() => setWhich(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {list.length === 0 ? <p className="text-hm-muted">Nothing in this list yet. Add a date in content/events.ts.</p> : null}
        {list.map((event) => (
          <article key={event.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <Image src={event.image} alt="" width={1200} height={800} className="aspect-[16/9] w-full object-cover" />
            <div className="p-5">
              <p className="text-sm font-bold text-hm-red">
                {formatDate(event.date)} · {event.time}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-hm-blue">{event.name}</h2>
              <p className="mt-1 text-sm font-semibold">{event.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-hm-muted">{event.summary}</p>
              {which === "upcoming" ? (
                <button className="mt-4 min-h-11 rounded-full bg-hm-red px-4 text-sm font-bold text-white" onClick={() => setActive(event)}>
                  Register
                </button>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      {active
        ? createPortal(
            <div className="fixed inset-0 z-[80] grid place-items-center bg-hm-blue-dark/70 p-4" role="dialog" aria-modal="true" aria-labelledby="register-title">
              <div className="max-h-[90vh] w-full max-w-lg overflow-auto">
                <EnquiryForm
                  form="register"
                  title={`Register · ${active.name}`}
                  titleId="register-title"
                  submitLabel="Request a place"
                  hidden={{ eventName: active.name, eventDate: active.date }}
                  fields={[
                    { name: "name", label: "Name", required: true },
                    { name: "phone", label: "Phone", required: true },
                    { name: "email", label: "Email", type: "email", required: true },
                  ]}
                />
                <button className="mt-3 min-h-11 rounded-full bg-white px-4 text-sm font-bold text-hm-blue" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}


