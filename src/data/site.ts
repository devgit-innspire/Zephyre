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
  // The estate's own account (uploader of the pizza workshop reel)
  instagram: 'https://www.instagram.com/zephyr_estate_dimtastay/',
};

export const distances = [
  { place: 'Kempty Falls', km: 11 },
  { place: 'Mussoorie Mall Road', km: 27 },
  { place: 'Vikas Nagar', km: 43 },
  { place: 'Jolly Grant Airport', km: 84 },
  { place: 'Delhi', km: 309 },
];

// Owner's recommended drive from Delhi (from the owner's route graphic): skips central Dehradun and Mussoorie
export const driveRoute = {
  hours: '5.5',
  note: 'Approachable from Delhi in about 5.5 hours, without entering central Dehradun or Mussoorie. The drive itself becomes part of the stay.',
  stops: [
    { place: 'Delhi', note: 'Start' },
    { place: 'Dehradun', note: 'New Delhi–Dehradun Expressway' },
    { place: 'Selaqui', note: 'New Dehradun–Paonta Sahib highway' },
    { place: 'Langha Road', note: 'Turn-off' },
    { place: 'Kata Patthar', note: 'Foothills' },
    { place: 'Juddo Dam', note: 'Reservoir' },
    { place: 'Yamuna Pul', note: 'Bridge' },
    { place: 'Zephyr Estate', note: 'Arrive' },
  ],
};

type NearbyPlace = { name: string; text: string; when?: string; img?: string; credit?: { by?: string; license?: string; url?: string; note?: string } };

