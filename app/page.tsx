import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Insights } from "@/components/insights";
import { Testimonials } from "@/components/testimonials";
import { Treatments } from "@/components/treatments";
import { ValueProps } from "@/components/value-props";

/**
 * The landing page is fully static: every section reads build-time content
 * from `lib/site.ts`, so `next build` prerenders it into `out/index.html`.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <Treatments />
      <Insights />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
