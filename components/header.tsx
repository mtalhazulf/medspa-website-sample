"use client";

import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, SunMark } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 text-ink">
          <SunMark className="h-6 w-6 text-olive-600" />
          <span className="font-display text-xl tracking-tight">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-white/55 p-1.5 backdrop-blur-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-white hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#booking" className="btn btn-primary hidden text-[13px] sm:inline-flex">
            Contact Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/70 text-ink lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mt-3 grid gap-1 rounded-2xl bg-white/85 p-3 backdrop-blur lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-lime-100 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-1 w-full sm:hidden"
          >
            Contact Us
          </a>
        </nav>
      ) : null}
    </header>
  );
}
