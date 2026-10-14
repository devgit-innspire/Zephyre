# Zephyr Estate @ Dimta Stay — Website Plan

_Status: draft for review · 14 Oct 2026_

## 1. What we're selling

| | |
|---|---|
| **Property** | Zephyr Estate @ Dimta Stay. A private hilltop estate with 6 keys: 3 individual cottages, 2 luxury villa tents and a 2-bedroom French duplex |
| **Where** | Village Bhediyana, Kempty Fall Rd, Mussoorie 248179. 27 km from Mussoorie Mall Rd, 11 km from Kempty Falls, 84 km from Jolly Grant Airport, 309 km from Delhi |
| **Existing brand line** | "Stay. Breathe. Belong." / "Elevate your escape." |
| **Guests** | Delhi NCR families and couples on 2N/3D weekend drives. Also small groups who book the whole estate |
| **Main problem with the current site** | It's a brochure with one "Book Now" button that only dials a phone number. There are no prices, no dates, no reasons to trust it (no reviews or photos per room), nothing to make the stay feel real, and the Instagram link is broken |

**Goal:** a visitor should *feel* the hilltop within 5 seconds, understand the stays within 30, and reach "check my dates" within one tap from any point on the page.

## 2. Design direction: "Mountain Wind"

*Zephyr* means a gentle west wind. The whole visual language comes from that idea plus the estate itself. It's built on the ui-ux-pro-max styles "Organic Biophilic" and "Nature Distilled".

**Design elements tied to the property**
- **Ridgeline dividers.** Sections are separated by an SVG trace of the real Garhwal ridgeline seen from the estate, taken from a drone frame, instead of straight lines.
- **Wind and mist.** Mist drifts slowly across the hero and between sections. A wind-line flourish sits under the headings. All of it switches off under `prefers-reduced-motion`.
- **Deodar and pine textures.** Faint pine-needle and wood-grain overlays, matching the wooden ceilings in the Kumaon Cottage and Imperial Tent.
- **Altitude badge.** A small badge in the hero reads "Bhediyana · ~1,700 m · 14°C now", with the temperature from a free weather API. It makes the place feel real.
- **Time-of-day story.** The current site's own copy ("golden mornings → green valleys → dusky evenings") becomes a scroll section whose colour shifts from dawn to night.
- **Seasons switcher.** The Drive already has Winter, December, Feb, Monsoon (Jul) and Valentine's shoots. One toggle swaps the footage between Winter, Spring, Monsoon and Autumn, so guests can picture their own trip.

**Palette.** The design-system tool's default suggestion was a navy SaaS palette, which is wrong for this property, so it's replaced:

| Token | Hex | Use |
|---|---|---|
| `--deodar` | `#2F4A3A` | Primary: headers, links, buttons |
| `--pine-night` | `#1B2620` | Dark sections, footer, text on light |
| `--mist` | `#F5F1E8` | Page background (warm cream, not white) |
| `--stone` | `#8C8F84` | Muted text and borders (only on mist, ≥4.5:1 checked at build) |
| `--valley-sky` | `#B9CCD3` | Secondary tint, monsoon accents |
| `--sunrise-brass` | `#9C5F25` | **Book / CTA only**: white text passes AA |
| `--ember` | `#D98E4A` | Bonfire and night highlights on dark |

**Type:** *Cormorant Garamond* for display (an elegant serif with a quiet luxury feel) and *Manrope* for UI and body text, at 16 px or larger with 1.6 line height. Small-caps tracked labels go on room names and distances.

**Motion:** ui-ux-pro-max motion setting 6/10 ("Standard"), using GSAP ScrollTrigger:
- staggered fade-up reveals of 300–450 ms
- slow image parallax of 10% or less
- hero video loop

Nothing flashy, nothing that blocks scrolling.

## 3. Sitemap

```
/                     Home (the main conversion page)
/stays                All 4 stay types + "Book the Whole Estate"
  /stays/swiss-cottage-tent
  /stays/grand-imperial-tent
  /stays/kumaon-cottage
  /stays/french-duplex
/experiences          Day at Zephyr, nearby (Kempty, Mussoorie, Dhanaulti), 2N/3D itinerary
/gallery              Photos + reels, filter by season/space
/getting-here         Route from Delhi/Dehradun, map, road tips, FAQs
/book                 Enquiry / availability (see §6)
```

## 4. Home page, section by section

