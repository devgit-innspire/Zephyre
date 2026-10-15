// Single source of truth for property content.
// Facts come from zephyrbydimta.com and the shoot media; anything marked TODO needs owner confirmation.

export const site = {
  name: 'Zephyr Estate',
  byline: '@ Dimta Stay',
  tagline: 'Stay. Breathe. Belong.',
  url: 'https://www.zephyrbydimta.com',
  address: 'Village Bhediyana, Kempty Fall Rd, Mussoorie, Uttarakhand 248179',
  mapsUrl: 'https://maps.google.com/?q=Zephyr+Estate+Dimta+Stay+Kempty+Fall+Road+Mussoorie',
  mapEmbed:
    'https://maps.google.com/maps?q=Kempty%20Fall%20Road%20Bhediyana%20Mussoorie&z=12&output=embed',
  // Approximate coordinates for the live-weather chip
  geo: { lat: 30.49, lon: 78.0 },
  email: 'contact@zephyrbydimta.com',
  phone: '+919810010818',
  phoneDisplay: '+91 98100 10818',
  salesPhone: '+919818736764',
  salesPhoneDisplay: '+91 98187 36764',
  // TODO(owner): confirm this number is on WhatsApp
  whatsapp: '919810010818',
  // TODO(owner): replace with the real Instagram handle
  instagram: 'https://www.instagram.com/',
};

export const distances = [
  { place: 'Kempty Falls', km: 11 },
  { place: 'Mussoorie Mall Road', km: 27 },
  { place: 'Vikas Nagar', km: 43 },
  { place: 'Jolly Grant Airport', km: 84 },
  { place: 'Delhi', km: 309 },
];

export const catalogueUrl = 'https://wa.me/c/919810010818';

export type Category = { key: string; label: string; blurb: string };
export const categories: Category[] = [
  { key: 'villa', label: 'Villa', blurb: 'Space for the whole family, with a lounge and dining of your own.' },
  { key: 'french', label: 'French Rooms', blurb: 'Two characterful rooms, one in stone, one in timber.' },
  { key: 'signature', label: 'Cottages & Signature Rooms', blurb: 'Stone, timber and quiet corners of the estate.' },
  { key: 'hut', label: 'Classic Huts', blurb: 'Cosy stone huts with swings and the forest at the door.' },
  { key: 'tent', label: 'Tents', blurb: 'Canvas under the trees, with proper beds and ensuites.' },
];

export type Stay = {
  slug: string;
  name: string;
  category: Category['key'];
  kind: string;
  /** How many rooms/keys this type accounts for (13 in total) */
  units: number;
  unitLabel: string;
  short: string;
  story: string;
  cover: string;
  gallery: string[];
  features: string[];
  featured?: boolean;
};

// Common comforts; TODO(owner): confirm per room type
const comforts = ['Ensuite bathroom', 'Heater for cool nights', 'Wi-Fi', 'Daily housekeeping'];

