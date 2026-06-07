import Link from "next/link";
import { AnimatedBlob, CTAReveal, FadeUpItem, StaggerWrap } from "./motions";

export default function CTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTAReveal className="relative overflow-hidden bg-gray-900 rounded-3xl px-8 py-16 sm:px-16 text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl -z-10">
            <AnimatedBlob
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-600 opacity-20 blur-3xl"
              duration={8}
              dx={20}
            />
            <AnimatedBlob
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-600 opacity-20 blur-3xl"
              duration={10}
              dx={-20}
            />
          </div>

          <StaggerWrap delay={0.12}>
            <FadeUpItem>
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Ready to Start?
              </p>
            </FadeUpItem>
            <FadeUpItem>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight max-w-2xl mx-auto">
                Let&apos;s build something great together
              </h2>
            </FadeUpItem>
            <FadeUpItem>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Book a free 30-minute discovery call. No sales pitch — just an
                honest conversation about what we can build for you.
              </p>
            </FadeUpItem>
            <FadeUpItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-blue-900/30"
                >
                  Book a Free Call
                </Link>
                <Link
                  href="/work"
                  className="w-full sm:w-auto text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition-all text-sm"
                >
                  View Case Studies
                </Link>
              </div>
            </FadeUpItem>
          </StaggerWrap>
        </CTAReveal>
      </div>
    </section>
  );
}
