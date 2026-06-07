import { useState } from 'react'
import { Reveal } from './ui.jsx'
import { useLang } from '../i18n.jsx'

export default function ContactCTA() {
  const { t } = useLang()
  const c = t.cta
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const field = 'w-full rounded-xl border border-ink/15 bg-ink/5 px-4 py-3 text-ink placeholder-ink/45 outline-none transition focus:border-ink focus:bg-ink/10'

  return (
    <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-flame py-24 text-ink lg:py-32">
      <div className="stripes pointer-events-none absolute right-0 top-0 h-full w-40 opacity-10" style={{ '--stripe': '#0A0A0B' }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ink/60">{c.tag}</span>
            <h2 className="mt-4 font-display display-tight text-5xl uppercase sm:text-6xl lg:text-7xl">
              {c.title}
            </h2>
            <p className="mt-5 max-w-md text-lg font-semibold text-ink/75">{c.sub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border-2 border-ink/15 bg-ink/5 p-10 text-center">
                <span className="font-display text-7xl">✓</span>
                <p className="mt-4 text-xl font-bold">{c.sent}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-3xl border-2 border-ink/10 bg-bone/40 p-6 backdrop-blur-sm sm:p-8">
                <div className="grid gap-4">
                  <input required type="text" placeholder={c.name} className={field} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input required type="email" placeholder={c.email} className={field} />
                    <input type="text" placeholder={c.position} className={field} />
                  </div>
                  <textarea rows={4} placeholder={c.message} className={field} />
                  <button
                    type="submit"
                    className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 font-display text-lg uppercase tracking-wide text-bone transition-transform hover:scale-[1.02]"
                  >
                    {c.submit}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
