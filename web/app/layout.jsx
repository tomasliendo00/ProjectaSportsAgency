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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.projectasports.com'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Projecta Sports Agency | Becas y transferencias deportivas en USA',
    template: '%s · Projecta Sports Agency',
  },
  description:
    'Agencia deportiva especializada en becas y transferencias futbolísticas a universidades de EE.UU. Perfil deportivo, visa F-1 y elegibilidad NCAA, NAIA y NJCAA.',
  keywords: [
    'becas deportivas USA', 'becas de fútbol', 'NCAA', 'NAIA', 'NJCAA',
    'visa F-1', 'transfer portal', 'agencia deportiva', 'reclutamiento universitario',
  ],
  authors: [{ name: 'Projecta Sports Agency' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Projecta Sports Agency',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    'Agencia deportiva que conecta tu talento futbolístico con becas universitarias en Estados Unidos. Te acompañamos en perfil deportivo, búsqueda universitaria, visa F-1 y elegibilidad NCAA, NAIA y NJCAA.',
  sameAs: ['https://www.instagram.com/projectasports/'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hola@projectasports.com',
    contactType: 'customer service',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${anton.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
