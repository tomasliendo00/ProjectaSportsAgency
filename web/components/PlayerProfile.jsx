'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { DotMatrix } from './ui'

const ease = [0.22, 1, 0.36, 1]

export default function PlayerProfile() {
  const { t } = useLang()
  const p = t.player

  return (
    <section id="profile" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      {/* Bold diagonal band — deck motif, not a generic glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-full w-[70%] -skew-x-12 bg-gradient-to-l from-flame/12 via-flame/5 to-transparent" />
      <div className="stripes pointer-events-none absolute -right-10 top-10 hidden h-40 w-72 opacity-70 lg:block" style={{ '--stripe': '#FF5A1F' }} />
      {/* Dotted matrix — deck signature */}
      <DotMatrix className="pointer-events-none absolute left-6 top-24 h-20 w-32 text-flame/40" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header — chevron treatment, deliberately different from other sections */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 flex items-center gap-3 text-flame"
        >
          <span className="font-display text-2xl leading-none">»</span>
          <span className="text-xs font-bold uppercase tracking-[0.3em]">{p.kicker}</span>
          <span className="h-px w-16 bg-flame/50" />
        </motion.div>

        <div className="grid items-center gap-y-10 lg:grid-cols-12">
          {/* Player cutout with oversized jersey number behind */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="relative lg:col-span-7"
          >
            <Image
              src="/player/inigo.jpg"
              alt={p.name}
              width={1100}
              height={733}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="relative w-full max-w-2xl drop-shadow-2xl"
            />
          </motion.div>

          {/* Info panel — overlaps the image on desktop (editorial offset) */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="relative z-10 lg:col-span-5 lg:-ml-16"
          >
            <div className="rounded-3xl border border-line bg-surface/85 p-7 backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/flags/${p.flag}.svg`}
                  alt={p.country}
                  width={28}
                  height={21}
                  loading="lazy"
                  className="h-5 w-7 rounded-[3px] object-cover ring-1 ring-line"
                />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-flame">{p.title}</span>
              </div>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[1.05] sm:text-5xl">{p.name}</h3>

              <dl className="mt-6">
                {p.stats.map((s) => (
                  <div key={s.k} className="flex items-baseline justify-between border-b border-line/70 py-3">
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-bone/45">{s.k}</dt>
                    <dd className="font-display text-xl uppercase">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Video analysis — clips at slight angles, with the deck's hexagon overlays baked in */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-flame">»</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-bone/70">{p.videoLabel}</span>
              </div>
              <div className="flex gap-3">
                {['clip1', 'clip2'].map((clip, i) => (
                  <Image
                    key={clip}
                    src={`/player/${clip}.jpg`}
                    alt={`${p.videoLabel} ${i + 1}`}
                    width={760}
                    height={351}
                    sizes="(min-width: 1024px) 29vw, 50vw"
                    className={`w-1/2 rounded-xl border border-line object-cover shadow-lg transition-transform hover:scale-[1.03] ${
                      i === 0 ? '-rotate-1' : 'rotate-1'
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-bone/55">{p.videoNote}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
