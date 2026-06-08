'use client'

import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

export default function Team() {
  const { t } = useLang()
  const team = t.team
  return (
    <section id="team" className="relative scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTag>{team.tag}</SectionTag>
          <Heading>{team.title}</Heading>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group relative overflow-hidden rounded-3xl border border-line bg-ink p-8 text-center transition-all hover:-translate-y-1 hover:border-flame/50">
                <div className="stripes pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-0 transition-opacity group-hover:opacity-20" style={{ '--stripe': '#FF5A1F' }} />
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-line bg-surface2 font-display text-5xl text-flame transition-colors group-hover:border-flame">
                  {m.initials}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="text-2xl">{m.flag}</span>
                  <h3 className="font-display text-2xl uppercase">{m.name}</h3>
                </div>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-bone/55">{m.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
