import Link from "next/link";
import {
  AnimatedBlob,
  BlobParallax,
  FadeUpItem,
  HeroParallax,
  ScrollIndicator,
  StaggerWrap,
} from "./motions";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">

      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial fade to mask the grid at edges */}
      <div className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, white 80%)",
        }}
      />

      {/* Blobs — each on its own parallax layer for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <BlobParallax speed={0.18}>
          <AnimatedBlob
            className="absolute -top-40 -right-32 w-150 h-150 rounded-full bg-blue-100 opacity-60 blur-3xl"
            duration={8}
            dx={20}
          />
        </BlobParallax>
        <BlobParallax speed={0.28}>
          <AnimatedBlob
            className="absolute top-60 -left-40 w-125 h-125 rounded-full bg-violet-100 opacity-50 blur-3xl"
            duration={10}
            dx={-20}
          />
        </BlobParallax>
      </div>

      {/* Hero content — drifts + fades as user scrolls down */}
      <HeroParallax>
        <StaggerWrap
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          delay={0.12}
        >
          <FadeUpItem>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              AI-Powered Agency — Built for Modern Businesses
            </div>
          </FadeUpItem>

          <FadeUpItem>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto mb-6">
              We build the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">AI products</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-100 -z-10 rounded" />
              </span>{" "}
              your business actually needs
            </h1>
          </FadeUpItem>

          <FadeUpItem>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              From intelligent chatbots to full-stack web apps and workflow
              automation — BayAI turns complex technology into tools your team
              will actually use.
            </p>
          </FadeUpItem>

          <FadeUpItem>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-200 text-sm"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all text-sm"
              >
                See Our Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </FadeUpItem>

          <FadeUpItem>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                5.0 on Clutch
              </span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span>150+ projects shipped</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span>No long-term contracts</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span>Response within 24 hrs</span>
            </div>
          </FadeUpItem>
        </StaggerWrap>
      </HeroParallax>

      {/* Scroll indicator — fades out once user starts scrolling */}
      <ScrollIndicator />
    </section>
  );
}
