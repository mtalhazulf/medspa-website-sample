"use client";

import { useState, type FormEvent } from "react";
import { footer } from "@/lib/site";
import { ArrowRight } from "./icons";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  /** Static export: confirm in-browser and hook up your ESP when going live. */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-4 flex items-center gap-2 rounded-full border border-cream/35 py-1.5 pr-1.5 pl-4"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder={footer.newsletter.placeholder}
          className="w-full bg-transparent text-[12px] text-cream placeholder:text-cream/55 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream text-olive-600 transition-transform hover:translate-x-0.5"
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>
      <p role="status" className={`mt-2 text-[11px] text-cream ${subscribed ? "" : "sr-only"}`}>
        {subscribed ? "You're on the list — welcome to Lumiére." : ""}
      </p>
    </div>
  );
}
