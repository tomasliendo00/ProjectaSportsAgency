'use client'

import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

export default function HowItWorks() {
  const { t } = useLang()
  const h = t.how
  return (
    <section id="how" className="relative scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTag>{h.tag}</SectionTag>
          <Heading className="max-w-2xl">{h.title}</Heading>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-display text-6xl leading-none text-transparent" style={{ WebkitTextStroke: '1.5px #FF5A1F' }}>
                    {i + 1}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="font-display text-xl uppercase">{step.t}</h3>
                <p className="mt-2 text-sm text-bone/55">{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
