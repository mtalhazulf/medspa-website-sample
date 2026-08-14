"use client";

import { useState, type FormEvent } from "react";
import { booking } from "@/lib/site";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  /**
   * The site is statically exported, so there is no server to post to. The
   * form validates in the browser and confirms locally — wire `onSubmit` to
   * your booking provider (or a serverless endpoint) when you go live.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="booking" className="relative scroll-mt-24 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={booking.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-cream/10 to-transparent" />

      <div className="shell relative py-14 lg:min-h-[38rem] lg:py-24">
        <div className="w-full max-w-lg rounded-[1.5rem] bg-white/95 p-6 shadow-[0_40px_90px_-60px_rgb(34_38_27/0.8)] backdrop-blur-sm sm:p-8">
          <h2 className="display text-[1.8rem] leading-tight sm:text-[2.1rem]">
            {booking.titleLead} <em>{booking.titleAccent}</em>
          </h2>
          <p className="mt-2 text-[12px] text-muted">{booking.description}</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                className="field"
                placeholder="e.g. John Smith"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field"
                placeholder="yourmail@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label className="field-label" htmlFor="phone">
                Telephone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="field"
                placeholder="+1 234 5678 90"
                autoComplete="tel"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="treatment">
                Treatment Type
              </label>
              <select id="treatment" name="treatment" className="field" defaultValue="" required>
                <option value="" disabled>
                  Select a treatment
                </option>
                {booking.treatmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="field-label" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                className="field"
                aria-label="Choose a preferred date"
                required
              />
            </div>

            <div>
              <label className="field-label" htmlFor="time">
                Time
              </label>
              <select id="time" name="time" className="field" defaultValue="" required>
                <option value="" disabled>
                  Select a time
                </option>
                {booking.timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary mt-1">
                {booking.submitLabel}
              </button>
              <p
                role="status"
                className={`mt-3 text-[12px] text-olive-600 transition-opacity ${
                  submitted ? "opacity-100" : "opacity-0"
                }`}
              >
                Thank you — we&rsquo;ll confirm your session by email shortly.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
