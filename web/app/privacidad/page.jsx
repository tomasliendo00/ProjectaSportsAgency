import PrivacidadContent from './PrivacidadContent'

export const metadata = {
  title: 'Política de Privacidad',
  description: 'Cómo Projecta Sports Agency recopila y protege tus datos. Qué pedimos, por qué, y cómo ejercer tus derechos ARCO y GDPR.',
  alternates: {
    canonical: '/privacidad',
  },
  openGraph: {
    url: '/privacidad',
    images: [{ url: '/opengraph-image' }],
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacidadPage() {
  return <PrivacidadContent />
}
