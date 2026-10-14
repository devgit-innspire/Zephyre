// Site-wide behaviour: nav state, mobile drawer, scroll reveals, enquiry dialog, live weather, reels.
const site = { whatsapp: '919810010818', email: 'contact@zephyrbydimta.com', lat: 30.49, lon: 78.0 };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Nav: solid after hero, hide on scroll down, show on scroll up ── */
const nav = document.querySelector<HTMLElement>('[data-nav]');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  nav?.classList.toggle('is-solid', y > window.innerHeight * 0.6 || !document.body.classList.contains('has-hero'));
  document.body.classList.toggle('past-hero', y > window.innerHeight * 0.75);
  nav?.classList.toggle('is-hidden', y > lastY && y > 400 && (drawer?.hidden ?? true));
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Mobile drawer ── */
const drawer = document.querySelector<HTMLElement>('[data-drawer]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu]');
menuBtn?.addEventListener('click', () => {
  const open = drawer!.hidden;
  drawer!.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.style.overflow = open ? 'hidden' : '';
  nav?.classList.add('is-solid');
  if (!open) onScroll();
});
drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => menuBtn?.click()));
onScroll();

/* ── Reveal on scroll ── */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
document.querySelectorAll('.reveal, .windline').forEach((el) => io.observe(el));

/* ── Enquiry dialog ── */
const dialog = document.querySelector<HTMLDialogElement>('[data-enquiry]');
const form = document.querySelector<HTMLFormElement>('[data-enquiry-form]');
const today = new Date();
const iso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const addDays = (s: string, n: number) => { const d = new Date(s); d.setDate(d.getDate() + n); return iso(d); };

function setField(name: string, value?: string | null) {
  if (!form || value == null || value === '') return;
  const el = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
  if (el) el.value = value;
}

export function openEnquiry(prefill: Record<string, string | undefined> = {}) {
  if (!dialog || !form) return;
  const cin = form.elements.namedItem('checkin') as HTMLInputElement;
  const cout = form.elements.namedItem('checkout') as HTMLInputElement;
  cin.min = iso(today);
  Object.entries(prefill).forEach(([k, v]) => setField(k, v));
  cout.min = cin.value ? addDays(cin.value, 1) : addDays(iso(today), 1);
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  (cin.value ? (form.elements.namedItem('name') as HTMLInputElement) : cin).focus();
}

document.addEventListener('click', (e) => {
  const t = (e.target as HTMLElement).closest<HTMLElement>('[data-enquire]');
  if (!t) return;
  e.preventDefault();
  openEnquiry({ stay: t.dataset.stay });
});
dialog?.addEventListener('close', () => { document.body.style.overflow = ''; });
dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
dialog?.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());

form?.addEventListener('change', (e) => {
  const t = e.target as HTMLInputElement;
  if (t.name === 'checkin' && t.value) {
    const cout = form.elements.namedItem('checkout') as HTMLInputElement;
    cout.min = addDays(t.value, 1);
    if (!cout.value || cout.value <= t.value) cout.value = addDays(t.value, 2);
  }
  t.closest('.field')?.classList.remove('invalid');
});

function validate(f: HTMLFormElement) {
  let ok = true;
  const get = (n: string) => f.elements.namedItem(n) as HTMLInputElement;
  const mark = (n: string, bad: boolean) => { get(n).closest('.field')!.classList.toggle('invalid', bad); if (bad && ok) get(n).focus(); if (bad) ok = false; };
  mark('checkin', !get('checkin').value);
  mark('checkout', !get('checkout').value || get('checkout').value <= get('checkin').value);
  mark('name', !get('name').value.trim());
  mark('phone', !get('phone').checkValidity() || !get('phone').value.trim());
  return ok;
}

const fmt = (s: string) => new Date(s).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate(form)) return;
  const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
  const nights = Math.round((new Date(d.checkout).getTime() - new Date(d.checkin).getTime()) / 86400000);
  const msg = [
    'Hello Zephyr Estate! I would like to book a stay.',
    '',
    `Dates: ${fmt(d.checkin)} → ${fmt(d.checkout)} (${nights} night${nights > 1 ? 's' : ''})`,
    `Guests: ${d.adults} adult${d.adults === '1' ? '' : 's'}${d.children !== '0' ? `, ${d.children} child${d.children === '1' ? '' : 'ren'}` : ''}`,
    `Stay: ${d.stay}`,
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    d.note ? `Note: ${d.note}` : '',
  ].filter(Boolean).join('\n');
  const via = (e as SubmitEvent).submitter?.getAttribute('value');
  if (via === 'email') {
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Stay enquiry · ${fmt(d.checkin)}`)}&body=${encodeURIComponent(msg)}`;
  } else {
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  }
  (window as any).gtag?.('event', 'generate_lead', { method: via, stay: d.stay });
});