1. **Hero.** Full-bleed drone video from the Feb drone shoot: an 8–12 s loop under 4 MB with a poster image. Headline "Stay. Breathe. Belong." with the altitude badge. A floating **booking bar** asks for dates, guests and stay type, with a "Check availability" button.
2. **Arrival story.** "A hilltop where the wind slows down." Two lines of copy plus 3 facts: *Only 6 rooms* · *11 km to Kempty Falls* · *5 hrs from Delhi*.
3. **The Stays.** Four cards, each with:
   - a swipe photo carousel
   - bed, view, heater and wooden-ceiling icons (Lucide SVG, no emoji)
   - "from ₹X / night" if prices are approved
   - a "View & book" button
4. **Book the whole estate.** A wide banner aimed at families, friend groups and small celebrations: *"All 6 rooms. One hilltop. Just yours."*
5. **A day at Zephyr.** A scroll timeline: 6 am sunrise over the valley → breakfast on the lawn → Kempty Falls → golden hour → bonfire and stars. It uses the night OSMO footage.
6. **Seasons switcher** (described in §2).
7. **Experiences.** Bonfire, stargazing, kids' play area, local Garhwali food, day trips. Download the **2N/3D itinerary** (the PDF already exists in Drive).
8. **Moments.** A masonry grid of the best photos plus 3 vertical reels from the influencer content.
9. **Guest love.** **Real** Google, Booking.com and Airbnb reviews with star rating and source. Nothing invented.
10. **Getting here.** A stylised route line, Delhi → Dehradun → Mussoorie → Zephyr, with distances, an embedded map and a "Get directions" link.
11. **FAQ.** Check-in and check-out, food, pets, parking, road conditions in snow and monsoon, cancellations.
12. **Closing CTA.** Full-bleed dusk image with "Your hilltop is waiting" and a "Check dates" button.

**Always present on mobile:** a sticky bottom bar with **Call · WhatsApp · Check dates**, every tap target 44 px or larger.

## 5. Room detail page template

- Gallery: a hero image plus a grid, with a lightbox.
- Name, short story and key facts: bed, ground floor or duplex, ensuite, wooden ceiling, balcony or bay window, kids' area access.
- Amenity icons: Wi-Fi, heater, AC, TV, locker, wardrobe, geyser and toiletries.
- A **sticky booking card** on desktop (an inline card on mobile): dates and guests → indicative price → button.
- "Other stays you'll like" and the whole-estate upsell.

## 6. Booking flow (needs a decision)

| Option | Effort | Notes |
|---|---|---|
| **A. Smart enquiry (recommended for launch)** | Low | The booking bar opens a 1-step form, or a WhatsApp chat pre-filled with dates, guests and stay. Leads are emailed to contact@ and saved in a sheet |
| B. Booking engine embed | Medium | eZee / Stayflexi / Cloudbeds for live availability and payment. Needs an account |
| C. Link out to ELIVAAS / OTA | Low | Fast, but loses the direct booking and its margin |

## 7. Media plan (Drive)

The Drive holds **thousands of raw files**: mostly iPhone HEIC/MOV, DJI drone frames, DNG and OSMO clips across about 14 shoot folders. The build will:
- Pick about 40–60 hero photos and 6–8 video clips: drone, day, December, monsoon, night and the rooms.
- Convert HEIC/DNG to **AVIF + WebP** in responsive sizes (640–2400 w), with blur-up placeholders and lazy loading, keeping layout shift (CLS) below 0.1.
- Re-encode video to 1080p H.264 + WebM, 8–12 s muted loops with poster frames, served from a CDN (Cloudinary or Bunny).

## 8. Tech stack (recommended)

- **Astro + Tailwind CSS.** Static, very fast pages with built-in image optimisation, which matters for an image-heavy hospitality site on Indian mobile networks.
- **GSAP** for scroll motion, and **Lucide** icons.
- **Hosting** on Vercel or Netlify, using the existing domain zephyrbydimta.com.
- **SEO:**
  - LodgingBusiness/Hotel structured data
  - per-room meta and OG images
  - local keywords ("luxury villa Mussoorie", "cottage near Kempty Falls")
- **Analytics:** GA4 and Meta Pixel events on the booking actions (dates set, WhatsApp, call, form submitted).

**Quality bar** (ui-ux-pro-max checklist):
- WCAG AA contrast and visible focus rings
- `prefers-reduced-motion` respected
- tested at 375, 768, 1024 and 1440 px
- Lighthouse 90+ for mobile performance

## 9. What I need from you

1. **Prices**: show "from ₹X/night" per stay, or hide them?
2. **Booking method**: A, B or C from §6?
3. **Amenities**: Booking.com lists a **pool, garden and bar** for "ELIVAAS Zephyr". Are those at this estate? What about meals, a bonfire and pets?
4. **Reviews**: a Google Business profile link, or screenshots I can use.
5. **Brand files**: the logo in SVG/PNG, the real Instagram handle, and the WhatsApp number.
6. **Stack and hosting**: OK to go with Astro + Vercel?