// Room list from the owner (13 rooms). Photo choices are best matches from the shoots. TODO(owner): confirm.
export const stays: Stay[] = [
  {
    slug: 'the-sierra', name: 'The Sierra', category: 'villa', kind: '2-bedroom villa', units: 2, unitLabel: '2 bedrooms',
    short: 'Two bedrooms with a lounge and a dining area. A private home on the ridge.',
    story: 'The Sierra is made for families and friends who want to be together without being on top of each other. Two bedrooms, a glass-walled lounge with deep sofas under a timber ceiling, and a dining area of your own for long breakfasts and late card games.',
    cover: 'sierra-lounge', gallery: ['sierra-lounge', 'sierra-dining', 'duplex-lounge', 'room-canopy-kantha', 'room-garden-door'],
    features: ['2 bedrooms', 'Private lounge area', 'Private dining area', ...comforts], featured: true,
  },
  {
    slug: 'french-stoneva', name: 'The French Stoneva', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room',
    short: 'River-stone walls, a four-poster bed and old-world French charm.',
    story: 'Stoneva wears its stone proudly: textured walls, a carved four-poster draped in rich fabric, and warm lamplight for slow evenings. A romantic room with a rustic soul.',
    cover: 'room-stone-arch', gallery: ['room-stone-arch', 'room-canopy', 'room-stone-chairs', 'bath-stone'],
    features: ['Stone-wall interiors', 'Four-poster bed', ...comforts], featured: true,
  },
  {
    slug: 'french-timberhill', name: 'The French Timberhill', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room',
    short: 'A warm timber ceiling, carved headboard and a reading nook.',
    story: 'Timberhill is all warmth: a pitched wooden ceiling, a hand-carved headboard, a sunburst mirror and a cosy sofa nook for rainy afternoons with a book and chai.',
    cover: 'room-wood-ceiling-2', gallery: ['room-wood-ceiling-2', 'room-carved-wide', 'room-reading-nook', 'room-sunburst'],
    features: ['Timber ceiling', 'Reading nook', ...comforts],
  },
  {
    slug: 'kumaon-cottage', name: 'The Kumaon Cottage', category: 'signature', kind: 'Individual cottage', units: 1, unitLabel: '1 cottage',
    short: 'Stone walls, a timber ceiling and a porch swing that faces the valley.',
    story: 'Built in the spirit of old Kumaoni homes: river-stone walls, a wooden ceiling running end to end, and a carved-pillar verandah with a hammock swing made for slow mornings. A cottage of your own, with the garden at your door.',
    cover: 'room-wood-ceiling', gallery: ['room-wood-ceiling', 'cottage-porch', 'hammock-porch', 'cottage-dusk', 'bath-stone'],
    features: ['Wooden ceiling throughout', 'Private verandah with swing', 'Ground floor', ...comforts], featured: true,
  },
  {
    slug: 'the-heaven', name: 'The Heaven', category: 'signature', kind: 'Signature room', units: 1, unitLabel: '1 room',
    short: 'Soft light, sunburst mirrors and a sit-out under the stars.',
    story: 'The Heaven is a calm, softly lit retreat: plush seating, a sunburst mirror, and a stone sit-out outside that glows at night when the estate lights come on.',
    cover: 'room-sunburst', gallery: ['room-sunburst', 'cottage-night', 'room-reading-nook', 'courtyard-fairy'],
    features: ['Sit-out area', ...comforts],
  },
  {
    slug: 'the-bliss', name: 'The Bliss', category: 'signature', kind: 'Signature room', units: 1, unitLabel: '1 room',
    short: 'Clean, bright and modern, with carved-wood accents.',
    story: 'The Bliss pairs a bright, modern room with mountain-craft touches: a carved timber headboard, warm wall lights and a calm palette that lets the forest outside take centre stage.',
    cover: 'room-modern', gallery: ['room-modern', 'room-kantha', 'vine-tunnel', 'pool-pines'],
    features: ['Modern interiors', ...comforts],
  },
  {
    slug: 'the-utopia', name: 'The Utopia', category: 'signature', kind: 'Signature room', units: 1, unitLabel: '1 room',
    short: 'A carved headboard, rich textures and a verandah swing at dusk.',
    story: 'The Utopia is for unhurried days: a dramatic carved headboard, rich textures and a stone verandah with a hammock swing to watch the light fade over the hills.',
    cover: 'room-carved-bed', gallery: ['room-carved-bed', 'cottage-hammock-dusk', 'room-canopy-kantha', 'teepee-garden'],
    features: ['Verandah with swing', ...comforts],
  },
  {
    slug: 'classic-hut', name: 'The Classic Hut', category: 'hut', kind: 'Stone hut', units: 2, unitLabel: '2 huts',
    short: 'Cosy stone huts with a hanging swing chair, tucked into the forest.',
    story: 'Our two Classic Huts are snug stone hideaways with a hanging macramé swing at the door and the forest right outside. Simple, characterful and a few steps from the pool and bonfire.',
    cover: 'hut-swing', gallery: ['hut-swing', 'monsoon-cottage', 'cottage-blue-stone', 'stone-stairs'],
    features: ['Hanging swing chair', 'Forest setting', ...comforts],
  },
  {
    slug: 'classic-tent', name: 'The Classic Tent', category: 'tent', kind: 'Glamping tent', units: 2, unitLabel: '2 tents',
    short: 'Canvas under the trees, with a real bed and fairy-lit decks.',
    story: 'Sleep under canvas without roughing it. Our two Classic Tents sit among the trees with lantern-lit decks, a comfortable bed and an attached bathroom. Fall asleep to crickets and wake to birdsong.',
    cover: 'tent-night', gallery: ['tent-night', 'tents-overhead', 'aerial-tents', 'teepee-bonfire'],
    features: ['Private deck', ...comforts],
  },
  {
    slug: 'grand-imperial-tent', name: 'The Grand Imperial Luxury Tent', category: 'tent', kind: 'Luxury tent', units: 1, unitLabel: '1 tent',
    short: 'Our most romantic stay: a tall, draped canvas suite with a king bed.',
    story: 'All the magic of sleeping under canvas, made grand. A tall, draped tent suite with a king bed and soft lamplight, and an ensuite with a wooden ceiling. Step out to fairy-lit paths and the bonfire circle. Ask us about proposal and anniversary set-ups.',
    cover: 'tent-interior', gallery: ['tent-interior', 'tent-bed-petals', 'courtyard-fairy', 'teepee-bonfire'],
    features: ['King-size bed', 'Wooden-ceiling ensuite', 'Celebration set-ups on request', ...comforts.slice(1)], featured: true,
  },
];

export const totalRooms = stays.reduce((n, s) => n + s.units, 0); // 13