// Things to do around the estate, grouped by drive time (owner's list).
// Photos are Creative Commons (Wikimedia Commons / Flickr), credited on the page. Where no photo of the exact spot exists,
// a close stand-in is used and labelled "Representative photo" via credit.note.
export const nearby: { time: string; label: string; places: NearbyPlace[] }[] = [
  {
    time: '5–10 min', label: 'Next door',
    places: [
      { name: 'Lakhwar village & Mahasu Devta Temple', text: 'An ancient temple in a quiet hill village. Peaceful and cultural.', when: 'Morning or evening', img: 'near-mahasu-temple', credit: { note: 'Representative photo: Mahasu Devta temple, Hanol', by: 'Gagandeepsinghddn', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Mahasu_Devta,_Hanol._Uttarakhand.jpg' } },
    ],
  },
  {
    time: '5–25 min', label: 'Close by',
    places: [
      { name: 'Sainji, the corn village', text: 'A peaceful village walk, with a stop at the Canadian bakery.', when: 'Morning or evening', img: 'near-sainji', credit: { by: 'Paul Hamilton', license: 'CC BY-SA 2.0', url: 'https://www.flickr.com/photos/8306673@N02/14850112163' } },
      { name: 'Dimta waterfall', text: 'A walking trail through the forest to the falls.', when: 'Afternoon', img: 'kempty-falls', credit: { note: 'Representative photo: Kempty Falls, nearby' } },
    ],
  },
  {
    time: '30–40 min', label: 'Mussoorie & Landour',
    places: [
      { name: 'Chaar Dukaan & Landour Bakehouse', text: 'The famous waffle and coffee stops.', img: 'near-landour-bakehouse', credit: { by: 'Varunpai11', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Landour_Bakehouse.jpg' } },
      { name: 'Camel’s Back Road', text: 'The classic Mussoorie walk.', img: 'near-camels-back-road', credit: { by: 'Poojamangrolia', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Mountains_(Camel_back_road,_Mussoorie,_Dehradun,_Uttarakhand,_India)_2013.jpg' } },
      { name: 'Lal Tibba or Gun Hill', text: 'Two of the best spots for sunset views.', when: 'Sunset', img: 'near-lal-tibba', credit: { by: 'Paul Hamilton', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Bandar_Punch_from_Lal_Tibba_(5283901979).jpg' } },
      { name: 'Sisters Bazaar & cafés', text: 'Quaint lanes, Café Ivy and Clock Tower Café.', img: 'near-sisters-bazaar', credit: { by: 'Paul Hamilton', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Sisters_Bazaar_(5275305385).jpg' } },
    ],
  },
  {
    time: '1.5–2 hrs', label: 'Day trip',
    places: [
      { name: 'Bairat Khai', text: 'A stunning 360° mountain viewpoint, perfect for photos and chilling.', img: 'near-bairat-khai', credit: { note: 'Representative photo: hills near Chakrata', by: 'JediPro', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Chakrata_-_panoramio.jpg' } },
      { name: 'Chakrata & Tiger Falls', text: 'Go further to a quiet cantonment town, waterfalls and pine forests.', img: 'near-tiger-falls', credit: { by: 'Daniel Romanson', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Tiger_Falls_Uttarakhand_India.jpg' } },
    ],
  },
  {
    time: '2–2.5 hrs', label: 'Dhanaulti loop, via Landour',
    places: [
      { name: 'Eco Park & Adventure Park', text: 'Zipline and sky bridge.', img: 'near-dhanaulti-eco-park', credit: { by: 'Arup1981', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Dhanaulti_Eco_park.JPG' } },
      { name: 'Surkanda Devi Temple', text: 'A short trek to panoramic views.', img: 'near-surkanda-devi', credit: { by: 'आर्या जोशी', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Surkanda_Mata_Temple.jpg' } },
      { name: 'Potato farms & apple orchards', text: 'Farm and orchard country.', when: 'Seasonal', img: 'near-dhanaulti-farms', credit: { by: 'Kiran Jonnalagadda', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Terrace_fields_near_Dhanaulti,_Uttarakhand.jpg' } },
    ],
  },
];

export const catalogueUrl ='https://wa.me/c/919810010818';

export type Category = { key: string; label: string; blurb: string };
export const categories: Category[] = [
  { key: 'villa', label: 'Villa', blurb: '1 villa with 2 rooms, plus a lounge and dining of your own. Space for the whole family.' },
  { key: 'french', label: 'French Rooms', blurb: 'Two French rooms with identical interiors, a French bay window and a balcony: one on the ground floor, one upstairs.' },
  { key: 'luxury', label: 'Luxury Rooms', blurb: 'Three identical luxury rooms opening onto a shared balcony passage with valley views.' },
  { key: 'signature', label: 'Cottage', blurb: 'A Kumaoni-style cottage of your own, with a sit-out area and chairs.' },
  { key: 'hut', label: 'Classic Huts', blurb: 'Cosy stone huts tucked into the forest, each with a small sit-out area for two.' },
  { key: 'tent', label: 'Luxury Tents', blurb: 'Luxury tents under the trees, each with a solid, fully built washroom.' },
];

export type Stay = {
  slug: string;
  name: string;
  category: Category['key'];
  kind: string;
  /** How many rooms/keys this type accounts for (13 in total) */
  units: number;
  unitLabel: string;
  /** Room size in sq. ft., from the owner's room size plan (one unit) */
  size?: number;
  short: string;
  story: string;
  cover: string;
  gallery: string[];
  features: string[];
  featured?: boolean;
};

// Rooms without a balcony have a sit-out area instead
const sitOut = 'Sit-out area with chairs';

// Common comforts; TODO(owner): confirm per room type
const comforts = ['Ensuite bathroom', 'Heater for cool nights', 'Wi-Fi', 'Daily housekeeping'];
// Owner: bonfire spot right outside The Sierra, French Stoneva, the Classic Huts and Classic Tents only
// (none at Timber Hill, Kumaon, Grand Imperial or the three luxury rooms)
const bonfire = 'Private bonfire spot right outside';
// Tents have permanent, fully built washrooms (a key USP)
const solidWashroom = 'Solid, fully built washroom';

// Heaven, Bliss and Utopia share identical interiors, so they share one photo set
const luxuryStory = (name: string, unit: string) =>
  `${name} is the ${unit} of our three luxury rooms, all with exactly the same interiors: a carved four-poster bed under a timber ceiling, river-stone walls, a candle-style chandelier and a black-marble ensuite. Step out to the stand-alone balcony passage that runs along the rooms, a beautiful spot to take in the valley. It is a shared passage, not a private balcony, and has no seating.`;
const luxuryFeatures = ['Four-poster bed', 'Timber ceiling & stone walls', 'Shared balcony passage with valley views', ...comforts];

// French Stoneva and French Timber Hill share identical interiors, and both have a balcony
const frenchFeatures = ['French Bay Window'];

// Room list from the owner (13 rooms). Every photo comes from the WhatsApp catalogue (Utopia shares Heaven/Bliss photos).
export const stays: Stay[] = [
  {
    slug: 'the-sierra', name: 'The Sierra', category: 'villa', kind: '1 villa', units: 2, unitLabel: '2 rooms',
    short: '1 villa with 2 rooms, a lounge and a dining area. A private home on the ridge.',
    story: 'The Sierra is made for families and friends who want to be together without being on top of each other. One villa with two rooms with poster beds, wooden ceilings and stone-clad walls, a glass-walled living room with antique wall art and striking chandeliers, and a dining area of your own for long breakfasts and late card games.',
    cover: 'cat-sierra-living', gallery: ['cat-sierra-living', 'cat-sierra-bedroom-1', 'cat-sierra-dining', 'cat-sierra-bedroom-2', 'cat-sierra-living-2'],
    features: ['2 rooms', 'Private living room', 'Private dining area', sitOut, bonfire, ...comforts], featured: true,
  },
  {
    slug: 'french-stoneva', name: 'The French Stoneva', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room · ground floor', size: 200,
    short: 'A French room with a signature French bay window and a balcony, on the ground floor.',
    story: 'Stoneva is one of our two French rooms, with exactly the same interior design as its twin, French Timber Hill: a hand-cut timber headboard set against an arch of river stone, whitewashed brick, a sunburst mirror and soft wall lights. Its centrepiece is the French bay window, a deep, cushioned seat to curl up in with the green view. Stoneva is on the ground floor and has its own balcony.',
    cover: 'cat-stoneva-baywindow', gallery: ['cat-stoneva-baywindow', 'cat-stoneva-bedroom-1', 'cat-stoneva-seating', 'cat-stoneva-bath', 'cat-french-exterior'],
    features: [...frenchFeatures, 'Balcony', 'Ground floor', bonfire, ...comforts],
  },
  {
    slug: 'french-timberhill', name: 'The French Timber Hill', category: 'french', kind: 'French room', units: 1, unitLabel: '1 room · first floor', size: 200,
    short: 'A French room with a French bay window and a balcony, on the first floor.',
    story: 'Timber Hill is the twin of French Stoneva, with exactly the same interior design and the same signature French bay window, here looking straight out at the hills. It sits on the first floor and has its own balcony, set with two armchairs for tea with the mountains in front of you.',
    cover: 'cat-timberhill-baywindow', gallery: ['cat-timberhill-baywindow', 'cat-timberhill-bedroom', 'cat-timberhill-balcony', 'cat-timberhill-stonewall', 'cat-timberhill-seating'],
    features: [...frenchFeatures, 'Balcony', 'First floor', ...comforts],
  },
  {
    slug: 'kumaon-cottage', name: 'The Kumaon Cottage', category: 'signature', kind: 'Individual cottage', units: 1, unitLabel: '1 cottage', size: 300,
    short: 'Traditional wooden interiors and a sit-out area of your own.',
    story: 'Built in the spirit of old Kumaoni homes: a wooden ceiling running end to end, hand-cut timber headboards and warm brass lamps, with an ensuite in river stone lit by a skylight. Step out to your own sit-out area with chairs, a cosy corner for a cup of tea with the hills in front of you.',
    cover: 'room-carved-wide', gallery: ['room-carved-wide', 'cat-kumaon-bedroom-1', 'cat-kumaon-exterior', 'cat-kumaon-bedroom-2', 'cat-kumaon-bath'],
    features: ['Wooden ceiling throughout', sitOut, 'Ensuite with skylight', ...comforts], featured: true,
  },
  {
    slug: 'the-heaven', name: 'The Heaven', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 1', size: 300,
    short: 'The first of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Heaven', 'first'),
    cover: 'cat-heaven-bedroom', gallery: ['cat-heaven-bedroom', 'cat-heaven-balcony', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-exterior'],
    features: luxuryFeatures, featured: true,
  },
  {
    slug: 'the-bliss', name: 'The Bliss', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 2', size: 300,
    short: 'The second of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Bliss', 'second'),
    cover: 'cat-bliss-bedroom-2', gallery: ['cat-bliss-bedroom-2', 'cat-bliss-bedroom-1', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-balcony'],
    features: luxuryFeatures,
  },
  {
    slug: 'the-utopia', name: 'The Utopia', category: 'luxury', kind: 'Luxury room', units: 1, unitLabel: 'Unit 3', size: 300,
    short: 'The third of three identical luxury rooms, on the balcony passage with valley views.',
    story: luxuryStory('The Utopia', 'third'),
    cover: 'cat-bliss-bedroom-1', gallery: ['cat-bliss-bedroom-1', 'cat-heaven-bedroom', 'cat-bliss-passage', 'cat-heaven-bath', 'cat-heaven-exterior'],
    features: luxuryFeatures,
  },
  {
    slug: 'classic-hut', name: 'The Classic Hut', category: 'hut', kind: 'Stone hut', units: 2, unitLabel: '2 huts', size: 120,
    short: 'Cosy stone huts tucked into the forest, each with a small sit-out area for two.',
    story: 'Our two Classic Huts are snug stone hideaways with the forest right outside: a wrought-iron bed, a sit-by-the-window corner with two chairs, and a warm, tiled ensuite. Outside, a small sit-out area for two. Simple, characterful and a few steps from the pool and bonfire.',
    cover: 'cat-hut-exterior', gallery: ['cat-hut-exterior', 'cat-hut-bedroom-1', 'cat-hut-seating', 'cat-hut-bedroom-2', 'cat-hut-bath'],
    features: ['Forest setting', 'Small sit-out area for 2', bonfire, ...comforts],
  },
  {
    slug: 'classic-tent', name: 'The Classic Tent', category: 'tent', kind: 'Luxury tent', units: 2, unitLabel: '2 tents', size: 130,
    short: 'Luxury tents under the fruit trees, with a solid, fully built washroom and a sit-out area of your own.',
    story: 'Tent living without roughing it. Our two Classic Tents are luxury tents set among the fruit trees, with a sit-out area, a carved wooden bed under a block-printed canopy and a chandelier. The washroom is solid and fully built, with proper tiled walls and fittings, not a temporary or portable unit. Your own bonfire spot is right outside. Fall asleep to crickets and wake to birdsong.',
    cover: 'cat-tent-row', gallery: ['cat-tent-row', 'cat-tent-bedroom-1', 'cat-tent-exterior', 'cat-tent-bedroom-3', 'cat-tent-bedroom-2'],
    features: [solidWashroom, 'Sit-out area', bonfire, ...comforts.slice(1)], featured: true,
  },
  {
    slug: 'grand-imperial-tent', name: 'The Grand Imperial Luxury Tent', category: 'tent', kind: 'Luxury tent', units: 1, unitLabel: '1 tent', size: 150,
    short: 'Our most romantic stay: a grand luxury tent with a four-poster bed and a solid, fully built washroom.',
    story: 'Our grandest luxury tent: tall, block-printed walls, a wrought-iron four-poster bed, a river-stone feature wall and a crystal chandelier. The washroom is solid and fully built, with a wooden ceiling and a walk-in shower, not a temporary or portable unit. Outside, a covered deck with a lounger looks out over the estate. Ask us about proposal and anniversary set-ups.',
    cover: 'cat-imperial-bedroom-1', gallery: ['cat-imperial-bedroom-1', 'cat-imperial-bedroom-2', 'cat-imperial-deck', 'cat-imperial-bedroom-3', 'cat-imperial-bath'],
    features: [solidWashroom, 'Four-poster bed', 'Private covered deck', 'Celebration set-ups on request', ...comforts.slice(1)],
  },
];

export const totalRooms = stays.reduce((n, s) => n + s.units, 0); // 13

// The Experiences page shows them all. The home page has its own pool section, so it skips `signature`
// and shows the next six. `gallery` adds extra photos to an experience's row on the Experiences page.
export const experiences: { title: string; text: string; img: string; tag: string; gallery?: string[]; signature?: boolean; focus?: string; video?: string }[] = [
  { title: 'Our pools, a rarity in these hills', text: 'You won’t find pools like ours anywhere else around here. A blue-mosaic main pool and a kids’ pool sit in the pines, ringed by loungers, umbrellas and canna lilies. Swim by day, then come back after dark when the water glows for drinks, pizza and dinner at the poolside.', img: 'pool-pines', tag: 'Our signature', gallery: ['pools-above', 'pool-night-drinks', 'pool-winter'], signature: true },
  { title: 'Wood-fired pizza & lavish spreads', text: 'Join our pizza workshop: top your own base with fresh veg and cheese alongside our chef, then watch it blister in our mosaic-tiled wood-fired oven. Pizzas are served by the pool or round the fire. And when it’s time to feast: lavish breakfast tables with fresh juices and fruit, high teas, and dinner spreads of rich curries, dal, rice, raita, fresh salad and hot rotis, all cooked fresh at the estate.', img: 'pizza-oven-fire', tag: 'Food', video: 'reel-pizza-workshop', gallery: ['food-thali-tray', 'food-dinner-spread', 'food-breakfast-table'] },
  { title: 'Bonfire under the stars', text: 'Gather round the fire circle as the night cools. Bring stories; we bring the warmth.', img: 'bonfire-under-stars', tag: 'Evenings' },
  { title: 'Open-air movie nights', text: 'A screen by the crackling fire pit, fairy lights overhead, blankets, bolsters and your favourite film.', img: 'movie-night-firepit', tag: 'Nights' },
  { title: 'Pickleball in the forest', text: 'Rally on our own pickleball court, tucked against a stone wall with the forest all around. A favourite for families and friend groups between pool sessions.', img: 'pickleball-court', tag: 'Play', focus: '50% 62%' },
  { title: 'Birthday & party decor', text: 'Balloons, a glowing Happy Birthday sign, fairy-lit canopies, candlelit lounges and a dinner table set just for you. Tell us the occasion and we will dress up the garden.', img: 'bday-full-setup', tag: 'Celebrations', gallery: ['bday-neon-balloons', 'bday-canopy-dinner', 'bday-lounge-candles'] },
  { title: 'Stargazing from the ridge', text: 'Far from city light, the Milky Way rises over the Garhwal hills on clear nights.', img: 'stars-valley', tag: 'Late night' },
  { title: 'High tea in the sun', text: 'Fresh bakes, pots of chai and a stone terrace that catches the afternoon light.', img: 'high-tea-sunrays', tag: 'Afternoons' },
  { title: 'Candlelit dinners & surprises', text: 'Anniversaries, proposals and surprises: tell us, and we will set the scene.', img: 'candlelight-dinner', tag: 'Romance' },
];

export const dayTimeline = [
  { time: '6:30 am', title: 'Clouds below you', text: 'Tea on the terrace as mist pours through the valley.', img: 'valley-clouds' },
  { time: '9:00 am', title: 'Breakfast with a view', text: 'A slow breakfast with the hills laid out in front of you.', img: 'breakfast-mountains' },
  { time: '12:00 pm', title: 'A swim in the pines', text: 'The pool is the one thing you won’t find anywhere else around here. Or chase Kempty Falls, 11 km away.', img: 'pool-loungers' },
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
  // Edited reels from the "zephyr dev" Drive folder and the estate's Instagram, encoded into public/reels
  { file: 'reel-pizza-workshop', title: 'Wood-fired pizza workshop' },
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
  'bonfire-pine-dusk', 'cat-kumaon-exterior', 'pool-pines', 'cafe-yellow-dusk', 'vine-tunnel', 'bonfire-overhead',
  'cat-sierra-bedroom-2', 'terrace-sculpture', 'canna-valley', 'courtyard-fairy', 'stone-stairs', 'teepee-garden',
  'high-tea-sunrays', 'pool-night-pizza', 'buddha-garden', 'cat-hut-exterior', 'kids-play', 'stars-valley-2',
  'evening-fire-courtyard', 'pools-above', 'tea-pour', 'monsoon-cottage', 'blue-hour', 'aerial-forest',
];

export const faqs = [
  { q: 'What are the check-in and check-out times?', a: 'Standard check-in is in the afternoon and check-out is late morning. Share your arrival time when you enquire and we will do our best to accommodate early arrivals.' },
  { q: 'Can we book the entire estate?', a: 'Yes. The Family Retreat option gives your group all 13 rooms (villa, French rooms, cottages, huts and tents) with the estate to yourselves. Ideal for families, friend getaways and small celebrations.' },
  { q: 'Are meals available?', a: 'Yes. Breakfast, high tea and lavish dinner spreads are cooked fresh at the estate, and pizzas come out of our wood-fired oven. We also set up poolside, candlelit and bonfire-side dinners. Tell us about any dietary needs when you book.' },
  { q: 'How do we reach Zephyr Estate?', a: 'We are on Kempty Fall Road, 27 km from Mussoorie and 11 km from Kempty Falls. From Delhi it is about 5.5 hours by road (around 309 km): take the Delhi–Dehradun Expressway, then the Dehradun–Paonta Sahib highway via Selaqui, Langha Road, Kata Patthar, Juddo Dam and Yamuna Pul, without entering central Dehradun or Mussoorie. The nearest airport is Jolly Grant, Dehradun (84 km). We will share a pin on confirmation.' },
  { q: 'Is it suitable for children?', a: 'Very. There is a kids’ play area, a separate kids’ pool and a pickleball court, and The Sierra villa gives families 1 villa with 2 rooms and their own lounge and dining.' },
  { q: 'Is the road accessible in monsoon and winter?', a: 'The estate is reachable year-round. In heavy rain or snow, we share road updates before you set out.' },
];
