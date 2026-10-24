import type { Metadata } from "next";
import Image from "next/image";
import { leaders } from "@content/leadership";
import { site } from "@content/site";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About",
  description: "Who the Hearts & Minds Programme is, and how community-based policing works with the Inter Agency Task Force.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-hm-blue px-5 py-16 text-white md:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.18em] uppercase">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold md:text-6xl">Police and community, working together.</h1>
        </div>
      </section>
      <FadeIn className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6">
        <Image
          src="/images/about-community.jpg"
          alt="Residents and Hearts and Minds gathered indoors for a community meeting."
          width={1400}
          height={900}
          className="h-auto w-full rounded-3xl object-cover"
        />
        <div className="space-y-4 text-lg leading-relaxed">
          <h2 className="font-display text-3xl font-bold text-hm-blue">Who we are</h2>
          <p>
            The Hearts & Minds Programme is a nonprofit, community-based policing initiative of the {site.parent} in Port of Spain.
          </p>
          <p>{site.tagline}</p>
        </div>
      </FadeIn>
      <section className="bg-hm-blue-light">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-6">
          <article className="rounded-3xl bg-white p-6">
            <h2 className="font-display text-2xl font-bold text-hm-blue">Mission</h2>
            <p className="mt-3 leading-relaxed">
              To do community-based policing with the people of Port of Spain: young people, schools, and the neighbourhoods the Inter Agency Task Force serves.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-6">
            <h2 className="font-display text-2xl font-bold text-hm-blue">Vision</h2>
            <p className="mt-3 leading-relaxed">{site.tagline}</p>
          </article>
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-5 px-5 py-16 text-lg leading-relaxed md:px-6">
        <h2 className="font-display text-3xl font-bold text-hm-blue">The IATF connection</h2>
        <p>
          Hearts & Minds is an initiative of the Inter Agency Task Force. The programme is how that task force stays in the community between operations: on the field, in the school, and in the library.
        </p>
        <h2 className="pt-4 font-display text-3xl font-bold text-hm-blue">How we work</h2>
        <p>
          Community-based policing here means officers are present with residents, not only passing through. Sport, school leadership, creative workshops, and recognition of young achievers are the rooms where that relationship is built.
        </p>
        <h2 className="pt-4 font-display text-3xl font-bold text-hm-blue">Communities served</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {site.communities.map((community) => (
            <li key={community} className="rounded-2xl bg-hm-blue-light px-4 py-3 font-semibold text-hm-blue">
              {community}
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-hm-blue-light">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6">
          <h2 className="font-display text-3xl font-bold text-hm-blue">Leadership</h2>
          <p className="mt-3 max-w-2xl text-hm-muted">The photographs are from Hearts &amp; Minds activities. Add each officer’s name and portrait in content/leadership.ts when you are ready to publish them.</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <li key={`${leader.role}-${leader.team}`} className="overflow-hidden rounded-3xl bg-white">
                <Image src={leader.image} alt={leader.alt} width={800} height={1000} className="aspect-[4/5] w-full object-cover" />
                <div className="p-4">
                  <p className="font-display text-lg font-bold text-hm-blue">{leader.role}</p>
                  <p className="text-sm text-hm-muted">{leader.team}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
