'use client'

import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

export default function Programs() {
  const { t } = useLang()
  const p = t.programs
  return (
    <section id="programs" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="stripes pointer-events-none absolute -left-10 bottom-0 h-40 w-80 opacity-20" style={{ '--stripe': '#FF5A1F' }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag>{p.tag}</SectionTag>
            <Heading>{p.title}</Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-3">
              {p.assoc.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-line px-4 py-2 font-display text-sm tracking-wide text-bone/70"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {p.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-9 transition-colors hover:border-flame/60">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl text-flame/90">{item.n}</span>
                  <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-line text-flame transition-transform group-hover:rotate-45">↗</span>
                </div>
                <h3 className="mt-4 font-display text-3xl uppercase">{item.t}</h3>
                <p className="mt-3 max-w-md text-bone/60">{item.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
