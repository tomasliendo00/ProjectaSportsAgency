'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './ui'
import { useLang } from '@/lib/i18n'

const ease = [0.22, 1, 0.36, 1]

const menuVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.28, ease } },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease, staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const itemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.25, ease } },
}

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const linkRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['about', 'services', 'programs', 'how', 'requirements', 'team', 'testimonials', 'apply']
    const onScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.4
      let active = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) active = id
      }
      setActiveSection(active)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll to same-page anchors explicitly. The scroll is deferred with
  // setTimeout (a macrotask, not requestAnimationFrame) so it runs after
  // framer-motion releases the tap's pointer capture; otherwise the
  // programmatic scroll is cancelled on touch and nothing moves.
  // We skip most of the section's large top padding so the title lands
  // just under the navbar instead of leaving a big empty gap. navbar
  // height and section padding are read live so it works on mobile/desktop.
  const goTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    setOpen(false)
    if (!el) return
    setTimeout(() => {
      const base = el.getBoundingClientRect().top + window.scrollY
      let top
      {
        const nav = document.querySelector('header nav')
        const navH = nav ? nav.getBoundingClientRect().height : 72
        const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0
        const gap = window.matchMedia('(min-width: 1024px)').matches ? 50 : 16
        top = base + padTop - navH - gap
      }
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }, 0)
  }

  const links = [
    ['#about', t.nav.about],
    ['#services', t.nav.services],
    ['#programs', t.nav.programs],
    ['#how', t.nav.how],
    ['#requirements', t.nav.requirements],
    ['#team', t.nav.team],
    ['#testimonials', t.nav.testimonials],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" onClick={(e) => goTo(e, '#top')} className="shrink-0"><Logo priority /></a>

        <div className="relative hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              ref={(el) => { linkRefs.current[href.slice(1)] = el }}
              href={href}
              onClick={(e) => goTo(e, href)}
              className={`text-sm font-semibold transition-colors duration-300 ${activeSection === href.slice(1) ? 'text-bone' : 'text-bone/70 hover:text-bone'}`}
            >
              {label}
            </a>
          ))}
          <span
            className="pointer-events-none absolute top-full mt-1 h-0.5 rounded-full bg-flame transition-all duration-300 ease-out"
            style={(() => {
              const activeRef = linkRefs.current[activeSection]
              if (activeRef) return { left: activeRef.offsetLeft, width: activeRef.offsetWidth, opacity: 1 }
              if (activeSection === 'apply') {
                const last = linkRefs.current['testimonials']
                return { left: (last?.offsetLeft ?? 0) + (last?.offsetWidth ?? 0), width: 0, opacity: 0 }
              }
              return { left: 0, width: 0, opacity: 0 }
            })()}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="group flex items-center rounded-full border border-line p-[3px] text-xs font-bold"
            aria-label="Toggle language"
          >
            <span aria-hidden="true" className={`rounded-full px-2 py-1 transition-colors ${lang === 'es' ? 'bg-flame text-ink' : 'text-bone/60'}`}>ES</span>
            <span aria-hidden="true" className={`rounded-full px-2 py-1 transition-colors ${lang === 'en' ? 'bg-flame text-ink' : 'text-bone/60'}`}>EN</span>
          </button>

          <a
            href="#apply"
            onClick={(e) => goTo(e, '#apply')}
            className="hidden rounded-full bg-flame px-5 py-2 text-sm font-bold text-ink transition-transform hover:scale-105 lg:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-flame text-ink shadow-lg shadow-flame/20 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-[2.5px] w-5 rounded-full bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2.5px] w-5 rounded-full bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2.5px] w-5 rounded-full bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <div className="px-5 py-4">
              {links.map(([href, label]) => (
                <motion.a
                  key={href}
                  variants={itemVariants}
                  href={href}
                  onClick={(e) => goTo(e, href)}
                  className="block py-2.5 text-base font-semibold text-bone/80"
                >
                  {label}
                </motion.a>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-3 border-t border-line pt-4"
              >
                <a
                  href="#apply"
                  onClick={(e) => goTo(e, '#apply')}
                  className="block rounded-full bg-flame px-5 py-2.5 text-center text-sm font-bold text-ink"
                >
                  {t.nav.cta}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
