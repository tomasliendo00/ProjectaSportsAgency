'use client'

import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

export default function Requirements() {
  const { t } = useLang()
  const r = t.reqs
  return (
    <section id="requirements" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTag>{r.tag}</SectionTag>
          <div className="flex items-center gap-6">
            <Heading>{r.title}</Heading>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-flame/50 to-transparent sm:block" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {r.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group flex items-center gap-6 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-flame/50">
                <span className="font-display text-5xl text-flame">0{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl uppercase">{item.t}</h3>
                    {item.tag && (
                      <span className="rounded-full bg-flame/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-flame">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-bone/55">{item.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
