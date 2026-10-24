"use client";

import { useState } from "react";
import { testimonials } from "@content/testimonials";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  if (!item) return null;

  return (
    <figure className="mx-auto max-w-3xl text-center">
      <blockquote className="font-display text-2xl leading-snug font-semibold text-hm-blue md:text-4xl">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm font-semibold text-hm-muted">{item.credit}</figcaption>
      <div className="mt-6 flex justify-center gap-3">
        <button
          className="min-h-11 rounded-full border border-hm-blue/20 px-4 text-sm font-semibold"
          onClick={() => setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))}
        >
          Previous
        </button>
        <button
          className="min-h-11 rounded-full border border-hm-blue/20 px-4 text-sm font-semibold"
          onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
        >
          Next
        </button>
      </div>
    </figure>
  );
}
