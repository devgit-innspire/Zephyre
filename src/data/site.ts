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
  { key: 'french', label: 'French Rooms', blurb: 'Two French rooms with identical interiors and a French bay window: one on the ground floor, one upstairs with a balcony.' },
  { key: 'luxury', label: 'Luxury Rooms', blurb: 'Three identical luxury rooms opening onto a shared balcony passage with valley views.' },
  { key: 'signature', label: 'Cottage', blurb: 'A Kumaoni-style cottage of your own, with a private verandah.' },
  { key: 'hut', label: 'Classic Huts', blurb: 'Cosy stone huts tucked into the forest, steps from the bonfire and pool.' },
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

// Heaven, Bliss and Utopia share identical interiors, so they share one photo set
const luxuryStory = (name: string, unit: string) =>
  `${name} is the ${unit} of our three luxury rooms, all with exactly the same interiors: a carved four-poster bed under a timber ceiling, river-stone walls, a candle-style chandelier and a black-marble ensuite. Step out to the stand-alone balcony passage that runs along the rooms, a beautiful spot to take in the valley. It is a shared passage, not a private balcony, and has no seating.`;
const luxuryFeatures = ['Four-poster bed', 'Timber ceiling & stone walls', 'Shared balcony passage with valley views', ...comforts];

// French Stoneva and French Timber Hill share identical interiors; only Timber Hill has a balcony.
// TODO(owner): neither is in the WhatsApp catalogue; confirm catalogue-french-room shows these rooms.
const frenchFeatures = ['French Bay Window'];

// Room list from the owner (13 rooms). Photos come from the WhatsApp catalogue unless noted.
export const stays: Stay[] = [
  {
    slug: 'the-sierra', name: 'The Sierra', category: 'villa', kind: '2-bedroom villa', units: 2, unitLabel: '2 bedrooms',
    short: 'Two bedrooms with a lounge and a dining area. A private home on the ridge.',
    story: 'The Sierra is made for families and friends who want to be together without being on top of each other. Two bedrooms with poster beds, wooden ceilings and stone-clad walls, a glass-walled living room with antique wall art and striking chandeliers, and a dining area of your own for long breakfasts and late card games.',
    cover: 'cat-sierra-living', gallery: ['cat-sierra-living', 'cat-sierra-bedroom-1', 'cat-sierra-dining', 'cat-sierra-bedroom-2', 'sierra-lounge'],
    features: ['2 bedrooms', 'Private living room', 'Private dining area', ...comforts], featured: true,
  },
  {
    slug: 'french-stoneva', name: 'The French Stoneva', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room · ground floor',
    short: 'A French room with a signature French bay window, on the ground floor.',
    story: 'Stoneva is one of our two French rooms, with exactly the same interior design as its twin, French Timber Hill. Its centrepiece is the French bay window, a deep, cushioned corner to curl up in with the view. Stoneva is on the ground floor and does not have a balcony.',
    cover: 'catalogue-french-room', gallery: ['catalogue-french-room'],
    features: [...frenchFeatures, 'Ground floor', 'No balcony', ...comforts],
  },
  {
    slug: 'french-timberhill', name: 'The French Timber Hill', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room · first floor',
    short: 'A French room with a French bay window and a balcony, on the first floor.',
    story: 'Timber Hill is the twin of French Stoneva, with exactly the same interior design and the same signature French bay window. It sits on the first floor and is the only one of the two with a balcony, for fresh mountain air whenever you want it.',
    cover: 'catalogue-french-room', gallery: ['catalogue-french-room'],
    features: [...frenchFeatures, 'Balcony', 'First floor', ...comforts],
  },
  {
    slug: 'kumaon-cottage', name: 'The Kumaon Cottage', category: 'signature', kind: 'Individual cottage', units: 1, unitLabel: '1 cottage',
    short: 'Traditional wooden interiors and a private verandah of your own.',
    story: 'Built in the spirit of old Kumaoni homes: a wooden ceiling running end to end, hand-cut timber headboards and warm brass lamps, with an ensuite in river stone lit by a skylight. Step out to your private verandah, a cosy corner for a cup of tea with the hills in front of you.',
    cover: 'cat-kumaon-bedroom-1', gallery: ['cat-kumaon-bedroom-1', 'cat-kumaon-exterior', 'cat-kumaon-bedroom-2', 'cat-kumaon-patio', 'cat-kumaon-bath'],
    features: ['Wooden ceiling throughout', 'Private verandah with seating', 'Ensuite with skylight', ...comforts], featured: true,
  },
  {
    slug: 'the-heaven', name: 'The Heaven', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 1',
    short: 'The first of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Heaven', 'first'),
    cover: 'cat-heaven-bedroom', gallery: ['cat-heaven-bedroom', 'cat-heaven-balcony', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-exterior'],
    features: luxuryFeatures, featured: true,
  },
  {
    slug: 'the-bliss', name: 'The Bliss', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 2',
    short: 'The second of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Bliss', 'second'),
    cover: 'cat-bliss-bedroom-2', gallery: ['cat-bliss-bedroom-2', 'cat-bliss-bedroom-1', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-balcony'],
    features: luxuryFeatures,
  },
  {
    slug: 'the-utopia', name: 'The Utopia', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 3',
    short: 'The third of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Utopia', 'third'),
    cover: 'cat-bliss-bedroom-1', gallery: ['cat-bliss-bedroom-1', 'cat-heaven-bedroom', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-exterior'],
    features: luxuryFeatures,
  },
  {
    slug: 'classic-hut', name: 'The Classic Hut', category: 'hut', kind: 'Stone hut', units: 2, unitLabel: '2 huts',
    short: 'Cosy stone huts tucked into the forest, steps from the pool and bonfire circle.',
    story: 'Our two Classic Huts are snug stone hideaways with the forest right outside: a wrought-iron bed, a sit-by-the-window corner with two chairs, and a warm, tiled ensuite. Simple, characterful and a few steps from the pool and bonfire.',
    cover: 'cat-hut-exterior', gallery: ['cat-hut-exterior', 'cat-hut-bedroom-1', 'cat-hut-seating', 'cat-hut-bedroom-2', 'cat-hut-bath'],
    features: ['Forest setting', 'Sit-out porch', ...comforts],
  },
  {
    slug: 'classic-tent', name: 'The Classic Tent', category: 'tent', kind: 'Glamping tent', units: 2, unitLabel: '2 tents',
    short: 'Canvas under the trees, with a real bed and a deck of your own.',
    story: 'Sleep under canvas without roughing it. Our two Classic Tents sit among the fruit trees with a sit-out deck, a carved wooden bed under a block-printed canopy, a chandelier and an attached bathroom. Fall asleep to crickets and wake to birdsong.',
    cover: 'cat-tent-row', gallery: ['cat-tent-row', 'cat-tent-bedroom-1', 'cat-tent-exterior', 'cat-tent-bedroom-3', 'cat-tent-bedroom-2'],
    features: ['Private deck', ...comforts], featured: true,
  },
  {
    slug: 'grand-imperial-tent', name: 'The Grand Imperial Luxury Tent', category: 'tent', kind: 'Luxury tent', units: 1, unitLabel: '1 tent',
    short: 'Our most romantic stay: a tall, draped canvas suite with a king bed.',
    story: 'All the magic of sleeping under canvas, made grand. A tall, draped tent suite with a king bed and soft lamplight, and an ensuite with a wooden ceiling. Step out to fairy-lit paths and the bonfire circle. Ask us about proposal and anniversary set-ups.',
    // TODO(owner): not in the WhatsApp catalogue; confirm this photo
    cover: 'catalogue-grand-imperial', gallery: ['catalogue-grand-imperial'],
    features: ['King-size bed', 'Wooden-ceiling ensuite', 'Celebration set-ups on request', ...comforts.slice(1)],
  },
];

