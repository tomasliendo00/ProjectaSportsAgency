import TerminosContent from './TerminosContent'

export const metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de Projecta Sports Agency. Naturaleza del servicio de becas deportivas en EE.UU., responsabilidades y ley aplicable.',
  alternates: {
    canonical: '/terminos',
  },
  openGraph: {
    url: '/terminos',
    images: [{ url: '/opengraph-image' }],
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TerminosPage() {
  return <TerminosContent />
}
