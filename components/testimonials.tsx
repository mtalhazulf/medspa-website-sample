"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site";
import { ChevronLeft, ChevronRight, StarIcon } from "./icons";

function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1.5rem] select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={testimonials.after}
        alt="Skin after a course of treatments at Lumiére"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={testimonials.before}
        alt="Skin before treatment"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        loading="lazy"
      />

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-white/90"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-md"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft className="h-3 w-3" />
        <ChevronRight className="absolute h-3 w-3 translate-x-1.5" />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare skin before and after treatment"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = testimonials.items;
  const active = items[index];

  const move = (step: number) => setIndex((current) => (current + step + items.length) % items.length);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-lime-50 py-16 lg:py-24">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="display text-[2rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.6rem]">
            {testimonials.titleLead}
            <br />
            <em>{testimonials.titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-ink-soft">
            {testimonials.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={testimonials.primaryCta.href} className="btn btn-primary">
              {testimonials.primaryCta.label}
            </a>
            <a href={testimonials.secondaryCta.href} className="btn btn-ghost">
              {testimonials.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10" aria-live="polite">
            <div className="flex gap-0.5 text-olive-500">
              {Array.from({ length: active.rating }, (_, starIndex) => (
                <StarIcon key={starIndex} className="h-3.5 w-3.5" />
              ))}
            </div>
            <blockquote className="mt-4 max-w-md text-[14px] leading-relaxed text-ink">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <div className="mt-4">
              <p className="text-[12px] font-semibold text-ink">{active.name}</p>
              <p className="text-[11px] text-muted">{active.role}</p>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}
