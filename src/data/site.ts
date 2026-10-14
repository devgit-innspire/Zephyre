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

export type Stay = {
  slug: string;
  name: string;
  kind: string;
  short: string;
  story: string;
  cover: string;
  gallery: string[];
  features: string[];
  rooms: number;
};

const inRoom = ['King-size bed', 'Ensuite bath with geyser', 'Heater & AC', 'Wi-Fi', 'Smart TV', 'Locker & wardrobe'];

// TODO(owner): confirm which photos belong to which stay.
export const stays: Stay[] = [
  {
    slug: 'kumaon-cottage',
    name: 'Native Kumaon Cottage',
    kind: 'Individual cottage',
    short: 'Stone walls, a timber ceiling and a porch swing that faces the valley.',
    story:
      'Built in the spirit of old Kumaoni homes: river-stone walls, a warm wooden ceiling running end to end, and a carved-pillar verandah with a hammock swing made for slow mornings. A cottage of your own, set on the ground with the garden at your door.',
    cover: 'room-wood-ceiling',
    gallery: ['room-wood-ceiling', 'cottage-porch', 'hammock-porch', 'room-wood-ceiling-2', 'cottage-dusk', 'bath-stone'],
    features: ['Wooden ceiling throughout', 'Private verandah', 'Ground floor', ...inRoom],
    rooms: 3,
  },
  {
    slug: 'grand-imperial-tent',
    name: 'Grand Imperial Villa Tent',
    kind: 'Luxury villa tent',
    short: 'Canvas romance with a real bed, a timber-ceiling bath and the forest outside.',
    story:
      'All the magic of sleeping under canvas, none of the roughing it. A tall, draped tent bedroom with a king bed and soft lamplight, and an ensuite bathroom finished with a wooden ceiling. Step out to fairy-lit paths and the bonfire circle.',
    cover: 'tent-interior',
    gallery: ['tent-interior', 'tent-bed-petals', 'tents-overhead', 'teepee-bonfire', 'courtyard-fairy'],
    features: ['Ground-floor tent bedroom', 'Wooden-ceiling ensuite', ...inRoom],
    rooms: 1,
  },
  {
    slug: 'swiss-cottage-tent',
    name: 'Swiss Cottage Villa Tent',
    kind: 'Luxury villa tent',
    short: 'A classic Swiss-style tent tucked into the trees, with every comfort inside.',
    story:
      'A Swiss cottage tent among the oaks and pines, with a king bed, warm heater for crisp hill nights and a full ensuite. Wake to birdsong, walk the vine tunnel to breakfast, and be at the pool in a minute.',
    cover: 'tents-overhead',
    gallery: ['tents-overhead', 'tent-bed-petals', 'vine-tunnel', 'aerial-tents', 'pool-pines'],
    features: ['Ground-floor tent bedroom', ...inRoom],
    rooms: 1,
  },
  {
    slug: 'french-duplex',
    name: 'French Deluxe Duplex',
    kind: 'Two-bedroom duplex',
    short: 'Two bedrooms, French bay windows and private balconies over the green valley.',
    story:
      'A duplex with two generous bedrooms, each with a French bay window and its own balcony. Hand-carved headboards, sunburst mirrors and a reading nook for rainy afternoons. The ground-floor room opens to the kids’ play area, which makes it a family favourite.',
    cover: 'room-carved-bed',
    gallery: ['room-carved-bed', 'room-reading-nook', 'room-carved-wide', 'duplex-lounge', 'room-canopy'],
    features: ['French bay window', 'Private balcony', 'Kids’ play area access (ground floor)', ...inRoom],
    rooms: 2,
  },
];

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
  { q: 'Can we book the entire estate?', a: 'Yes. The Family Retreat option gives your group all six rooms (cottages, tents and the duplex) with the estate to yourselves. Ideal for families, friend getaways and small celebrations.' },
  { q: 'Are meals available?', a: 'Yes. Breakfast, high tea and dinners can be arranged at the estate, including candlelit and bonfire-side setups. Tell us about any dietary needs when you book.' },
  { q: 'How do we reach Zephyr Estate?', a: 'We are on Kempty Fall Road, 27 km from Mussoorie and 11 km from Kempty Falls. Most guests drive from Delhi (about 309 km). The nearest airport is Jolly Grant, Dehradun (84 km). We will share a pin and route on confirmation.' },
  { q: 'Is it suitable for children?', a: 'Very. There is a kids’ play area, a separate kids’ pool, and the French Duplex ground-floor room opens right onto the play area.' },
  { q: 'Is the road accessible in monsoon and winter?', a: 'The estate is reachable year-round. In heavy rain or snow, we share road updates before you set out.' },
];
