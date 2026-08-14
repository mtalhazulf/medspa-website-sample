import { hero } from "@/lib/site";
import { images } from "@/lib/images";
import { CheckIcon } from "./icons";
import { Header } from "./header";

/** Decorative facial-mapping overlay drawn on top of the hero portrait. */
function FaceMapping() {
  return (
    <svg
      viewBox="0 0 400 520"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-white/85"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M232 118c34 8 58 34 62 70" />
        <path d="M226 150c30 6 48 26 52 56" opacity="0.75" />
        <path d="M150 196c22 34 60 52 104 48" />
        <path d="M158 230c24 30 58 44 96 42" opacity="0.75" />
        <path d="M168 300c30 26 74 32 112 18" />
        <path d="M186 344c26 18 60 22 90 12" opacity="0.7" />
        <path d="M120 262c-14 26-10 56 10 78" opacity="0.65" />
        <path d="M300 210c18 24 20 56 6 82" opacity="0.65" />
      </g>
      <g fill="currentColor">
        {[
          [232, 118],
          [294, 188],
          [150, 196],
          [254, 244],
          [168, 300],
          [280, 318],
          [186, 344],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
        ))}
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="shell pt-4">
      <div className="grid-lines relative overflow-hidden rounded-[2rem] bg-lime-200">
        <Header />

        <div className="relative grid lg:min-h-[34rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]">
          {/* Copy ------------------------------------------------------- */}
          <div className="flex flex-col px-5 pt-10 pb-8 sm:px-8 lg:pt-14 lg:pb-10 lg:pl-12">
            <h1 className="display max-w-[15ch] text-[2.6rem] leading-[1.08] sm:text-[3.1rem] lg:text-[3.4rem]">
              {hero.titleLead} <em>{hero.titleAccent}</em>
              <br />
              {hero.titleRest}
            </h1>

            <p className="mt-5 max-w-[30ch] text-[13.5px] leading-relaxed text-ink-soft">
              {hero.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={hero.primaryCta.href} className="btn btn-primary">
                {hero.primaryCta.label}
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-ghost">
                {hero.secondaryCta.label}
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-1.5 text-[11.5px] text-ink-soft">
                  <CheckIcon className="h-3.5 w-3.5 text-olive-600" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6 lg:mt-auto lg:pt-8">
              <div className="flex -space-x-2.5">
                {hero.proof.avatars.map((src, index) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-lime-200 object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
              <p className="text-[11.5px] leading-tight text-ink-soft">
                <span className="font-semibold text-ink">{hero.proof.count} Individuals</span>{" "}
                who
                <br />
                have trusted Lumiére
              </p>
            </div>
          </div>

          {/* Portrait --------------------------------------------------- */}
          <div className="relative mx-5 mb-5 aspect-4/5 overflow-hidden rounded-[1.5rem] sm:mx-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:aspect-auto lg:h-full lg:w-[52%] lg:rounded-none lg:rounded-bl-[1.5rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.hero}
              alt="Guest resting her hand on her cheek during a Lumiére consultation"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <FaceMapping />

            {hero.markers.map((marker) => (
              <span
                key={marker.label}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                className="absolute inline-flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-white/25 px-3 py-1.5 text-[10.5px] font-medium whitespace-nowrap text-white ring-1 ring-white/45 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {marker.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
