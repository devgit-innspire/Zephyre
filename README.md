# Zephyr Estate @ Dimta Stay — website

Static Astro site for the hilltop estate on Kempty Fall Road, Mussoorie. See `SITE_PLAN.md` for the design rationale.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/ (deploy to Vercel / Netlify / any static host)
```

## Structure

| Path | What |
|---|---|
| `src/data/site.ts` | All content: contact, stays, experiences, seasons, reels, FAQs |
| `src/pages/` | Home, `/stays`, `/stays/[slug]`, `/experiences`, `/gallery`, `/getting-here` |
| `src/components/` | BookingBar, EnquiryDialog, StayCard, Reels, Seasons, Ridge, Img… |
| `src/styles/global.css` | "Mountain Wind" design tokens (deodar / mist / pine night / brass) |
| `src/scripts/main.ts` | Nav, reveals, enquiry → WhatsApp/email, reels, seasons, lightbox, live temp |
| `scripts/build-media.sh` | `media-src/` → responsive AVIF/WebP, video loops and reels in `public/` |

## Adding photos or reels

Drop files into `media-src/photos/*.jpg`, `media-src/reels/*.mp4` or `media-src/video/*.mp4` (git-ignored originals), then run `npm run media`. Reference photos by file name (without extension) in `site.ts`.

## Booking flow

"Check availability" opens a dialog that validates dates, guests, name and phone, then sends a pre-filled message to WhatsApp (or email). No backend is needed. A `generate_lead` event fires if GA4 (`gtag`) is installed.

## Owner to confirm (TODOs in `src/data/site.ts`)

- WhatsApp number (currently the bookings line +91 98100 10818)
- Which photos belong to which stay (best-guess mapping from the shoots)
- Real guest reviews (Google / Booking.com) to add a reviews section
- Logo files (the site uses a typographic wordmark + mountain/wind mark for now)
