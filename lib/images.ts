/**
 * Single source of truth for every photographic slot on the page.
 *
 * The repo ships with generated, brand-tinted SVG placeholders (see
 * `scripts/generate-placeholders.mjs`). To use real photography, drop your
 * files in `public/images` and change the paths below — nothing else needs to
 * move. Each entry documents the shot the reference design uses.
 */
export const images = {
  /** Hero: guest touching her cheek, facial-mapping lines drawn over her. */
  hero: "/images/hero-portrait.svg",
  /** "Inner peace" section: circular crop of gloved hands during a facial. */
  aboutRitual: "/images/about-ritual.svg",
  /** Treatment bento grid, clockwise from the top-middle tile. */
  treatmentSerum: "/images/treatment-serum.svg",
  treatmentMassage: "/images/treatment-massage.svg",
  treatmentLaser: "/images/treatment-laser.svg",
  treatmentMask: "/images/treatment-mask.svg",
  /** Insights cards. */
  insightMicroneedling: "/images/insight-microneedling.svg",
  insightGlow: "/images/insight-glow.svg",
  insightVitality: "/images/insight-vitality.svg",
  /** Before/after comparison slider. */
  transformationBefore: "/images/transformation-before.svg",
  transformationAfter: "/images/transformation-after.svg",
  /** Booking section background: treatment room. */
  bookingRoom: "/images/booking-room.svg",
  /** Social proof avatars. */
  avatars: ["/images/avatar-1.svg", "/images/avatar-2.svg", "/images/avatar-3.svg"],
} as const;
