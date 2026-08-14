import { insights } from "@/lib/site";

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 overflow-hidden py-16 lg:py-24">
      <div className="shell text-center">
        <h2 className="display mx-auto max-w-lg text-[2rem] leading-[1.2] sm:text-[2.35rem]">
          {insights.titleLead}
          <br />
          <em>{insights.titleAccent}</em>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[12.5px] leading-relaxed text-ink-soft">
          {insights.description}
        </p>
      </div>

      {/* The row intentionally bleeds past the container on both edges, as in
          the reference design, and stays swipeable on touch devices. */}
      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 lg:mt-12 lg:px-10">
        {insights.posts.map((post) => (
          <article
            key={post.title}
            className="w-[78vw] max-w-sm shrink-0 snap-center sm:w-[46vw] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <a href={post.href} className="group block">
              <div className="aspect-4/3 overflow-hidden rounded-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-[13.5px] font-semibold text-ink transition-colors group-hover:text-olive-600">
                {post.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{post.excerpt}</p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
