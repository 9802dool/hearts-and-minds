"use client";

import ReactMarkdown from "react-markdown";

export function Markdown({ source }: { source: string }) {
  return (
    <div className="space-y-4 text-lg leading-relaxed break-words text-hm-ink [&_a]:break-words [&_a]:text-hm-blue [&_a]:underline [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-hm-blue [&_img]:h-auto [&_img]:max-w-full [&_pre]:overflow-x-auto [&_ul]:list-disc [&_ul]:pl-5">
      <ReactMarkdown>{source}</ReactMarkdown>
    </div>
  );
}
