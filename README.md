# Hearts & Minds Programme

A mobile-first site for the Hearts & Minds Programme, a community-based policing initiative of the Inter Agency Task Force in Port of Spain.

Tagline: Changing Hearts & Minds To Form Better Communities.

## Run it locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit the words without touching the layout

| What | Where |
| --- | --- |
| Phone, email, address, tagline, navigation | `content/site.ts` |
| Impact numbers | `content/stats.ts` |
| Programmes | `content/programmes.ts` |
| Events | `content/events.ts` |
| Gallery albums and video links | `content/gallery.ts` |
| Officer titles and portraits | `content/leadership.ts` |
| Partner logo slots | `content/partners.ts` |
| Community quotes | `content/testimonials.ts` |
| News stories | `content/news/*.mdx` |

A new story is a new `.md` or `.mdx` file in `content/news`. The file name becomes the URL. Front matter:

```md
---
title: Saturday at the library
date: 2026-10-04
category: Community
excerpt: One sentence for the card.
cover: /images/programme-library.jpg
coverAlt: Describe the photograph.
gallery:
  - src: /images/gallery-beetham-1.jpg
    alt: Describe this photograph.
---

The story itself, in plain paragraphs.
```

Categories: Youth, Sport, Community, Education, Partnerships.

## Photographs

Every file in `public/images` is a labelled placeholder that says REPLACE THIS PHOTO. Drop a real photograph in with the same file name, or change the path in the content file.

`public/logo.svg` is a stand-in heart mark. Replace it with the official Hearts & Minds logo, and keep the same file name so the header and footer pick it up.

Partner slots are `public/images/partner-1.svg` through `partner-4.svg`. Replace them with real logos and set the name in `content/partners.ts`. Do not invent an organisation.

## Numbers and dates

Youths reached and community events start at 0 and show as an em dash until a confirmed figure is written into `content/stats.ts`. Schools partnered is 2 because Laventille Secondary and South East Port of Spain Secondary are the schools named so far. Followers is 2.5K+.

Events dated after 24 October 2026 are samples. `calendarToday` in `content/events.ts` decides which cards are upcoming. Change that date, or the event dates, when the real diary is ready.

Leadership cards have roles and no personal names. Add a name only when you have permission to publish it.

## Forms and email

Forms post to `/api/forms`. They are checked with Zod. A hidden honeypot field drops spam without sending mail.

Email goes out through [Resend](https://resend.com) only when all three are set in `.env.local` (and in the Vercel project):

- `RESEND_API_KEY`
- `EMAIL_FROM` (a sender Resend has verified)
- `CONTACT_TO_EMAIL` (defaults to inspectorsofficejc2@gmail.com)

Until those are set, the form tells the visitor to call (868) 612-2470 or email the office. It does not pretend the message was emailed.

## Deploy on Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel.
3. Add the environment variables above. Set `NEXT_PUBLIC_SITE_URL` to the live address, for example `https://your-domain.example`.
4. Deploy. `npm run build` is the production build.

## Emergencies

The contact page and the footer say: For emergencies call 999 / 911. This site is not for reporting crimes in progress.
