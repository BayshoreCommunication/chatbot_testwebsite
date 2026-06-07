// Server Component — no "use client".
// All HTML is rendered on the server and is always visible,
// even when JavaScript is disabled in the browser.
// Framer Motion effects come from ./motions.tsx (Client Component).

import Hero from "./Hero";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}
