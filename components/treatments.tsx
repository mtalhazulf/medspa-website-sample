import { treatments } from "@/lib/site";
import { CursorIcon, treatmentIcons } from "./icons";

export function Treatments() {
  return (
    <section id="treatment" className="scroll-mt-24 bg-cream-deep/60 py-16 lg:py-24">
      <div className="shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-2xl text-[2rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.6rem]">
            {treatments.titleLead} <em>{treatments.titleAccent}</em>
            <br />
            {treatments.titleRest}
          </h2>
          <p className="max-w-sm text-[13px] leading-relaxed text-ink-soft lg:pb-2">
            {treatments.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {treatments.tiles.map((tile) => {
            if (tile.kind === "photo") {
              return (
                <figure
                  key={tile.src}
                  className="group relative aspect-square overflow-hidden rounded-[1.35rem]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>
              );
            }

            const Icon = treatmentIcons[tile.icon];

            return (
              <article
                key={tile.title}
                className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[1.35rem] bg-lime-100 px-8 text-center transition-colors duration-300 hover:bg-lime-200"
              >
                <Icon className="h-6 w-6 text-ink" />

                <h3 className="display mt-4 text-[1.35rem] leading-snug text-ink sm:text-[1.5rem]">
                  {tile.title.split(" ").map((word, wordIndex) => (
                    <span key={`${word}-${wordIndex}`} className="block">
                      {word}
                    </span>
                  ))}
                </h3>

                <p
                  className={`mt-3 max-w-[26ch] text-[11.5px] leading-relaxed text-muted transition-opacity duration-300 ${
                    tile.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {tile.body}
                </p>

                <a
                  href="#booking"
                  className={`btn btn-primary mt-4 px-5 py-2 text-[11.5px] transition-opacity duration-300 ${
                    tile.featured
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                  }`}
                >
                  {treatments.ctaLabel}
                </a>

                {tile.featured ? (
                  <CursorIcon
                    className="absolute top-[38%] left-[62%] h-6 w-6 text-ink drop-shadow-sm"
                    aria-hidden="true"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
