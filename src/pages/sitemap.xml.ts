// XML sitemap with image entries, generated at build time (no extra dependency).
import type { APIRoute } from 'astro';
import { site, stays, experiences, feast } from '../data/site';

const img = (name: string) => `${site.url}/images/${name}-2000.webp`;
const pages: { path: string; priority: string; images: string[] }[] = [
  { path: '/', priority: '1.0', images: ['pool-pines', 'catalogue-pool', 'pizza-oven-night', ...feast.map((f) => f.img)] },
  { path: '/stays', priority: '0.9', images: stays.map((s) => s.cover) },
  ...stays.map((s) => ({ path: `/stays/${s.slug}`, priority: '0.8', images: s.gallery })),
  { path: '/experiences', priority: '0.8', images: experiences.map((e) => e.img) },
  { path: '/gallery', priority: '0.7', images: ['pools-above', 'pool-night-drinks', 'pizza-oven-fire', 'food-dinner-spread'] },
  { path: '/getting-here', priority: '0.7', images: ['valley-wide'] },
  { path: '/explore', priority: '0.6', images: ['valley-clouds'] },
];
const esc = (s: string) => s.replace(/&/g, '&amp;');

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((p) => `  <url>
    <loc>${esc(new URL(p.path, site.url).href)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
${[...new Set(p.images)].map((i) => `    <image:image><image:loc>${esc(img(i))}</image:loc></image:image>`).join('\n')}
  </url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
