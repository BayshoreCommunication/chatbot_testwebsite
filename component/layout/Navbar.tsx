"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  motion, AnimatePresence,
  useScroll, useSpring, useTransform, useMotionValue,
  animate as motionAnimate,
} from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Shared spring config — plush but snappy
const SP = { stiffness: 220, damping: 32, mass: 0.85, restDelta: 0.005 } as const

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // ── Scroll tracking ────────────────────────────────────────────────────────
  const { scrollY, scrollYProgress } = useScroll()

  // Smooth scroll progress: 0 (top) → 1 (after 90px)
  const scrollProg = useSpring(
    useTransform(scrollY, [0, 90], [0, 1]),
    SP,
  )

  // Progress bar spring
  const progressBar = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // ── Menu-open progress (0 ↔ 1, spring animated) ───────────────────────────
  const menuProg = useMotionValue(0)
  useEffect(() => {
    motionAnimate(menuProg, menuOpen ? 1 : 0, { type: 'spring', ...SP })
  }, [menuOpen, menuProg])

  // Combined: pill is "active" when either scrolled or menu open
  const active = useTransform(
    [scrollProg, menuProg] as const,
    ([s, m]: number[]) => Math.max(s, m),
  )

  // ── Derived pill style values ──────────────────────────────────────────────

  // Background fades in — slightly opaque glass
  const pillBg = useTransform(
    active,
    [0, 1],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.96)'],
  )

  // Backdrop blur
  const pillBlur = useTransform(active, [0, 1], ['blur(0px)', 'blur(18px)'])

  // Box shadow — same number of layers so framer-motion can interpolate cleanly
  const pillShadow = useTransform(active, [0, 1], [
    '0 0px 0px rgba(0,0,0,0), 0 0px 0px rgba(0,0,0,0), inset 0 0 0 0px rgba(0,0,0,0)',
    '0 8px 40px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.07)',
  ])

  // Side margins (creates the "detach from edge" effect on scroll only)
  const outerPad = useTransform(scrollProg, [0, 1], [0, 14])

  // Top margin (floats above viewport edge)
  const topPad = useTransform(scrollProg, [0, 1], [0, 10])

  // Nav row height: 80px → 56px as you scroll
  const navH = useTransform(scrollProg, [0, 1], [80, 56])

  // ── Border radius: full pill when scrolled (no menu), rect when menu open ──
  const radiusTarget = useMotionValue(0)
  const pillRadius = useSpring(radiusTarget, SP)

  useEffect(() => {
    const update = (sv: number) => {
      // When menu is open: rounded rect so the drawer looks natural
      // When scrolled: full pill
      radiusTarget.set(menuOpen ? 18 : sv >= 30 ? 9999 : 0)
    }
    update(scrollY.get())
    return scrollY.on('change', update)
  }, [menuOpen, scrollY, radiusTarget])

  // ── Misc ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-70 origin-left"
        style={{
          scaleX: progressBar,
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 55%, #3b82f6 100%)',
        }}
      />

      {/* Full-width anchor — pill floats inside it */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50 flex justify-center"
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, delay: 0.06 }}
      >
        {/* The pill — all style values are spring/scroll-linked motion values */}
        <motion.div
          className="w-full overflow-hidden"
          style={{
            backgroundColor: pillBg,
            backdropFilter: pillBlur,
            WebkitBackdropFilter: pillBlur,
            boxShadow: pillShadow,
            borderRadius: pillRadius,
            marginTop: topPad,
            marginLeft: outerPad,
            marginRight: outerPad,
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              style={{ height: navH }}
              className="flex items-center justify-between"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 shrink-0">
                <motion.div
                  className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>
                <span className="font-bold text-xl text-gray-900 tracking-tight">
                  Bay<span className="text-blue-600">AI</span>
                </span>
              </Link>

              {/* Desktop links */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600"
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Sign in
                </Link>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-blue-200"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <div className="w-5 h-4.5 flex flex-col justify-between">
                  <motion.span className="block h-0.5 bg-current rounded-full"
                    animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  />
                  <motion.span className="block h-0.5 bg-current rounded-full"
                    animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                  <motion.span className="block h-0.5 bg-current rounded-full"
                    animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  />
                </div>
              </button>
            </motion.div>
          </nav>

          {/* Mobile drawer — expands the pill downward */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 32, mass: 0.8 }}
                style={{ overflow: 'hidden' }}
                className="lg:hidden border-t border-gray-100/70"
              >
                <motion.div
                  className="px-4 pb-6 pt-2"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <div className="space-y-1 mb-4">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <motion.div
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, x: -16 },
                            show: {
                              opacity: 1, x: 0,
                              transition: { type: 'spring', stiffness: 280, damping: 26 },
                            },
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 font-medium rounded-xl transition-colors ${
                              isActive
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                            }`}
                          >
                            {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />}
                            {link.label}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  <motion.div
                    className="border-t border-gray-100 pt-4 flex flex-col gap-3"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: {
                        opacity: 1, y: 0,
                        transition: { type: 'spring', stiffness: 280, damping: 26 },
                      },
                    }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="text-center py-3 text-gray-600 font-medium hover:text-blue-600 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md shadow-blue-200"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  )
}

export default Navbar
