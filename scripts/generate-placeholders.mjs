/**
 * Generates the on-brand placeholder artwork that ships in `public/images`.
 *
 * The build environment used to author this site has no access to photo CDNs,
 * so every photographic slot is filled with a deterministic, brand-tinted SVG.
 * Swap in real photography by dropping files into `public/images` and editing
 * the single source of truth at `lib/images.ts` — no component changes needed.
 *
 * Usage: npm run placeholders
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../public/images");

/** Warm skin / linen / sage tones sampled from the reference design. */
const PALETTES = {
  skin: ["#f0dcc8", "#e2bfa2", "#c99a79"],
  linen: ["#f6f1e4", "#e7ded0", "#cfc7b6"],
  sage: ["#e9f0c6", "#cfdc9c", "#9fb06d"],
  clay: ["#f3e3d8", "#dcbfae", "#b08d78"],
  mist: ["#eef2e6", "#d9e2cf", "#b4c1a5"],
};

/**
 * A soft, out-of-focus "photograph": layered radial washes plus a fine grain
 * overlay. Deterministic per `seed` so rebuilds never churn the git diff.
 */
function artwork({ width, height, palette, seed, label }) {
  const [light, mid, deep] = PALETTES[palette];
  const rand = mulberry32(seed);
  const blobs = Array.from({ length: 5 }, (_, i) => {
    const cx = Math.round(rand() * width);
    const cy = Math.round(rand() * height);
    const r = Math.round((0.3 + rand() * 0.45) * Math.max(width, height));
    const fill = [light, mid, deep][i % 3];
    const opacity = (0.25 + rand() * 0.4).toFixed(2);
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}" />`;
  }).join("\n      ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeXml(label)}">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="0.6" y2="1">
      <stop offset="0%" stop-color="${light}" />
      <stop offset="55%" stop-color="${mid}" />
      <stop offset="100%" stop-color="${deep}" />
    </linearGradient>
    <filter id="soften" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${Math.round(Math.max(width, height) / 14)}" />
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="${seed}" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer><feFuncA type="linear" slope="0.09" /></feComponentTransfer>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#base)" />
  <g filter="url(#soften)">
      ${blobs}
  </g>
  <rect width="${width}" height="${height}" filter="url(#grain)" />
  <rect width="${width}" height="${height}" fill="#22261b" opacity="0.04" />
</svg>
`;
}

function mulberry32(a) {
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function escapeXml(value) {
  return value.replace(/[<>&"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

const FILES = [
  { name: "hero-portrait", width: 900, height: 1100, palette: "skin", label: "Guest during a facial consultation" },
  { name: "about-ritual", width: 600, height: 600, palette: "linen", label: "Practitioner preparing a treatment" },
  { name: "treatment-serum", width: 800, height: 800, palette: "skin", label: "Serum application close-up" },
  { name: "treatment-massage", width: 800, height: 800, palette: "mist", label: "Relaxing facial massage" },
  { name: "treatment-laser", width: 800, height: 800, palette: "clay", label: "Laser micropeel session" },
  { name: "treatment-mask", width: 800, height: 800, palette: "sage", label: "Hydrating sheet mask" },
  { name: "insight-microneedling", width: 900, height: 700, palette: "clay", label: "Microneedling treatment" },
  { name: "insight-glow", width: 900, height: 700, palette: "skin", label: "Healthy glowing skin" },
  { name: "insight-vitality", width: 900, height: 700, palette: "linen", label: "Skin vitality serum" },
  { name: "transformation-before", width: 900, height: 1000, palette: "clay", label: "Skin before treatment" },
  { name: "transformation-after", width: 900, height: 1000, palette: "skin", label: "Skin after treatment" },
  { name: "booking-room", width: 1400, height: 900, palette: "mist", label: "Treatment room at Lumiére" },
  { name: "avatar-1", width: 120, height: 120, palette: "skin", label: "Client portrait" },
  { name: "avatar-2", width: 120, height: 120, palette: "clay", label: "Client portrait" },
  { name: "avatar-3", width: 120, height: 120, palette: "linen", label: "Client portrait" },
];

await mkdir(OUT_DIR, { recursive: true });

await Promise.all(
  FILES.map((file, index) =>
    writeFile(
      resolve(OUT_DIR, `${file.name}.svg`),
      artwork({ ...file, seed: index * 977 + 13 }),
      "utf8",
    ),
  ),
);

console.log(`Wrote ${FILES.length} placeholder images to public/images`);
