import { images } from "./images";

/**
 * All page copy lives here so the marketing content can be edited without
 * touching layout code. Everything is read at build time (SSG).
 */

export const site = {
  name: "Lumiére",
  tagline: "Personalized aesthetic and wellness treatments tailored to you.",
  email: "hello@lumiere.beauty",
  phone: "+1 (408) 555 0134",
  address: {
    line1: "2457 Maplewood Ave, Sunnyvale,",
    line2: "California 94086",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Unique Value", href: "#unique-value" },
  { label: "Treatment", href: "#treatment" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export const hero = {
  titleLead: "Where",
  titleAccent: "Beauty",
  titleRest: "Meets Wellness",
  description:
    "Personalized aesthetic and wellness treatments tailored to you.",
  primaryCta: { label: "Book a Consultation", href: "#booking" },
  secondaryCta: { label: "Explore Services", href: "#treatment" },
  bullets: ["Personalized treatment", "Expert practitioners", "Holistic approach"],
  proof: {
    count: "100+",
    text: "Individuals who have trusted Lumiére",
    avatars: images.avatars,
  },
  /**
   * Floating labels pinned over the hero portrait. `x`/`y` are percentages of
   * the image box so they track the photo at every breakpoint.
   */
  markers: [
    { label: "Hair Restoration", x: 62, y: 15 },
    { label: "Natural Formula", x: 12, y: 45 },
    { label: "Fotona Micropeel", x: 55, y: 79 },
  ],
} as const;

export const valueProps = {
  titleLead: "Embrace Your Inner Peace",
  titleAccent: "and Discover True Beauty",
  titleRest: "at Lumére",
  description:
    "At Lumiére, we believe beauty grows from calm. Each treatment is thoughtfully designed to relax your mind and care for your body with gentle attention.",
  image: images.aboutRitual,
  cards: [
    {
      icon: "sparkle" as const,
      title: "Personalized Care",
      body: "Every treatment is tailored to your unique skin type, goals, and lifestyle.",
    },
    {
      icon: "flask" as const,
      title: "Science & Expertise",
      body: "Certified professionals using safe, proven techniques and cutting-edge technology.",
    },
    {
      icon: "leaf" as const,
      title: "Holistic Wellness",
      body: "We focus on enhancing natural beauty while promoting long-term skin health.",
    },
  ],
} as const;

export type TreatmentTile =
  | {
      kind: "treatment";
      icon: "waves" | "smile" | "pentagon" | "drop" | "sparkles";
      title: string;
      body: string;
      featured?: boolean;
    }
  | { kind: "photo"; src: string; alt: string };

/** Checkerboard bento grid: treatment tile, photo, treatment tile, … */
export const treatments = {
  titleLead: "Where Care",
  titleAccent: "Meets Innovation,",
  titleRest: "and Every Detail Reflects a Promise to You",
  description:
    "At Lumiére, we believe beauty grows from calm. Each treatment is thoughtfully designed to relax your mind and care for your body with gentle attention.",
  ctaLabel: "Learn More",
  tiles: [
    {
      kind: "treatment",
      icon: "waves",
      title: "Relaxing Message",
      body: "Light to medium pressure to calm the nervous system and ease daily stress.",
      featured: true,
    },
    { kind: "photo", src: images.treatmentSerum, alt: "Serum applied to a guest's cheek" },
    {
      kind: "treatment",
      icon: "smile",
      title: "Acne Treatment",
      body: "Clears congestion and calms inflammation for clearer, steadier skin.",
    },
    { kind: "photo", src: images.treatmentMassage, alt: "Guest receiving a facial massage" },
    {
      kind: "treatment",
      icon: "pentagon",
      title: "Fotona Micropeel",
      body: "Laser resurfacing that refines texture with almost no downtime.",
    },
    { kind: "photo", src: images.treatmentLaser, alt: "Practitioner performing a laser micropeel" },
    {
      kind: "treatment",
      icon: "drop",
      title: "Hydrating Facial",
      body: "Deep moisture layering that restores softness and a healthy bounce.",
    },
    { kind: "photo", src: images.treatmentMask, alt: "Guest wearing a hydrating face mask" },
    {
      kind: "treatment",
      icon: "sparkles",
      title: "Glow Facial",
      body: "A brightening ritual that leaves skin luminous for any occasion.",
    },
  ] satisfies TreatmentTile[],
} as const;

export const insights = {
  titleLead: "Beauty Insights &",
  titleAccent: "Wellness Tips",
  description:
    "Stay informed with expert tips, treatment insights, and beauty trends tailored for you.",
  posts: [
    {
      title: "How Creek Es Reinforced Fillings",
      excerpt:
        "How microneedling boosts collagen, smooths texture, and restores radiance.",
      image: images.insightMicroneedling,
      href: "#insights",
    },
    {
      title: "5 Habits for Healthy, Glowing Skin",
      excerpt:
        "From hydration to skincare routines, learn how to maintain your clinic results at home.",
      image: images.insightGlow,
      href: "#insights",
    },
    {
      title: "The Secret to Lasting Skin Vitality",
      excerpt:
        "Why this non-invasive treatment is becoming a favorite for skin health and recovery.",
      image: images.insightVitality,
      href: "#insights",
    },
  ],
} as const;

export const testimonials = {
  titleLead: "Proof in Every",
  titleAccent: "Transformation",
  description:
    "Every glow tells a story—discover the difference expert care can make.",
  primaryCta: { label: "Book a Consultation", href: "#booking" },
  secondaryCta: { label: "Explore Services", href: "#treatment" },
  before: images.transformationBefore,
  after: images.transformationAfter,
  items: [
    {
      quote:
        "After my microneedling session, my skin feels smoother and I finally feel confident without makeup!",
      name: "Sarah K",
      role: "Employee",
      rating: 5,
    },
    {
      quote:
        "The team explained every step of my Fotona micropeel. Six weeks in, my texture has completely evened out.",
      name: "Amelia R",
      role: "Designer",
      rating: 5,
    },
    {
      quote:
        "I came in for one hydrating facial and stayed for the whole ritual. It is the calmest hour of my month.",
      name: "Priya N",
      role: "Founder",
      rating: 5,
    },
  ],
} as const;

export const booking = {
  titleLead: "Book an",
  titleAccent: "Appointment",
  description: "Choose your ritual, and we'll prepare the rest.",
  submitLabel: "Reserve My Session",
  image: images.bookingRoom,
  treatmentOptions: [
    "Relaxing Message",
    "Acne Treatment",
    "Fotona Micropeel",
    "Hydrating Facial",
    "Glow Facial",
  ],
  timeOptions: ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
} as const;

export const footer = {
  blurb: "Personalized aesthetic and wellness treatments tailored to you.",
  columns: [
    {
      title: "Navigations",
      links: [
        { label: "Home", href: "#home" },
        { label: "Unique Values", href: "#unique-value" },
        { label: "Treatments", href: "#treatment" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Insights", href: "#insights" },
      ],
    },
  ],
  newsletter: {
    title: "Subscribe newsletter",
    description: "Stay updated with the latest news and offers!",
    placeholder: "Email adress",
  },
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" as const },
    { label: "Twitter", href: "#", icon: "twitter" as const },
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "LinkedIn", href: "#", icon: "linkedin" as const },
  ],
} as const;
