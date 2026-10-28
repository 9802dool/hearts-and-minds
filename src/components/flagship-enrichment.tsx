import Image from "next/image";
import { flagshipDetail } from "@content/flagship-detail";

export function FlagshipEnrichment({ slug }: { slug: string }) {
  const detail = flagshipDetail(slug);
  if (!detail) return null;

  return (
    <div className="mt-12">
      {detail.intro?.map((paragraph) => (
        <p key={paragraph} className="mt-4 max-w-3xl leading-relaxed text-pretty">
          {paragraph}
        </p>
      ))}
      {detail.highlights.length > 0 ? (
        <>
          <h3 className="mt-10 font-display text-3xl text-hm-navy">{detail.heading ?? "Highlights"}</h3>
          <ol className="mt-6 border-l border-hm-line">
            {detail.highlights.map((item) => (
              <li key={item.when} className="relative pb-8 pl-6 last:pb-0">
                <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-hm-red" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-[0.16em] text-hm-red uppercase">
                  {item.dateTime ? <time dateTime={item.dateTime}>{item.when}</time> : item.when}
                </p>
                <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </>
      ) : null}
      {detail.notes?.map((paragraph) => (
        <p key={paragraph} className="mt-6 max-w-3xl leading-relaxed text-pretty text-hm-muted">
          {paragraph}
        </p>
      ))}
      {detail.photos && detail.photos.length > 0 ? (
        <ul className={detail.photos.length > 1 ? "mt-8 grid gap-4 sm:grid-cols-2" : "mt-8"}>
          {detail.photos.map((photo) => (
            <li key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={
                  detail.photos && detail.photos.length > 1
                    ? "h-auto w-full rounded-md"
                    : "h-auto w-full max-w-xl rounded-md"
                }
                sizes={detail.photos && detail.photos.length > 1 ? "(min-width: 640px) 360px, 100vw" : "(min-width: 640px) 576px, 100vw"}
              />
              {photo.caption ? <p className="mt-2 text-sm leading-relaxed text-hm-muted">{photo.caption}</p> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
