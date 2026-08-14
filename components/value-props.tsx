import { valueProps } from "@/lib/site";
import { valueIcons } from "./icons";

export function ValueProps() {
  return (
    <section id="unique-value" className="shell scroll-mt-24 py-16 lg:py-24">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-[2rem] leading-[1.18] sm:text-[2.4rem] lg:text-[2.6rem]">
            {valueProps.titleLead}
            <br />
            <em>{valueProps.titleAccent}</em>
            <br />
            {valueProps.titleRest}
          </h2>
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-ink-soft">
            {valueProps.description}
          </p>
        </div>

        <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full sm:h-48 sm:w-48 lg:h-52 lg:w-52">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={valueProps.image}
            alt="Practitioner preparing a gentle facial treatment"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {valueProps.cards.map((card) => {
          const Icon = valueIcons[card.icon];
          return (
            <article
              key={card.title}
              className="card flex min-h-[13.5rem] flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_-45px_rgb(34_38_27/0.55)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime-100 text-olive-700">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">{card.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">{card.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
