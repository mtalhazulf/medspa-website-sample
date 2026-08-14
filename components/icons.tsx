import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/** The Lumiére sunburst mark. */
export function SunMark({ rays = 16, ...props }: IconProps & { rays?: number }) {
  const petals = Array.from({ length: rays }, (_, i) => {
    const angle = (i * 360) / rays;
    return (
      <ellipse
        key={i}
        cx="12"
        cy="4.4"
        rx="0.95"
        ry="3.6"
        transform={`rotate(${angle} 12 12)`}
      />
    );
  });

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {petals}
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M14.5 5.5 8 12l6.5 6.5" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M9.5 5.5 16 12l-6.5 6.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95z" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l2.9 1.7" />
    </svg>
  );
}

export function FlaskIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l2.9 1.7" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l2.9 1.7" />
    </svg>
  );
}

export function WavesIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M8.4 8.2c-2.1 0-3.4 1.5-3.4 3.4s1.3 3.4 3.4 3.4c2.6 0 3.2-2.6 3.6-4 .4-1.4 1-4 3.6-4 2.1 0 3.4 1.5 3.4 3.4s-1.3 3.4-3.4 3.4" />
    </svg>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.8 13.6a4 4 0 0 0 6.4 0" />
      <path d="M9.3 9.6h.01M14.7 9.6h.01" strokeWidth={1.8} />
    </svg>
  );
}

export function PentagonIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="m12 3.8 8 5.9-3.05 9.5h-9.9L4 9.7z" />
    </svg>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3.6c3.2 3.6 5.4 6.3 5.4 9a5.4 5.4 0 0 1-10.8 0c0-2.7 2.2-5.4 5.4-9Z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 4.2c.5 3.4 1.9 4.8 5.3 5.3-3.4.5-4.8 1.9-5.3 5.3-.5-3.4-1.9-4.8-5.3-5.3 3.4-.5 4.8-1.9 5.3-5.3Z" />
      <path d="M17.6 15.1c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5Z" />
    </svg>
  );
}

export function CursorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M6 3.5 18.2 11l-5.3 1.2-2.4 5.1z"
        fill="currentColor"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.38 0-4.01 1.45-4.01 4.13V9.9H7.5V13h2.78v8z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.4 6.6c-.6.27-1.25.45-1.93.53a3.36 3.36 0 0 0 1.48-1.85c-.65.38-1.37.66-2.13.81a3.35 3.35 0 0 0-5.71 3.06 9.51 9.51 0 0 1-6.9-3.5 3.35 3.35 0 0 0 1.04 4.47c-.55-.02-1.06-.17-1.51-.42v.04a3.35 3.35 0 0 0 2.69 3.29c-.5.13-1.01.15-1.51.06a3.36 3.36 0 0 0 3.13 2.33 6.72 6.72 0 0 1-4.96 1.39 9.48 9.48 0 0 0 5.14 1.5c6.17 0 9.54-5.11 9.54-9.54v-.43c.65-.47 1.22-1.07 1.67-1.75z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M16.9 7.1h.01" strokeWidth={2} />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.6H4.1V20h2.84zM5.52 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3M20 13.6c0-3.05-1.63-4.47-3.8-4.47-1.75 0-2.54.96-2.98 1.64V8.6H10.4c.04.8 0 11.4 0 11.4h2.82v-6.37c0-.25.02-.5.09-.69.2-.5.66-1.03 1.42-1.03 1 0 1.4.77 1.4 1.88V20H20z" />
    </svg>
  );
}

export const treatmentIcons = {
  waves: WavesIcon,
  smile: SmileIcon,
  pentagon: PentagonIcon,
  drop: DropIcon,
  sparkles: SparklesIcon,
} as const;

export const valueIcons = {
  sparkle: SparkleIcon,
  flask: FlaskIcon,
  leaf: LeafIcon,
} as const;

export const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;
