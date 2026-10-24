import Image from "next/image";
import Link from "next/link";
import { upcomingEvents } from "@content/events";
import { partners } from "@content/partners";
import { programmes } from "@content/programmes";
import { site } from "@content/site";
import { stats } from "@content/stats";
import { accentClass } from "@/components/brand";
import { FadeIn } from "@/components/fade-in";
import { StatsCounter } from "@/components/stats-counter";
import { TestimonialSlider } from "@/components/testimonials";
import { getPosts } from "@/lib/news";

export default function Home() {
  const news = getPosts().slice(0, 3);
  const upcoming = upcomingEvents.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[88svh] bg-hm-blue text-white">
        <Image
          src="/images/hero.jpg"
          alt="A view over Port of Spain from the hills, the cover photograph from the Hearts and Minds Facebook page."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hm-blue via-hm-blue/75 to-hm-blue/35" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 pt-24 pb-12 sm:px-6 sm:pb-16">
          <p className="text-sm font-bold tracking-[0.18em] uppercase">Hearts & Minds Programme</p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight font-extrabold sm:text-4xl md:text-6xl">{site.tagline}</h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved" className={`${accentClass} w-full sm:w-auto`}>
              Get Involved
            </Link>
            <Link href="/programmes" className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold sm:w-auto">
              Our Programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-hm-blue text-white">
        <p className="mx-auto max-w-6xl px-5 py-5 text-center text-sm font-semibold tracking-wide md:px-6 md:text-base">
          Inter Agency Task Force community-based policing
        </p>
      </section>

      <section className="bg-hm-blue-light" aria-label="Impact">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-6">
          <StatsCounter stats={[...stats]} />
        </div>
      </section>

      <FadeIn className="mx-auto max-w-6xl px-5 py-16 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 className="font-display text-2xl font-extrabold text-hm-blue sm:text-3xl md:text-4xl">Programmes</h2>
          <Link href="/programmes" className="text-sm font-bold text-hm-blue underline">
            All programmes
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.slice(0, 3).map((programme) => (
            <Link key={programme.slug} href={`/programmes/${programme.slug}`} className="overflow-hidden rounded-3xl bg-hm-blue-light">
              <Image src={programme.image} alt={programme.imageAlt} width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-hm-blue">{programme.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-hm-muted">{programme.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>

      <section className="bg-hm-blue-light">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <h2 className="font-display text-2xl font-extrabold text-hm-blue sm:text-3xl md:text-4xl">Latest news</h2>
            <Link href="/news" className="text-sm font-bold text-hm-blue underline">
              All stories
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <Image src={post.cover} alt={post.coverAlt} width={1200} height={800} className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-bold tracking-wide text-hm-red uppercase">{post.category}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-hm-blue">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-hm-muted">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2 className="font-display text-2xl font-extrabold text-hm-blue sm:text-3xl md:text-4xl">Upcoming</h2>
          <Link href="/events" className="text-sm font-bold text-hm-blue underline">
            All events
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <article key={event.slug} className="rounded-3xl border border-hm-blue/10 p-5">
              <p className="text-sm font-bold text-hm-red">{event.date}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-hm-blue">{event.name}</h3>
              <p className="mt-2 text-sm text-hm-muted">{event.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white" aria-label="Partners">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-6">
          <h2 className="text-center font-display text-2xl font-bold text-hm-blue">Partners</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partners.map((partner) => (
              <li key={partner.src} className="grid place-items-center rounded-2xl bg-hm-blue-light p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={partner.src} alt={partner.name} className="h-16 w-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-hm-blue-light">
        <FadeIn className="mx-auto max-w-3xl px-5 py-16 md:px-6">
          <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-hm-blue sm:text-3xl">In the community</h2>
          <TestimonialSlider />
        </FadeIn>
      </section>

      <section className="bg-hm-blue text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-6">
          <div>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl md:text-4xl">Come and do the work with us.</h2>
            <p className="mt-3 max-w-xl text-white/85">Volunteer, mentor a young person, or ask Hearts & Minds to bring a programme to your school.</p>
          </div>
          <Link href="/get-involved" className={`${accentClass} w-full md:w-auto`}>
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
