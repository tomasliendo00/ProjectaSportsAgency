'use client'

import { useState } from 'react'
import { Reveal, SectionTag, Heading } from './ui'
import { useLang } from '@/lib/i18n'

function TeamCard({ m, i }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={i * 0.1}>
      <article
        className="group relative aspect-square overflow-hidden rounded-3xl border border-line bg-ink transition-all hover:-translate-y-1 hover:border-flame/50 cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="stripes pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-0 transition-opacity group-hover:opacity-20" style={{ '--stripe': '#FF5A1F' }} />

        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-line bg-surface2 transition-colors group-hover:border-flame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.photo}
              alt={m.name}
              width={128}
              height={128}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/flags/${m.flag}.svg`}
              alt=""
              width={24}
              height={18}
              className="h-4 w-6 rounded-[3px] object-cover shadow-sm ring-1 ring-line"
            />
            <h3 className="font-display text-2xl uppercase">{m.name}</h3>
          </div>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-bone/55">{m.role}</p>
        </div>

        {/* Bio overlay — slides up from bottom */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink px-8 py-8 text-center transition-transform duration-500 ease-out ${open ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="flex items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/flags/${m.flag}.svg`}
              alt=""
              width={24}
              height={18}
              className="h-4 w-6 rounded-[3px] object-cover shadow-sm ring-1 ring-line"
            />
            <h3 className="font-display text-xl uppercase">{m.name}</h3>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-bone/55">{m.role}</p>
          <div className="h-px w-8 rounded-full bg-flame/60" />
          <p className="text-sm leading-relaxed text-bone/80">{m.bio}</p>
        </div>
      </article>
    </Reveal>
  )
}

export default function Team() {
  const { t } = useLang()
  const team = t.team
  return (
    <section id="team" className="relative scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <SectionTag>{team.tag}</SectionTag>
          <Heading>{team.title}</Heading>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((m, i) => (
            <TeamCard key={i} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
