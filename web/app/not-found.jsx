'use client'

import LegalHeader from '@/components/LegalHeader'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function NotFound() {
  const { lang } = useLang()

  return (
    <div className="grain relative flex min-h-screen flex-col bg-ink">
      <LegalHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Error</span>
        <p className="mt-6 font-display text-[8rem] leading-none text-bone/10 sm:text-[12rem] lg:text-[16rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase text-bone sm:text-5xl">
          {lang === 'es' ? 'Página no encontrada' : 'Page not found'}
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/50">
          {lang === 'es'
            ? 'La página que buscás no existe o fue movida. Verificá la URL o volvé al inicio.'
            : 'The page you are looking for does not exist or has been moved. Check the URL or go back home.'}
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-flame px-7 py-3 font-display text-base uppercase tracking-wide text-ink transition-transform hover:scale-105"
        >
          ← {lang === 'es' ? 'Volver al inicio' : 'Back to home'}
        </a>
      </main>
      <Footer />
    </div>
  )
}
