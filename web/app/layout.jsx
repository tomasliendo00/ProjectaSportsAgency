import { Anton, Manrope } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_URL = 'https://projectasports.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Projecta Sports Agency | Becas y transferencias deportivas en USA',
    template: '%s · Projecta Sports Agency',
  },
  description:
    'Agencia deportiva que conecta tu talento futbolístico con becas universitarias en Estados Unidos. Te acompañamos en perfil deportivo, búsqueda universitaria, visa F-1 y elegibilidad NCAA, NAIA y NJCAA.',
  keywords: [
    'becas deportivas USA', 'becas de fútbol', 'NCAA', 'NAIA', 'NJCAA',
    'visa F-1', 'transfer portal', 'agencia deportiva', 'reclutamiento universitario',
  ],
  authors: [{ name: 'Projecta Sports Agency' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'Projecta Sports Agency',
    title: 'Projecta Sports Agency — Becas y transferencias deportivas en USA',
    description:
      'Convertimos tu talento en una oportunidad real. Becas y transferencias deportivas en Estados Unidos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projecta Sports Agency — Becas deportivas en USA',
    description:
      'Convertimos tu talento en una oportunidad real. Becas y transferencias deportivas en USA.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/icon.png',
  },
}

export const viewport = {
  themeColor: '#0A0A0B',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${anton.variable} ${manrope.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
