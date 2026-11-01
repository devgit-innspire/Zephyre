# SEO & listings: Zephyr Estate @ Dimta Stay

What's built into the site, which keywords we target, and copy you can paste into Google Business Profile, OTAs and Instagram.

> **Before you publish any listing, fix the address.** The site says *Village Bhediyana, Kempty Fall Rd, Mussoorie 248179*, but the Instagram pizza reel says *Bhatoli Village, Mussoorie–Vikasnagar Road*. Google ranks local businesses partly on the **name, address and phone (NAP) being identical everywhere**. Choose one address and use it word for word on the site, Google, Booking.com, MakeMyTrip, Airbnb and Instagram.

---

## 1. Target keywords

Keywords were chosen by search intent, from what a guest would type. Search volumes still need checking in **Google Keyword Planner** (free with a Google Ads account) and, once the site is live, in **Search Console → Performance**.

| Group | Keywords | Main page |
|---|---|---|
| **Primary: pool (our USP)** | resort in Mussoorie with swimming pool · Mussoorie resort with pool · hotel with pool in Mussoorie · pool resort near Kempty Falls | Home |
| **Primary: location** | stay near Kempty Falls · resort on Kempty Fall Road · hotel near Kempty Falls Mussoorie · Mussoorie hilltop resort | Home, Getting here |
| **Room types** | luxury tents in Mussoorie · glamping Mussoorie · cottage stay Mussoorie · family villa Mussoorie · stone hut stay Mussoorie · boutique homestay Mussoorie | Stays + each room page |
| **Experiences** | wood-fired pizza Mussoorie · pizza workshop Mussoorie · pickleball Mussoorie · bonfire stay Mussoorie · stargazing Mussoorie · birthday celebration resort Mussoorie · candlelight dinner Mussoorie | Experiences |
| **Trip type** | weekend getaway from Delhi · family resort Mussoorie · couple stay Mussoorie · group stay / book entire property Mussoorie · hill stay near Dehradun | Home, Stays |
| **Nearby / planning** | things to do near Kempty Falls · places to visit near Mussoorie · how to reach Kempty Falls from Delhi · Delhi to Mussoorie route | Explore, Getting here |
| **Brand** | Zephyr Estate · Zephyr Estate Mussoorie · Zephyr by Dimta · Dimta Stay | All pages |

**Rule of thumb:** each page targets one main keyword group. Don't stuff the same phrase everywhere. The site uses "swimming pool" + "Mussoorie" on the home page and lets the room pages own "luxury tent", "cottage", "villa" and so on.

---

## 2. What's built into the website