export const totalRooms = stays.reduce((n, s) => n + s.units, 0); // 13

export const experiences = [
  { title: 'Bonfire under the stars', text: 'The fire circle is lit every evening. Bring stories; we bring the warmth.', img: 'bonfire-under-stars', tag: 'Evenings' },
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
  { time: '4:30 pm', title: 'Golden hour, high tea', text: 'Bakes and chai on the stone terrace.', img: 'golden-hour-tea' },
  { time: '7:30 pm', title: 'Fire, lights, stars', text: 'The estate glows; the bonfire crackles; the sky opens up.', img: 'fire-lights-stars' },
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
  { file: 'reel-8_jan_zephyr_1', title: 'Teepees & fairy lights' },
  { file: 'reel-s_no.1-_5_jan', title: 'Some places feel warm' },
];

export const gallery = [
  'aerial-day', 'cat-kumaon-exterior', 'pool-pines', 'cafe-yellow-dusk', 'vine-tunnel', 'bonfire-overhead',
  'cat-sierra-bedroom-2', 'terrace-sculpture', 'canna-valley', 'courtyard-fairy', 'stone-stairs', 'teepee-garden',
  'high-tea-sunrays', 'pool-night-drinks', 'buddha-garden', 'cat-hut-exterior', 'kids-play', 'stars-valley-2',
  'evening-fire-courtyard', 'pools-above', 'resident-dog', 'monsoon-cottage', 'blue-hour', 'aerial-forest',
];

export const faqs = [
  { q: 'What are the check-in and check-out times?', a: 'Standard check-in is in the afternoon and check-out is late morning. Share your arrival time when you enquire and we will do our best to accommodate early arrivals.' },
  { q: 'Can we book the entire estate?', a: 'Yes. The Family Retreat option gives your group all 13 rooms (villa, French rooms, cottages, huts and tents) with the estate to yourselves. Ideal for families, friend getaways and small celebrations.' },
  { q: 'Are meals available?', a: 'Yes. Breakfast, high tea and dinners can be arranged at the estate, including candlelit and bonfire-side setups. Tell us about any dietary needs when you book.' },
  { q: 'How do we reach Zephyr Estate?', a: 'We are on Kempty Fall Road, 27 km from Mussoorie and 11 km from Kempty Falls. Most guests drive from Delhi (about 309 km). The nearest airport is Jolly Grant, Dehradun (84 km). We will share a pin and route on confirmation.' },
  { q: 'Is it suitable for children?', a: 'Very. There is a kids’ play area and a separate kids’ pool, and The Sierra villa gives families two bedrooms with their own lounge and dining.' },
  { q: 'Is the road accessible in monsoon and winter?', a: 'The estate is reachable year-round. In heavy rain or snow, we share road updates before you set out.' },
];
