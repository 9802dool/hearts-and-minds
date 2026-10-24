"use client";

import ReactMarkdown from "react-markdown";

export function Markdown({ source }: { source: string }) {
  return (
    <div className="space-y-4 text-lg leading-relaxed text-hm-ink [&_a]:text-hm-blue [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-hm-blue [&_ul]:list-disc [&_ul]:pl-5">
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
}