| Item | Where |
|---|---|
| Keyword-led **title (≤60 chars) and description (≤160 chars)** on every page | `seo.pages` in `src/data/site.ts`; room pages build theirs automatically |
| **Resort + LodgingBusiness schema** with address, geo, phone, Instagram, images and amenities (pool, kids' pool, wood-fired pizza oven, pickleball, bonfire…) | `src/layouts/Base.astro` |
| **HotelRoom schema** on each room page (photos, size in sq ft, features) | `src/pages/stays/[slug].astro` |
| **FAQPage** (home), **BreadcrumbList** (inner pages), **ItemList** (rooms, nearby places) | page files |
| **sitemap.xml** with photos, **robots.txt** | `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` |
| Full **Open Graph / Twitter cards**, so WhatsApp, Facebook and X shares show photo + title | `Base.astro` |
| Visible keyword copy: hero line *"Resort with a pool in Mussoorie"*, hero and pool text, descriptive **alt text** on gallery photos | `index.astro`, `gallery.astro` |

The `<meta keywords>` tag is deliberately **not** used. Google and Bing ignore it, and it tells competitors your keyword list.

### After the site goes live on the final domain
1. Make sure the live domain matches `site.url` in `src/data/site.ts` (currently `https://www.zephyrbydimta.com`). The canonical tags, sitemap and schema all use it.
2. Add the domain to **Google Search Console** and **Bing Webmaster Tools**, then submit `https://www.zephyrbydimta.com/sitemap.xml`.
3. Test the home page and one room page in Google's **Rich Results Test**.
4. Link the website from Google Business Profile, Instagram bio, Booking.com, MakeMyTrip and Airbnb. These links are the strongest early signals.

---

## 3. Google Business Profile (most important listing)

**Business name:** `Zephyr Estate @ Dimta Stay`. Use the real-world name only. Adding keywords like "Resort with Pool" to the name breaks Google's rules and can get the profile suspended.

**Primary category:** Resort hotel
**Additional categories (pick from Google's list):** Hotel · Cottage rental · Glamping site (if offered in the list) · Pizza restaurant *only if outside guests can order*

**Description (≈720 / 750 characters):**

> Zephyr Estate @ Dimta Stay is a private hilltop resort on Kempty Fall Road, Mussoorie, 11 km from Kempty Falls and about 5.5 hours' drive from Delhi. Its swimming pool and separate kids' pool sit among the pines, something rare in these hills. Choose from just 13 rooms: The Sierra family villa (2 rooms with a lounge and dining), two French rooms with bay windows, three luxury rooms, the Kumaon Cottage, stone huts and luxury tents with solid, fully built washrooms. Join our wood-fired pizza workshop, play pickleball, and end the day with bonfires, open-air movie nights and stargazing. Breakfasts, high teas and lavish dinner spreads are cooked fresh. We also arrange birthday, anniversary and proposal set-ups.

**Attributes / amenities to tick:** Pool · Kids' pool · Wi-Fi · Restaurant / on-site dining · Kid-friendly · Outdoor seating · Room heating. Also tick parking, pet-friendly and accessibility only if true; the site doesn't confirm these yet.

**Photos to upload first** (from `media-src/photos/`): pool-pines, pools-above, pool-night-drinks, cat-sierra-living, cat-imperial-bedroom-1, cat-tent-row, cat-kumaon-exterior, pizza-oven-night, pizza-fresh-board, food-thali-tray, food-poolside-breakfast, bonfire-under-stars, stars-valley, bday-full-setup, pickleball-court. Add the pizza workshop reel as a video. Name files descriptively before uploading (e.g. `zephyr-estate-mussoorie-swimming-pool.jpg`).

**Q&A to post yourself** (from the site FAQ): Is there a swimming pool? · Is it good for kids? · How far is Kempty Falls? · How do we reach from Delhi? · Can we book the whole property? · Do you arrange birthday decor?

**Weekly Google posts (ideas):** pool day photo · pizza workshop reel · weekend bonfire night · seasonal offer · a guest's birthday set-up · "5.5 hours from Delhi" route graphic.

**Reviews:** ask every happy guest for a Google review, and suggest they mention the pool, the pizza and the room they stayed in. Reply to every review and use the location naturally ("Thanks for staying with us in Mussoorie…").

---

## 4. OTA listings (Booking.com, MakeMyTrip / Goibibo, Agoda, Airbnb)

**Property name:** `Zephyr Estate @ Dimta Stay`, the same everywhere.

**Short headline / tagline (≤80 chars):**
> Hilltop resort with a swimming pool near Kempty Falls, Mussoorie

**Airbnb-style title (≤50 chars), one per room type:**
- Family villa with pool access · Mussoorie
- French room with bay window · Kempty Falls
- Luxury tent with private washroom · Mussoorie
- Stone hut in the forest, pool & bonfire
- Kumaon cottage near Kempty Falls, with pool

**Property description (paste and adapt):**
> Set on a forested ridge on Kempty Fall Road, Zephyr Estate is a 13-room hilltop resort 11 km from Kempty Falls and 27 km from Mussoorie Mall Road. The estate has a swimming pool and kids' pool among the pines (rare in this area), a mosaic wood-fired pizza oven with a hands-on pizza workshop, a pickleball court, a kids' play area, bonfire spots, open-air movie nights and clear skies for stargazing. Meals are cooked fresh, from breakfast tables with juices and fruit to dinner spreads of curries, dal, rice, raita and rotis. Stay in The Sierra family villa, French rooms with bay windows, luxury rooms, the Kumaon Cottage, stone huts or luxury tents with solid, fully built washrooms. Reach from Delhi in about 5.5 hours via the Delhi–Dehradun Expressway, Selaqui and Yamuna Pul, without driving through central Dehradun or Mussoorie.

**Facilities to tick:** Outdoor swimming pool · Kids' pool · Restaurant / in-house dining · Free Wi-Fi · Garden · Terrace · BBQ / bonfire · Kids' play area · Pickleball / sports court · Daily housekeeping · Heating.

---

## 5. Instagram (@zephyr_estate_dimtastay)

**Bio (≤150 chars):**
> Hilltop resort with a pool · Kempty Falls, Mussoorie 🌲 Wood-fired pizza · Bonfires · Luxury tents · 5.5 hrs from Delhi ⬇️ Book direct

Add the website link and a **Location** tag on every post. Write alt text for photos (Advanced settings) using the keywords above.

**Hashtags (rotate 8–12 per post):**
`#ZephyrEstate #DimtaStay #Mussoorie #MussoorieDiaries #KemptyFalls #ResortWithPool #MussoorieResort #Uttarakhand #UttarakhandTourism #WeekendGetaway #DelhiGetaway #Glamping #LuxuryTents #WoodFiredPizza #PizzaWorkshop #Pickleball #BonfireNights #Stargazing #HillStation #FamilyVacation`

---

## 6. Still to confirm with the owner (affects listings)
- Final address (Bhediyana vs Bhatoli) and an exact Google Maps pin
- Check-in / check-out times, parking, pet policy, accessibility
- Prices or a "starting from" rate (OTAs and Google Hotels need these)
- Whether outside guests can book the pizza workshop or dining (decides the "Pizza restaurant" category)
- Pickleball equipment provided or not