export const experiences = [
  { title: 'Bonfire under the stars', text: 'The fire circle is lit every evening. Bring stories; we bring the warmth.', img: 'teepee-bonfire', tag: 'Evenings' },
  { title: 'Open-air movie nights', text: 'A big screen on the terrace, blankets, bolsters and the valley going blue behind it.', img: 'movie-night', tag: 'Nights' },
  { title: 'Stargazing from the ridge', text: 'Far from city light, the Milky Way rises over the Garhwal hills on clear nights.', img: 'stars-valley', tag: 'Late night' },
  { title: 'High tea in the sun', text: 'Fresh bakes, pots of chai and a stone terrace that catches the afternoon light.', img: 'high-tea-sunrays', tag: 'Afternoons' },
  { title: 'Two pools in the pines', text: 'A main pool and a kids’ pool, ringed by loungers and canna lilies.', img: 'pool-loungers', tag: 'Days' },
  { title: 'Candlelit dinners & surprises', text: 'Birthdays, anniversaries, proposals: tell us, and we will set the scene.', img: 'candlelight-dinner', tag: 'Celebrations' },
];

export const dayTimeline = [
  { time: '6:30 am', title: 'Clouds below you', text: 'Tea on the terrace as mist pours through the valley.', img: 'valley-clouds' },
  { time: '9:00 am', title: 'Breakfast with a view', text: 'A slow breakfast with the hills laid out in front of you.', img: 'breakfast-mountains' },
  { time: '12:00 pm', title: 'Kempty Falls, 11 km away', text: 'Chase the waterfall, or stay back for the pool.', img: 'kempty-falls' },
  { time: '4:30 pm', title: 'Golden hour, high tea', text: 'Bakes and chai on the stone terrace.', img: 'tea-pour' },
  { time: '7:30 pm', title: 'Fire, lights, stars', text: 'The estate glows; the bonfire crackles; the sky opens up.', img: 'aerial-night-glow' },
];

export const seasons = [
  { key: 'monsoon', label: 'Monsoon', months: 'Jul – Sep', text: 'Clouds drift through the estate, everything turns emerald, and the falls roar.', img: 'monsoon-mist' },
  { key: 'autumn', label: 'Autumn', months: 'Oct – Nov', text: 'The clearest skies of the year: crisp days, star-filled nights, long views.', img: 'valley-wide' },
  { key: 'winter', label: 'Winter', months: 'Dec – Feb', text: 'Bonfires, Christmas lights, movie nights under blankets and cocoa by the fire.', img: 'bonfire-terrace-dusk' },
  { key: 'spring', label: 'Spring', months: 'Mar – Jun', text: 'Canna lilies in bloom, warm pool days and evenings that never want to end.', img: 'canna-valley' },
];

export const reels = [
  // Edited reels from the "zephyr dev" Drive folder, encoded into public/reels
  { file: 'reel-zephr_stargazing', title: 'Stargazing in Mussoorie' },
  { file: 'reel-9_jan_ZEPHYR_1', title: 'Pool days, cloud views' },
  { file: 'reel-7_jan_zephyr_1', title: 'A cozy hideaway' },
  { file: 'reel-16_jan_zephyr_1', title: 'A dreamy forest stay' },
  { file: 'reel-6_jan_zephyr_2', title: 'Christmas on the hill' },
  { file: 'reel-10_jan_zephyr_2', title: 'Rainy nights, warm rooms' },
  { file: 'reel-8_jan_zephyr_1', title: 'Swings & teepees' },
  { file: 'reel-s_no.1-_5_jan', title: 'Some places feel warm' },
];

export const gallery = [
  'aerial-day', 'hammock-porch', 'pool-pines', 'cafe-yellow-dusk', 'vine-tunnel', 'bonfire-overhead',
  'room-canopy-kantha', 'terrace-sculpture', 'canna-valley', 'courtyard-fairy', 'stone-stairs', 'teepee-garden',
  'high-tea-sunrays', 'pool-night-drinks', 'buddha-garden', 'cottage-blue-stone', 'kids-play', 'stars-valley-2',
  'swing-lights', 'pools-above', 'resident-dog', 'monsoon-cottage', 'blue-hour', 'aerial-forest',
];

export const faqs = [
  { q: 'What are the check-in and check-out times?', a: 'Standard check-in is in the afternoon and check-out is late morning. Share your arrival time when you enquire and we will do our best to accommodate early arrivals.' },
  { q: 'Can we book the entire estate?', a: 'Yes. The Family Retreat option gives your group all 13 rooms (villa, French rooms, cottages, huts and tents) with the estate to yourselves. Ideal for families, friend getaways and small celebrations.' },
  { q: 'Are meals available?', a: 'Yes. Breakfast, high tea and dinners can be arranged at the estate, including candlelit and bonfire-side setups. Tell us about any dietary needs when you book.' },
  { q: 'How do we reach Zephyr Estate?', a: 'We are on Kempty Fall Road, 27 km from Mussoorie and 11 km from Kempty Falls. Most guests drive from Delhi (about 309 km). The nearest airport is Jolly Grant, Dehradun (84 km). We will share a pin and route on confirmation.' },
  { q: 'Is it suitable for children?', a: 'Very. There is a kids’ play area and a separate kids’ pool, and The Sierra villa gives families two bedrooms with their own lounge and dining.' },
  { q: 'Is the road accessible in monsoon and winter?', a: 'The estate is reachable year-round. In heavy rain or snow, we share road updates before you set out.' },
];
