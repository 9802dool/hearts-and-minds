# Hearts and Minds Programme

A public site for the Hearts and Minds Programme, the community policing initiative of the Inter Agency Task Force in East Port of Spain and Laventille.

The pages follow the programme briefing, in this order:

1. Why we exist
2. How we work
3. What we do, including ten flagship initiatives
4. Education reach
5. Police Youth Clubs
6. Proof of possibility
7. Relief and resilience
8. Sport
9. Early intervention
10. The Beetham Gardens Joint Community Services Centre
11. Partnership and funding
12. How to sponsor, contribute or partner

Copy stays with that briefing. Do not add statistics, names or contact details that are not in it.

## Run it locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit the words

| What | Where |
| --- | --- |
| Name, tagline, navigation, Facebook page | `content/site.ts` |
| Section copy | `content/story.ts` |

## Photographs

`public/images/east-port-of-spain.webp` is the hillside photograph from the briefing cover. `public/images/logo-mark.webp` is the programme mark from the same deck, with the black surround removed. `public/images/icon-512.png` is the mark on a dark tile, used as the site icon.

## Forms and email

The get-involved form posts to `/api/forms` and is checked with Zod. A hidden field drops spam without sending mail.

Email goes out through [Resend](https://resend.com) only when all three are set:

- `RESEND_API_KEY`
- `EMAIL_FROM` (a sender Resend has verified)
- `CONTACT_TO_EMAIL` (the programme inbox)

Until those are set, the form says so and points visitors to the public Facebook page. It does not pretend the message was emailed.

## Emergencies

The footer and the form say: in an emergency, call 999 or 911. This site is not for reporting a crime in progress.
