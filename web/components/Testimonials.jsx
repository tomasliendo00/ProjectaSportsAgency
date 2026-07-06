'use client'

import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

function TestimonialCard({ item, i }) {
  return (
    <Reveal delay={i * 0.1}>
      <article className="flex flex-col gap-5 rounded-3xl border border-line bg-ink p-8 transition-colors hover:border-flame/40">
        <span aria-hidden="true" className="font-display text-5xl leading-none text-flame">&ldquo;</span>
        <p className="flex-1 text-base leading-relaxed text-bone/80">{item.quote}</p>
        <div className="flex items-center gap-3 border-t border-line pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/flags/${item.flag}.svg`}
            alt={item.country}
            width={24}
            height={18}
            loading="lazy"
            className="h-4 w-6 rounded-[3px] object-cover shadow-sm ring-1 ring-line"
          />
          <div>
            <p className="font-display text-sm uppercase tracking-wide">{item.name}</p>
            <p className="text-xs text-bone/45">{item.country}</p>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const s = t.testimonials
  return (
    <section id="testimonials" className="relative scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <SectionTag>{s.tag}</SectionTag>
          <Heading>{s.title}</Heading>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {s.items.map((item, i) => (
            <TestimonialCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