/* ── Inline booking bars (hero / room pages) hand their values to the dialog ── */
document.querySelectorAll<HTMLFormElement>('[data-booking-bar]').forEach((bar) => {
  const cin = bar.querySelector<HTMLInputElement>('[name=checkin]');
  const cout = bar.querySelector<HTMLInputElement>('[name=checkout]');
  if (cin) cin.min = iso(today);
  cin?.addEventListener('change', () => {
    if (!cout || !cin.value) return;
    cout.min = addDays(cin.value, 1);
    if (!cout.value || cout.value <= cin.value) cout.value = addDays(cin.value, 2);
  });
  bar.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(bar)) as Record<string, string>;
    openEnquiry(d);
  });
});

/* ── Live temperature chip ── */
const tempEl = document.querySelector<HTMLElement>('[data-temp]');
if (tempEl) {
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${site.lat}&longitude=${site.lon}&current=temperature_2m`)
    .then((r) => r.json())
    .then((j) => {
      const t = Math.round(j?.current?.temperature_2m);
      if (Number.isFinite(t)) { tempEl.textContent = `${t}°C on the ridge right now`; tempEl.closest('[hidden]')?.removeAttribute('hidden'); }
    })
    .catch(() => {});
}

/* ── Background videos: only play when visible; respect reduced motion ── */
document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((v) => {
  if (reduceMotion) { v.removeAttribute('autoplay'); v.pause(); return; }
  new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.15 }).observe(v);
});

/* ── Reels: play when centred, tap to unmute, one sound at a time ── */
const reels = Array.from(document.querySelectorAll<HTMLElement>('[data-reel]'));
const reelIO = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    const v = e.target.querySelector('video')!;
    if (e.isIntersecting && !reduceMotion) {
      if (!v.src) v.src = v.dataset.src!;
      v.play().catch(() => {});
    } else v.pause();
  }),
  { threshold: 0.6 },
);
reels.forEach((r) => {
  reelIO.observe(r);
  const v = r.querySelector('video')!;
  const btn = r.querySelector<HTMLButtonElement>('[data-sound]')!;
  const play = r.querySelector<HTMLButtonElement>('[data-play]');
  btn.addEventListener('click', () => {
    const unmute = v.muted;
    reels.forEach((o) => { const ov = o.querySelector('video')!; ov.muted = true; o.classList.remove('has-sound'); });
    v.muted = !unmute;
    r.classList.toggle('has-sound', unmute);
    btn.setAttribute('aria-pressed', String(unmute));
    if (!v.src) v.src = v.dataset.src!;
    v.play().catch(() => {});
  });
  play?.addEventListener('click', () => { if (!v.src) v.src = v.dataset.src!; v.paused ? v.play() : v.pause(); });
  v.addEventListener('play', () => r.classList.add('is-playing'));
  v.addEventListener('pause', () => r.classList.remove('is-playing'));
});
document.querySelectorAll<HTMLElement>('[data-scroller]').forEach((s) => {
  const track = s.querySelector<HTMLElement>('[data-track]')!;
  s.querySelector('[data-prev]')?.addEventListener('click', () => track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' }));
  s.querySelector('[data-next]')?.addEventListener('click', () => track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' }));
});

/* ── Season switcher ── */
document.querySelectorAll<HTMLElement>('[data-seasons]').forEach((root) => {
  const tabs = root.querySelectorAll<HTMLButtonElement>('[role=tab]');
  const select = (tab: HTMLButtonElement) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      root.querySelector<HTMLElement>(`#${t.getAttribute('aria-controls')}`)!.classList.toggle('is-active', on);
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = (e as KeyboardEvent).key;
      if (k !== 'ArrowRight' && k !== 'ArrowLeft') return;
      const n = tabs[(i + (k === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      n.focus(); select(n);
    });
  });
});

/* ── Lightbox for galleries ── */
const lb = document.querySelector<HTMLDialogElement>('[data-lightbox]');
if (lb) {
  const items = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-lb]'));
  const img = lb.querySelector('img')!;
  const cap = lb.querySelector('figcaption')!;
  let i = 0;
  const show = (n: number) => {
    i = (n + items.length) % items.length;
    img.src = items[i].href; img.alt = items[i].dataset.alt || '';
    cap.textContent = items[i].dataset.alt || '';
  };
  items.forEach((a, n) => a.addEventListener('click', (e) => { e.preventDefault(); show(n); lb.showModal(); }));
  lb.querySelector('[data-lb-prev]')!.addEventListener('click', () => show(i - 1));
  lb.querySelector('[data-lb-next]')!.addEventListener('click', () => show(i + 1));
  lb.querySelector('[data-lb-close]')!.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(i + 1); if (e.key === 'ArrowLeft') show(i - 1); });
}
