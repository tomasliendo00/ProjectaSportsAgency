'use client'

import { Logo } from './ui'
import { useLang } from '@/lib/i18n'

export default function LegalHeader() {
  const { lang, toggle, t } = useLang()
  return (
    <header className="border-b border-line bg-ink/80 backdrop-blur-md sticky top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo priority />
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center rounded-full border border-line p-[3px] text-xs font-bold"
            aria-label="Toggle language"
          >
            <span aria-hidden="true" className={`rounded-full px-2 py-1 transition-colors ${lang === 'es' ? 'bg-flame text-ink' : 'text-bone/60'}`}>ES</span>
            <span aria-hidden="true" className={`rounded-full px-2 py-1 transition-colors ${lang === 'en' ? 'bg-flame text-ink' : 'text-bone/60'}`}>EN</span>
          </button>
          <a
            href="/#apply"
            className="hidden rounded-full bg-flame px-5 py-2 text-sm font-bold text-ink transition-transform hover:scale-105 lg:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}
