// Typed access to the site content. All editable text and data lives in ./content.json
// (edited by the owner / admin panel); this file only re-exports it with types and adds
// values that are computed from it (e.g. totalRooms) plus two tiny text helpers.
import content from './content.json';

export { content };

export type Site = {
  name: string;
  byline: string;
  tagline: string;
  url: string;
  address: string;
  mapsUrl: string;
  mapEmbed: string;
  geo: { lat: number; lon: number };
  email: string;
  phone: string;
  phoneDisplay: string;
  salesPhone: string;
  salesPhoneDisplay: string;
  whatsapp: string;
  instagram: string;
};
export const site: Site = content.site;

export const distances: { place: string; km: number }[] = content.distances;

export const driveRoute: { hours: string; note: string; stops: { place: string; note: string }[] } = content.driveRoute;

export type NearbyPlace = { name: string; text: string; when?: string; img?: string; credit?: { by?: string; license?: string; url?: string; note?: string } };
export const nearby = content.nearby as { time: string; label: string; places: NearbyPlace[] }[];

export const seo = content.seo;

export const catalogueUrl: string = content.catalogueUrl;

export type Category = { key: string; label: string; blurb: string };
export const categories: Category[] = content.categories;

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
export const stays = content.stays as Stay[];

export const totalRooms = stays.reduce((n, s) => n + s.units, 0); // 13

export type Experience = { title: string; text: string; img: string; tag: string; gallery?: string[]; signature?: boolean; focus?: string; video?: string };
export const experiences = content.experiences as Experience[];

export const feast: { img: string; label: string }[] = content.feast;

export const dayTimeline: { time: string; title: string; text: string; img: string }[] = content.dayTimeline;

export const seasons: { key: string; label: string; months: string; text: string; img: string }[] = content.seasons;

export const reels: { file: string; title: string }[] = content.reels;

export const gallery: string[] = content.gallery;

export const faqs: { q: string; a: string }[] = content.faqs;

// Copy groups for layout, shared components and pages
export const layout = content.layout;
export const enquiry = content.enquiry;
export const ui = content.components;
export const pages = content.pages;

/** Replace {placeholder} tokens with values; unknown tokens are left as they are. */
export function fill(text: string, vars: Record<string, string | number> = {}): string {
  return text.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/** Values every piece of copy may reference. */
export const common = { totalRooms, siteName: site.name };

/**
 * Split copy into parts for templates: "*text*" marks emphasis and "\n" a line break.
 * Templates render `em` parts as <em> (so scoped styles still apply) and `br` parts as <br />.
 */
export type RichPart = { text: string; em?: boolean; br?: boolean };
export function rich(text: string, vars: Record<string, string | number> = {}): RichPart[] {
  const parts: RichPart[] = [];
  fill(text, { ...common, ...vars }).split('\n').forEach((line, i) => {
    if (i) parts.push({ text: '', br: true });
    line.split(/\*([^*]+)\*/).forEach((t, j) => { if (t) parts.push(j % 2 ? { text: t, em: true } : { text: t }); });
  });
  return parts;
}

/** Same markup rules as rich(), as an HTML string (for components that take HTML, e.g. PageHero titles). */
export function richHtml(text: string, vars: Record<string, string | number> = {}): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return rich(text, vars).map((p) => (p.br ? '<br />' : p.em ? `<em>${esc(p.text)}</em>` : esc(p.text))).join('');
}

/** fill() with the common values (totalRooms, siteName) included. */
export const t = (text: string, vars: Record<string, string | number> = {}) => fill(text, { ...common, ...vars });
