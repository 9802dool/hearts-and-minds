import { site } from "@content/site";

export function ContactDetails() {
  return (
    <address className="space-y-3 text-sm leading-relaxed not-italic">
      <p>
        {site.publicName}
        <span className="mt-1 block">{site.publicIntro}</span>
        <span className="mt-1 block">{site.category}</span>
      </p>
      <p>
        {site.address.street}
        <br />
        {site.address.locality}
        <br />
        {site.address.city}
        <br />
        {site.address.country}
      </p>
      <p>
        <a className="inline-flex min-h-11 items-center font-semibold underline decoration-current/30 underline-offset-4 hover:decoration-current" href={`tel:${site.phoneTel}`}>
          {site.phoneDisplay}
        </a>
      </p>
      <p>
        <a
          className="inline-flex min-h-11 items-center font-semibold break-all underline decoration-current/30 underline-offset-4 hover:decoration-current"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
      </p>
      <p>
        <a
          className="inline-flex min-h-11 items-center font-semibold underline decoration-current/30 underline-offset-4 hover:decoration-current"
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
        >
          {site.publicName} on Facebook
        </a>
        <span className="mt-1 block">About {site.followers} followers</span>
      </p>
    </address>
  );
}
