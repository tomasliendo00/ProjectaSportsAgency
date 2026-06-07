import { motion } from 'framer-motion'
import { useLang } from '../i18n.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-flame/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-ember/10 blur-[120px]" />

      {/* Diagonal stripes top-right (deck motif) */}
      <div className="stripes pointer-events-none absolute -right-10 -top-6 h-44 w-72 rotate-0 opacity-90" style={{ '--stripe': '#FF5A1F' }} />
      <div className="stripes pointer-events-none absolute right-40 -top-10 h-44 w-40 opacity-30" style={{ '--stripe': '#F4F2EE' }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-flame text-flame">↗</span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-bone/60">{h.kicker}</span>
        </motion.div>

        <h1 className="font-display display-tight uppercase">
          <motion.span
            className="block text-[16vw] leading-[0.85] sm:text-[13vw] lg:text-[10.5rem]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease }}
          >
            {h.title1}
          </motion.span>
          <motion.span
            className="block text-[16vw] leading-[0.85] text-transparent sm:text-[13vw] lg:text-[10.5rem]"
            style={{ WebkitTextStroke: '2px #FF5A1F' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            {h.title2}
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <p className="max-w-xl text-xl font-bold sm:text-2xl">{h.sub}</p>
            <p className="mt-3 max-w-lg text-base text-bone/60">{h.lead}</p>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-1"
          >
            {[
              [h.stat1, h.stat1l],
              [h.stat2, h.stat2l],
              [h.stat3, h.stat3l],
            ].map(([n, l], i) => (
              <div key={i} className="bg-surface p-5">
                <div className="font-display text-4xl text-flame lg:text-5xl">{n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-bone/55">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
