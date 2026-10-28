import Link from "next/link";
import { communityNotes, howNotes, recommendation, youthNotes } from "@content/activity";
import {
  community,
  education,
  flagships,
  homeContents,
  how,
  impact,
  intervention,
  partners,
  relief,
  sport,
  why,
  work,
  youth,
} from "@content/story";
import { accentClass } from "@/components/brand";
import { PageNotes } from "@/components/page-notes";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.2em] text-hm-red uppercase">{children}</p>;
}

function Title({
  as,
  id,
  children,
}: {
  as: "h1" | "h2";
  id: string;
  children: React.ReactNode;
}) {
  const className = "mt-3 max-w-4xl font-display text-3xl leading-tight font-medium text-balance text-hm-navy sm:text-4xl md:text-5xl";
  if (as === "h1") {
    return (
      <h1 id={id} className={className}>
        {children}
      </h1>
    );
  }
  return (
    <h2 id={id} className={className}>
      {children}
    </h2>
  );
}

export function HomeContents() {
  return (
    <nav id="briefing" aria-label="Briefing chapters" className="scroll-mt-32 border-b border-hm-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-medium text-hm-navy">The briefing</h2>
        <p className="mt-3 max-w-2xl text-pretty text-hm-muted">
          The programme, in the order it is told: from why it exists to how a person or organisation can stand with it.
          Each chapter is set out on its own page.
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homeContents.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            if (item.href === "/initiatives") {
              return (
                <li key={item.href} className="sm:col-span-2 lg:col-span-3">
                  <div className="rounded-md border border-hm-line px-4 py-4">
                    <p className="text-xs font-semibold tracking-[0.16em] text-hm-red">{number}</p>
                    <h3 className="mt-2 font-display text-xl text-hm-navy">
                      <Link href="/initiatives" className="underline decoration-hm-line underline-offset-4 hover:decoration-hm-navy">
                        {item.label}
                      </Link>
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-hm-muted">{item.note}</p>
                    <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                      {flagships.map((initiative) => (
                        <li key={initiative.slug}>
                          <Link
                            href={`/initiatives#${initiative.slug}`}
                            className="text-sm font-semibold text-hm-navy underline decoration-transparent underline-offset-4 hover:decoration-hm-navy"
                          >
                            <span className="text-hm-red">{initiative.number}</span> {initiative.name}
                          </Link>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-5">
                      <Link href="/initiatives" className={accentClass}>
                        Read the ten initiatives
                      </Link>
                    </p>
                  </div>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link href={item.href} className="block h-full rounded-md border border-hm-line px-4 py-4 hover:border-hm-navy">
                  <span className="text-xs font-semibold tracking-[0.16em] text-hm-red">{number}</span>
                  <span className="mt-2 block font-display text-xl text-hm-navy">{item.label}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-hm-muted">{item.note}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export function WhySection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={why.id} aria-labelledby="why-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_0.8fr] md:py-24">
        <div>
          <Kicker>{why.kicker}</Kicker>
          <Title as={heading} id="why-title">
            {why.title}
          </Title>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">{why.origin}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">{why.mission}</p>
          <figure className="mt-8 max-w-2xl border-l-4 border-hm-red pl-5">
            <blockquote>
              <p className="text-lg leading-relaxed text-pretty">“{recommendation.quote}”</p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-hm-muted">
              <span className="font-semibold text-hm-navy">{recommendation.name}</span>
              <span className="mt-1 block">{recommendation.detail}</span>
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col justify-between gap-8 border-t border-hm-line pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
          <blockquote>
            <p className="font-display text-4xl leading-tight font-medium text-hm-navy">“{why.quote}”</p>
          </blockquote>
          <p>
            <span className="block font-display text-6xl leading-none text-hm-red">{why.communities}</span>
            <span className="mt-2 block text-sm font-semibold text-hm-muted">{why.communitiesLabel}</span>
          </p>
          <p>
            <span className="block font-display text-4xl text-hm-navy">{why.year}</span>
            <span className="mt-1 block text-sm font-semibold text-hm-muted">Year initiated</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export function HowSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={how.id} aria-labelledby="how-title" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{how.kicker}</Kicker>
        <Title as={heading} id="how-title">
          {how.title}
        </Title>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {how.steps.map((step) => (
            <li key={step.number} className="border-t border-hm-navy pt-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-hm-red">{step.number}</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-hm-navy">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-hm-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <PageNotes stories={howNotes} />
      </div>
    </section>
  );
}

export function WorkSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={work.id} aria-labelledby="work-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{work.kicker}</Kicker>
        <Title as={heading} id="work-title">
          {work.title}
        </Title>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2">
          {work.items.map((item) => (
            <li key={item.number} className="flex gap-4 rounded-md bg-white px-4 py-4">
              <span className="font-display text-2xl text-hm-red">{item.number}</span>
              <span className="pt-1 text-lg text-hm-navy">{item.title}</span>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl leading-relaxed text-pretty text-hm-muted">
          <Link href="/initiatives" className="font-semibold text-hm-navy underline decoration-hm-line underline-offset-4">
            The ten flagship initiatives
          </Link>{" "}
          are set out on their own page.
        </p>
      </div>
    </section>
  );
}

export function EducationSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={education.id} aria-labelledby="education-title" className="scroll-mt-32 bg-hm-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">{education.kicker}</p>
        <Title as={heading} id="education-title">
          <span className="text-white">{education.title}</span>
        </Title>
        <p className="mt-6 font-display text-7xl leading-none text-hm-red sm:text-8xl">{education.figure}</p>
        <p className="mt-3 max-w-md text-lg text-white/85">{education.figureLabel}</p>
        <p className="mt-4 max-w-xl text-white/75">{education.note}</p>
        <dl className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {education.breakdown.map((item) => (
            <div key={item.label} className="flex flex-col border-t border-white/20 pt-4">
              <dt className="order-2 mt-1 text-sm text-white/75">{item.label}</dt>
              <dd className="order-1 font-display text-4xl text-white">{item.figure.replace(/^0/, "")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function YouthSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={youth.id} aria-labelledby="youth-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{youth.kicker}</Kicker>
        <Title as={heading} id="youth-title">
          {youth.title}
        </Title>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {youth.clubs.map((club) => (
            <article key={club.name} className="flex flex-col rounded-md bg-white p-5">
              <p className="text-sm font-semibold tracking-wide text-hm-red">{club.year}</p>
              <h3 className="mt-3 font-display text-2xl text-hm-navy">{club.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hm-muted">{club.place}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {club.activities.map((activity) => (
                  <li key={activity} className="rounded-full bg-hm-paper px-3 py-1 text-sm">
                    {activity}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-pretty text-hm-muted">
          <Link href="/initiatives#pycc" className="font-semibold text-hm-navy underline decoration-hm-line underline-offset-4">
            PYCC — Progressive Youths Creating Change
          </Link>{" "}
          is a flagship initiative. Its school sessions and graduation are set out there.
        </p>
        <PageNotes
          stories={youthNotes}
          id="community-page"
          intro="This note from the Hearts & Minds page belongs with the youth work. The post gave no date."
        />
      </div>
    </section>
  );
}

export function ImpactSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={impact.id} aria-labelledby="impact-title" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{impact.kicker}</Kicker>
        <Title as={heading} id="impact-title">
          {impact.title}
        </Title>
        <p className="mt-8 font-display text-7xl leading-none text-hm-red">{impact.figure}</p>
        <p className="mt-2 text-lg font-semibold text-hm-navy">{impact.figureLabel}</p>
        <p className="mt-2 max-w-md text-hm-muted">{impact.detail}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {impact.results.map((result) => (
            <article key={result.title} className="border-t border-hm-line pt-5">
              <h3 className="font-display text-2xl text-hm-navy">{result.title}</h3>
              <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{result.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReliefSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={relief.id} aria-labelledby="relief-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{relief.kicker}</Kicker>
        <Title as={heading} id="relief-title">
          {relief.title}
        </Title>
        <div className="mt-10 grid gap-8 lg:grid-cols-[16rem_1fr]">
          <p className="border-t border-hm-navy pt-4">
            <span className="block font-display text-6xl text-hm-red">{relief.figure}</span>
            <span className="mt-2 block text-sm font-semibold text-hm-muted">{relief.figureLabel}</span>
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {relief.items.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-2xl text-hm-navy">
                  {item.href ? (
                    <Link href={item.href} className="underline decoration-hm-line underline-offset-4 hover:decoration-hm-navy">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SportSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={sport.id} aria-labelledby="sport-title" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{sport.kicker}</Kicker>
        <Title as={heading} id="sport-title">
          {sport.title}
        </Title>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sport.items.map((item) => (
            <article key={item.title} className="rounded-md bg-hm-paper p-5">
              <p className="text-sm font-semibold tracking-wide text-hm-red">{item.marker}</p>
              <h3 className="mt-3 font-display text-2xl text-hm-navy">
                {item.title === "Primary School Football Tournament" ? (
                  <Link
                    href="/initiatives#primary-school-football"
                    className="underline decoration-hm-line underline-offset-4 hover:decoration-hm-navy"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-hm-muted">
          Also named alongside this work: {sport.alongside.join(" · ")}
        </p>
      </div>
    </section>
  );
}

export function InterventionSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={intervention.id} aria-labelledby="intervention-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{intervention.kicker}</Kicker>
        <Title as={heading} id="intervention-title">
          {intervention.title}
        </Title>
        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <article className="rounded-md bg-white p-5">
            <p className="font-display text-4xl text-hm-red">{intervention.from.year}</p>
            <p className="mt-3 leading-relaxed text-pretty">{intervention.from.text}</p>
          </article>
          <p className="hidden items-center justify-center font-display text-3xl text-hm-navy md:flex" aria-hidden="true">
            →
          </p>
          <article className="rounded-md bg-white p-5">
            <p className="font-display text-4xl text-hm-red">{intervention.to.year}</p>
            <p className="mt-3 leading-relaxed text-pretty">{intervention.to.text}</p>
          </article>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {intervention.items.map((item) => (
            <article key={item.title} className="border-t border-hm-navy pt-4">
              <h3 className="font-display text-2xl text-hm-navy">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommunitySection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={community.id} aria-labelledby="community-title" className="scroll-mt-32 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{community.kicker}</Kicker>
        <Title as={heading} id="community-title">
          {community.title}
        </Title>
        <p className="mt-6 text-lg text-hm-navy">
          <span className="font-display text-3xl">{community.mark}</span>
          <span className="mt-1 block">{community.name}</span>
          <span className="block text-hm-muted">{community.place}</span>
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {community.services.map((service) => (
            <article key={service.number} className="rounded-md bg-hm-paper p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-hm-red">{service.number}</p>
              <h3 className="mt-3 font-display text-2xl text-hm-navy">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-pretty text-hm-muted">{service.text}</p>
            </article>
          ))}
        </div>
        <PageNotes stories={communityNotes} />
      </div>
    </section>
  );
}

export function PartnersSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id={partners.id} aria-labelledby="partners-title" className="scroll-mt-32 bg-hm-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <Kicker>{partners.kicker}</Kicker>
        <Title as={heading} id="partners-title">
          {partners.title}
        </Title>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partners.kinds.map((kind) => (
            <li key={kind} className="rounded-md bg-white px-4 py-4 text-lg text-hm-navy">
              {kind}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-pretty">{partners.named}</p>
        <p className="mt-6 max-w-3xl border-l-4 border-hm-red pl-5 text-lg leading-relaxed text-pretty">{partners.funding}</p>
      </div>
    </section>
  );
}
