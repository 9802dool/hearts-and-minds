"use client";

import { useEffect, useRef } from "react";

export function PhotoDialog({
  image,
  alt,
  onClose,
}: {
  image: string | null;
  alt: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (image && !dialog.open) dialog.showModal();
    if (!image && dialog.open) dialog.close();
  }, [image]);

  return (
    <dialog ref={ref} className="bg-transparent" onClose={onClose} onClick={onClose}>
      {image ? (
        <div className="relative" onClick={(event) => event.stopPropagation()}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} className="max-h-[85vh] w-full rounded-2xl object-contain" />
          <button className="absolute top-3 right-3 min-h-11 rounded-full bg-white px-4 text-sm font-bold text-hm-blue" onClick={onClose}>
            Close
          </button>
        </div>
      ) : null}
    </dialog>
  );
}
