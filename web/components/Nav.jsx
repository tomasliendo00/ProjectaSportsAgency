'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#about', t.nav.about],
    ['#services', t.nav.services],
    ['#programs', t.nav.programs],
    ['#profile', t.nav.profile],
    ['#how', t.nav.how],
    ['#team', t.nav.team],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="shrink-0"><Logo /></a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-bone/70 transition-colors hover:text-bone"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="group flex items-center rounded-full border border-line p-[3px] text-xs font-bold"
            aria-label="Toggle language"
          >
            <span className={`rounded-full px-2 py-1 transition-colors ${lang === 'es' ? 'bg-flame text-ink' : 'text-bone/60'}`}>ES</span>
            <span className={`rounded-full px-2 py-1 transition-colors ${lang === 'en' ? 'bg-flame text-ink' : 'text-bone/60'}`}>EN</span>
          </button>

          <a
            href="#apply"
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
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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
