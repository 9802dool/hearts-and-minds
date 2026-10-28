import Image from "next/image";
import Link from "next/link";
import type { ActivityStory } from "@content/activity";

export function PageNotes({
  stories,
  mode = "full",
  heading = "From the Hearts & Minds page",
  intro,
  id,
  titleAs = "h3",
  moreHref,
  moreLabel,
}: {
  stories: ActivityStory[];
  mode?: "full" | "brief";
  heading?: string;
  intro?: string;
  id?: string;
  titleAs?: "h2" | "h3";
  moreHref?: string;
  moreLabel?: string;
}) {
  if (stories.length === 0) return null;
  const Title = titleAs;
  const StoryTitle = titleAs === "h2" ? "h3" : "h4";

  return (
    <div id={id} className="mt-14 scroll-mt-32 border-t border-hm-line pt-10">
      <Title className="font-display text-2xl text-hm-navy sm:text-3xl">{heading}</Title>
      {intro ? <p className="mt-3 max-w-3xl leading-relaxed text-pretty text-hm-muted">{intro}</p> : null}
      {mode === "brief" ? (
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {stories.map((story) => {
            const photo = story.photos[0];
            return (
              <li key={story.slug}>
                {photo ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="aspect-[4/3] w-full rounded-md object-cover"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                ) : null}
                <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-hm-red uppercase">
                  {story.dateLabel ?? "Date not stated"}
                </p>
                <StoryTitle className="mt-2 font-display text-2xl text-hm-navy">{story.title}</StoryTitle>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-hm-muted">{story.excerpt}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-8 space-y-14">
          {stories.map((story) => (
            <article key={story.slug}>
              <p className="text-xs font-semibold tracking-[0.16em] text-hm-red uppercase">
                {story.dateLabel ?? "Date not stated"}
              </p>
              <StoryTitle className="mt-2 font-display text-2xl text-hm-navy">{story.title}</StoryTitle>
              <div className="mt-4 max-w-3xl space-y-4 leading-relaxed text-pretty text-hm-muted">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {story.photos.length > 0 ? (
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {story.photos.map((photo) => (
                    <li key={photo.src}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        className="h-auto w-full rounded-md object-cover"
                        sizes="(min-width: 640px) 40vw, 100vw"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      )}
      {moreHref && moreLabel ? (
        <p className="mt-8">
          <Link href={moreHref} className="font-semibold text-hm-navy underline decoration-hm-line underline-offset-4">
            {moreLabel}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
