"use client";

import { motion, type Variants, useScroll, useTransform, useSpring } from "framer-motion";
import type { ReactNode } from "react";

// ─── Shared variants ──────────────────────────────────────────────────────────

const vFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const vScale: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } },
};

const vSlideLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const vp = { once: true, amount: 0.2 as const };

type WrapProps = { children: ReactNode; className?: string };

// ─── Stagger / Fade / Scale / Slide ──────────────────────────────────────────

export function StaggerWrap({ children, className, delay = 0.1 }: WrapProps & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: delay } } }}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpItem({ children, className }: WrapProps) {
  return (
    <motion.div className={className} variants={vFadeUp}>
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, className }: WrapProps) {
  return (
    <motion.div
      className={className}
      variants={vFadeUp}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      {children}
    </motion.div>
  );
}

export function ScaleItem({ children, className }: WrapProps) {
  return (
    <motion.div className={className} variants={vScale}>
      {children}
    </motion.div>
  );
}

export function SlideLeftItem({ children, className }: WrapProps) {
  return (
    <motion.div className={className} variants={vSlideLeft}>
      {children}
    </motion.div>
  );
}

export function HoverCard({ children, className }: WrapProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(59,130,246,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Blob ─────────────────────────────────────────────────────────────────────

export function AnimatedBlob({ className, duration = 8, dx = 20 }: { className?: string; duration?: number; dx?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], x: [0, dx, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ─── CTA / StepBadge ─────────────────────────────────────────────────────────

export function CTAReveal({ children, className }: WrapProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={vp}
    >
      {children}
    </motion.div>
  );
}

export function StepBadge({ number }: { number: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white font-bold text-lg mb-5 shadow-lg shadow-blue-200"
    >
      {number}
    </motion.div>
  );
}

// ─── Scroll-driven hero effects ───────────────────────────────────────────────

/** Thin gradient progress bar pinned to the very top of the viewport */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[70] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 55%, #3b82f6 100%)",
      }}
    />
  );
}

/** Wraps hero content — content drifts down + fades as page scrolls up */
export function HeroParallax({ children, className }: WrapProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 380], [1, 0]);
  return (
    <motion.div className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

/** Wraps a blob — drifts down more slowly than content, creating depth */
export function BlobParallax({ children, className, speed = 0.25 }: WrapProps & { speed?: number }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 700 * speed]);
  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

/** Bouncing scroll-down arrow — fades out once the user starts scrolling */
export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [1, 0]);
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 pointer-events-none select-none"
    >
      <span className="text-[9px] font-semibold tracking-[0.22em] uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
