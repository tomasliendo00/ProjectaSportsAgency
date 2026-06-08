'use client'

import { Logo } from './ui'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  const nav = t.nav

  return (
    <footer className="border-t border-line bg-ink py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-3xl" />
            <p className="mt-4 max-w-xs text-sm text-bone/55">{f.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-bone/40">{f.nav}</h4>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><a href="#about" className="hover:text-flame">{nav.about}</a></li>
              <li><a href="#services" className="hover:text-flame">{nav.services}</a></li>
              <li><a href="#programs" className="hover:text-flame">{nav.programs}</a></li>
              <li><a href="#team" className="hover:text-flame">{nav.team}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-bone/40">{f.social}</h4>
            <ul className="space-y-2 text-sm text-bone/70">
              <li><a href="#" className="hover:text-flame">Instagram</a></li>
              <li><a href="#" className="hover:text-flame">TikTok</a></li>
              <li><a href="#" className="hover:text-flame">WhatsApp</a></li>
              <li><a href="mailto:hola@projectasports.com" className="hover:text-flame">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-bone/40 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Projecta Sports Agency. {f.rights}</span>
          <span className="font-display tracking-wide text-bone/30">PROJECTA · SPORTS · AGENCY</span>
        </div>
      </div>
    </footer>
  )
}
