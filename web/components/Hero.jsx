'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { DotMatrix } from './ui'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  const stats = [
    [h.stat1, h.stat1l],
    [h.stat2, h.stat2l],
    [h.stat3, h.stat3l],
  ]

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
      {/* Bold diagonal stripe band — deck motif (replaces generic blur glows) */}
      <div className="stripes pointer-events-none absolute -right-8 -top-4 h-52 w-80 opacity-90" style={{ '--stripe': '#FF5A1F' }} />
      <div className="stripes pointer-events-none absolute right-44 -top-10 h-52 w-32 opacity-25" style={{ '--stripe': '#F4F2EE' }} />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[1px] w-[120%] -rotate-[18deg] bg-gradient-to-r from-transparent via-flame/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 flex items-center gap-4"
        >
          <DotMatrix className="h-5 w-16 text-flame/70" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-flame text-flame">↗</span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-bone/60">{h.kicker}</span>
        </motion.div>

        <h1 className="font-display display-tight uppercase">
          <motion.span
            className="block text-[16vw] leading-[0.85] sm:text-[13vw] lg:text-[9.5rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            {h.title1}
          </motion.span>
          <motion.span
            className="block text-[16vw] leading-[0.85] text-transparent sm:text-[13vw] lg:text-[9.5rem]"
            style={{ WebkitTextStroke: '2px #FF5A1F' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            {h.title2}
          </motion.span>
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          {/* Left: pitch + CTA + inline stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <p className="max-w-xl text-xl font-bold sm:text-2xl">{h.sub}</p>
            <p className="mt-3 max-w-lg text-base text-bone/65">{h.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3.5 font-bold text-ink transition-transform hover:scale-105"
              >
                {h.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-bold text-bone transition-colors hover:border-flame hover:text-flame"
              >
                {h.ctaAlt}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
              {stats.map(([n, l], i) => (
                <div key={i}>
                  <div className="font-display text-3xl leading-none text-flame sm:text-4xl">{n}</div>
                  <div className="mt-1.5 max-w-[10rem] text-xs font-semibold uppercase tracking-wide text-bone/55">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: two real photos in an editorial overlap (deck cover composition) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="relative mx-auto h-[340px] w-full max-w-md sm:h-[420px] lg:mx-0 lg:ml-auto"
          >
            <div className="stripes pointer-events-none absolute -right-5 -top-5 z-0 h-28 w-36 opacity-80" style={{ '--stripe': '#FF5A1F' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/duel.jpg"
              alt=""
              width={800}
              height={450}
              className="absolute bottom-0 left-0 z-10 h-[86%] w-[56%] rounded-2xl object-cover shadow-2xl ring-1 ring-line"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/grad.jpg"
              alt=""
              width={1000}
              height={700}
              className="absolute right-0 top-0 z-20 h-[66%] w-[48%] rounded-2xl object-cover shadow-2xl ring-1 ring-line"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
