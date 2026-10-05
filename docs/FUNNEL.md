# Aero Noir Academy — funnel & setup guide

## The funnel

```
Traffic (social, SEO, QR, Photobooth/Studios/aeronoir.ai links, camps)
   → aeronoiracademy.com
   → FREE: guide signup  +  free flashcards (flashcards.html)
   → Mailchimp welcome sequence (below)
   → Part 107 Prep (paid)  →  Aero Noir Launch (paid)  →  workshops / camps / coaching
```

Every page on the site funnels into one signup form that writes to Mailchimp with two fields:

| Merge field | Filled with | Use it to |
|---|---|---|
| `INTEREST` | Comma list: `part107-prep, crash-course, business-launch, workshops-camps, photobooth-events, studios-production` | Segment who gets which emails |
| `SOURCE` | UTM values (`utm_source/medium/campaign`), `ref:<name>`, or `referrer:<host>`, else `direct` | See which channel produced each lead |

**Tracking links** (append to any link you share):
`https://aeronoiracademy.com/?utm_source=instagram&utm_medium=bio&utm_campaign=part107-free`
Photobooth/Studios/aeronoir.ai pages should link to the Academy with `?utm_source=photobooth` (etc.) so cross-product traffic is tagged.

## One-time setup checklist

### 1. Mailchimp (follow-up)
1. Audience → **Settings → Audience fields and *|MERGE|* tags** → add two **Text** fields: tag `INTEREST` and tag `SOURCE`.
2. Audience → **Signup forms → Embedded forms** → copy the `action="…"` URL from the generated HTML.
3. Paste it into `assets/config.js` → `mailchimpAction`.
4. Turn on **double opt-in** (recommended) and add your mailing address in Audience → Settings (required in every marketing email).
5. Build segments: `INTEREST contains part107-prep`, `contains crash-course`, etc.
6. Create the automations below (Customer Journeys or Classic Automation → "Signs up for audience").
7. Until step 3 is done, the site falls back to the existing Jotform guide signup, so no leads are lost.

### 2. Payments — recommend Stripe first
- **Stripe (recommended):** Products → create each product → **Payment Links** → paste links into `assets/config.js → checkout`. Turn on email receipts and set the success URL to a thank-you/next-steps page. Stripe Payment Links support one-time and subscription prices.
- **PayPal:** create PayPal checkout links (Business account → Pay links & buttons) and paste them if you want PayPal as the main method, or add them later as a second option on each card.
- **Square:** create Square Online / payment links for in-person or workshop sales. It is a good fit for events and cohort deposits.
- Keep **one** primary checkout per product to avoid reconciliation headaches; add others only where customers ask.
- Product delivery: a static site can't lock paid content. For paid question banks and courses, choose a delivery path before launch (e.g., a course/membership platform, or Stripe + a gated page). Don't put paid content in this public repo.

### 3. Pricing
All prices are placeholders ("Pricing coming soon"). Fill `assets/config.js → pricing` when decided.

### 4. Testimonials (Marcus & Abigail)
Get a short written quote and permission to publish each. Add them to `assets/config.js → testimonials`; the section appears automatically once the list has entries. Do not publish paraphrased or invented quotes.

### 5. Question bank approval
`data/questions.js` has 95 original draft questions (42 free / 53 reserved for paid). Every item is `approved:false`. Review each against the current FAA Remote Pilot study guide and eCFR, then set the flag (or set `APPROVE_ALL=true` once you're done). Set `showUnapprovedQuestions:false` in config to hide any item you haven't approved.
Things to double check before publishing: Remote ID wording, operations-over-people categories, any BVLOS/"Part 108" changes, and the exam format/fee on the FAA site.

### 6. Drone Basics Crash Course (revamp)
The old course source can't be located. The page currently shows it as "Join the waitlist". When you find or re-record it, tell us the platform (Teachable, Kajabi, Podia, YouTube unlisted, etc.) and we'll wire checkout and delivery.

## Mailchimp emails (drafts to paste)

### Welcome sequence — trigger: signs up (all interests)
**Email 1 (immediately) — "Your Top 10 pre-flight guide is here ✈️"**
Hi *|FNAME|*, welcome to Aero Noir Academy. Here's your free guide: [link]. Next, try our free Part 107 flashcards: https://aeronoiracademy.com/flashcards.html. Reply and tell me what you're hoping to do with your drone. I read every one. — [Your name], Aero Noir Academy

**Email 2 (day 2) — "The 5 Part 107 topics people miss most"**
Short tips on airspace/sectional charts, weather (METAR), loading, regulations, and ADM, each with a link to the matching flashcard topic.

**Email 3 (day 5) — "Pass faster: how to study for Part 107"**
A simple study plan: 15 minutes/day, flashcards → quizzes → mock exam; link to flashcards; soft mention of Part 107 Prep.

**Email 4 (day 8) — "Passed or planning to? Here's what's next"**
Introduce Part 107 Prep (or waitlist if not open) and the business path (Kickstart mini guide / Launch).

**Email 5 (day 12) — "Want live help?"**
Workshops and camps → booking Jotform. Invite replies/questions.

### Branches by INTEREST
- `part107-prep`: add a mock-exam reminder (day 10) and a "ready to book your test?" email.
- `crash-course` / `business-launch`: waitlist updates + early-access offer when ready.
- `workshops-camps`: camp dates, booking link.
- `photobooth-events` / `studios-production`: send to a short separate sequence (or tag for manual follow-up) pointing to aeronoirphotobooth.com / the Studios inquiry form. Do not send them Part 107 study content unless they also chose it.

### Post-purchase (from Stripe/PayPal/Square or a Mailchimp tag)
Receipt/access email → day 3 check-in → day 14 review/testimonial request → upsell to the next product.

### Win-back (no opens in 30 days)
"Still planning to fly?" with the free flashcards link and one-click preference options.
