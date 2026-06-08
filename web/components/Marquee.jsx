'use client'

import { useLang } from '@/lib/i18n'

export default function Marquee() {
  const { t } = useLang()
  const items = [...t.marquee, ...t.marquee]
  return (
    <div className="relative border-y border-line bg-flame py-4 text-ink">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-display text-xl uppercase tracking-tight">
            {word}
            <span className="h-1.5 w-1.5 rotate-45 bg-ink/40" />
          </span>
        ))}
      </div>
    </div>
  )
}
