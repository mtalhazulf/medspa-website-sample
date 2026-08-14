# Lumiére — Med Spa Landing Page

A pixel-faithful rebuild of the Lumiére med-spa reference design in **Next.js 16
(App Router) + TypeScript + Tailwind CSS v4**, built with a **fully static (SSG)**
output — `next build` prerenders the whole page and emits a plain `out/` folder you
can host on any static host (Vercel, Netlify, S3, GitHub Pages, Nginx).

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm start          # serve the exported ./out folder locally
```

## SSG setup

`next.config.ts` sets `output: "export"`, so:

- every route is prerendered to HTML at build time (`out/index.html`),
- there is no Node server at runtime,
- `images.unoptimized` is on, because the on-demand image optimizer needs a server.

All page copy lives in [`lib/site.ts`](lib/site.ts) and is read at build time, so
editing content and rebuilding is the whole publishing workflow.

## Sections

| Section | Component | Notes |
| --- | --- | --- |
| Sticky-free header + hero | `components/hero.tsx`, `components/header.tsx` | Lime card with grid texture, facial-mapping SVG overlay, floating treatment markers, social proof row |
| Unique value | `components/value-props.tsx` | Split heading, circular ritual photo, three feature cards |
| Treatments | `components/treatments.tsx` | 3×3 checkerboard bento; the featured tile shows its blurb + CTA, the rest reveal theirs on hover/focus |
| Insights | `components/insights.tsx` | Snap-scrolling article row (swipeable on touch) |
| Testimonials | `components/testimonials.tsx` | Quote carousel + draggable before/after comparison slider |
| Booking | `components/booking.tsx` | Appointment form over the treatment-room photo |
| Footer | `components/footer.tsx`, `components/newsletter-form.tsx` | Olive brand band, nav, address, newsletter |

## Swapping in real photography

The environment this was authored in has no access to photo CDNs, so every
photographic slot ships as a generated, brand-tinted SVG placeholder
(`scripts/generate-placeholders.mjs` → `public/images`, regenerate with
`npm run placeholders`).

To use real photos, drop them into `public/images` and update the paths in the one
file that maps them: [`lib/images.ts`](lib/images.ts). Each entry documents the shot
the reference design uses (hero portrait, gloved-hands facial, serum close-up,
micropeel, sheet mask, before/after pair, treatment room, client avatars). No
component changes are needed.

## Forms

The booking and newsletter forms validate in the browser and confirm locally —
a static export has no server to post to. Point their `onSubmit` handlers at your
booking provider or a serverless endpoint when you go live.

## Design tokens

The palette, fonts, and shared primitives (`.btn`, `.card`, `.field`, `.shell`,
`.display`) live in [`app/globals.css`](app/globals.css) under Tailwind v4's
`@theme`. Fonts are self-hosted through `@fontsource-variable` (Playfair Display
for display type, Inter for UI), so there are no runtime font requests.

## Accessibility & responsiveness

- Semantic landmarks, labelled controls, and `aria-label`s on icon-only buttons.
- The before/after slider is a real `<input type="range">`, so it works with a
  keyboard as well as a pointer.
- `prefers-reduced-motion` disables the entrance animation and smooth scrolling.
- Layouts are verified at 390px, 768px, and 1440px.
