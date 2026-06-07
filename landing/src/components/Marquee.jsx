import { useLang } from '../i18n.jsx'

export default function Marquee() {
  const { t } = useLang()
  const items = [...t.marquee, ...t.marquee]
  return (
    <div className="relative border-y border-line bg-flame py-4 text-ink">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 font-display text-xl uppercase tracking-tight">
            {word}
            <span className="text-ink/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
