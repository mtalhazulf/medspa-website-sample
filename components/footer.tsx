import { footer, site } from "@/lib/site";
import { socialIcons, SunMark } from "./icons";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="bg-olive-500 text-cream">
      {/* Brand band --------------------------------------------------- */}
      <div className="shell flex items-center justify-center gap-5 py-12 lg:py-16">
        <SunMark className="h-16 w-16 shrink-0 text-cream sm:h-24 sm:w-24" rays={20} />
        <span className="font-display text-[2.75rem] leading-none sm:text-[4.5rem]">
          {site.name}
        </span>
      </div>

      <div className="shell grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.3fr] lg:gap-8">
        <div>
          <p className="max-w-[26ch] text-[12px] leading-relaxed text-cream/85">{footer.blurb}</p>
          <ul className="mt-6 flex gap-2.5">
            {footer.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-8 w-8 place-items-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream hover:text-olive-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="text-[12px] font-semibold text-cream">{column.title}</h3>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[12px] text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-[12px] font-semibold text-cream">Address</h3>
          <address className="mt-4 text-[12px] leading-relaxed text-cream/80 not-italic">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <h3 className="mt-6 text-[12px] font-semibold text-cream">Email</h3>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 block text-[12px] text-cream/80 transition-colors hover:text-cream"
          >
            {site.email}
          </a>
        </div>

        <div>
          <h3 className="text-[12px] font-semibold text-cream">{footer.newsletter.title}</h3>
          <p className="mt-4 max-w-[30ch] text-[12px] leading-relaxed text-cream/80">
            {footer.newsletter.description}
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="shell border-t border-cream/15 py-5">
        <p className="text-[11px] text-cream/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
