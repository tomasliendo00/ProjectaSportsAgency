'use client'

import LegalHeader from '@/components/LegalHeader'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

const CONTENT = {
  es: {
    label: 'Legal',
    title: 'Términos y Condiciones',
    updated: 'Última actualización: julio de 2026',
    intro: 'Al acceder a projectasports.com y utilizar los servicios de Projecta Sports Agency, aceptás los siguientes términos. Te pedimos que los leas detenidamente.',
    sections: [
      {
        h: '1. Objeto',
        body: 'Los presentes Términos y Condiciones regulan el acceso y uso del sitio web projectasports.com y los servicios de asesoramiento deportivo ofrecidos por Projecta Sports Agency (en adelante, "Projecta").',
      },
      {
        h: '2. Naturaleza del servicio',
        body: 'Projecta presta servicios de consultoría y asesoramiento para la obtención de becas deportivas y transferencias universitarias en Estados Unidos. Estos servicios pueden incluir:',
        list: [
          'Creación y gestión del perfil deportivo del jugador.',
          'Contacto y seguimiento con universidades y programas deportivos.',
          'Asesoramiento sobre elegibilidad NCAA, NAIA y NJCAA.',
          'Acompañamiento en el proceso de visa estudiantil F-1.',
          'Producción de material de video deportivo.',
        ],
      },
      {
        h: '3. Ausencia de garantía de resultados',
        body: 'Projecta no garantiza la obtención de ninguna beca, oferta universitaria ni visa. Los resultados dependen de múltiples factores externos —como las decisiones de cada universidad, el perfil del jugador y las condiciones del mercado— que están fuera del control de Projecta. Nuestro compromiso es brindarte el mejor asesoramiento y gestión posibles.',
      },
      {
        h: '4. Veracidad de la información',
        body: 'El usuario se compromete a proporcionar información veraz, completa y actualizada en el formulario de postulación y en toda comunicación con Projecta. La provisión de información falsa o incompleta puede derivar en la cancelación del proceso sin reembolso.',
      },
      {
        h: '5. Obligaciones del usuario',
        body: 'Al utilizar el sitio web y los servicios de Projecta, el usuario se compromete a:',
        list: [
          'No utilizar el sitio ni los servicios con fines fraudulentos o ilegales.',
          'No reproducir, distribuir ni usar el contenido del sitio sin autorización expresa.',
          'Cumplir con los términos específicos de los acuerdos firmados con Projecta.',
        ],
      },
      {
        h: '6. Propiedad intelectual',
        body: 'Todos los contenidos del sitio web —incluyendo textos, imágenes, logos y diseño— son propiedad de Projecta Sports Agency o se utilizan bajo licencia. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa y por escrito de Projecta.',
      },
      {
        h: '7. Limitación de responsabilidad',
        body: 'En la medida permitida por la legislación aplicable, Projecta no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso del sitio web o de los servicios, incluyendo pérdidas de oportunidades, ingresos o datos.',
      },
      {
        h: '8. Modificaciones',
        body: 'Projecta se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización. El uso continuado del sitio o de los servicios tras la publicación de los cambios implica la aceptación de los nuevos términos.',
      },
      {
        h: '9. Ley aplicable y resolución de conflictos',
        body: 'Estos Términos se rigen por la legislación aplicable en el país de operación de Projecta Sports Agency. Ante cualquier controversia derivada del uso del sitio o de los servicios, las partes procurarán una solución amistosa antes de acudir a instancias judiciales.',
      },
      {
        h: '10. Contacto',
        body: 'Para consultas sobre estos Términos y Condiciones: hola@projectasports.com',
      },
    ],
    also: '¿Buscás la Política de Privacidad?',
    alsoLink: 'Ver Política de Privacidad',
    alsoHref: '/privacidad',
  },
  en: {
    label: 'Legal',
    title: 'Terms & Conditions',
    updated: 'Last updated: July 2026',
    intro: 'By accessing projectasports.com and using the services of Projecta Sports Agency, you accept the following terms. We ask that you read them carefully.',
    sections: [
      {
        h: '1. Purpose',
        body: 'These Terms and Conditions govern access to and use of projectasports.com and the sports advisory services offered by Projecta Sports Agency (hereinafter "Projecta").',
      },
      {
        h: '2. Nature of Services',
        body: 'Projecta provides consulting and advisory services for obtaining sports scholarships and university transfers in the United States. These services may include:',
        list: [
          'Creation and management of the player\'s athletic profile.',
          'Outreach and follow-up with universities and athletic programs.',
          'Advisory on NCAA, NAIA and NJCAA eligibility.',
          'Support throughout the F-1 student visa process.',
          'Production of athletic video material.',
        ],
      },
      {
        h: '3. No Guarantee of Results',
        body: 'Projecta does not guarantee the obtainment of any scholarship, university offer or visa. Results depend on multiple external factors —such as each university\'s decisions, the player\'s profile and market conditions— that are outside Projecta\'s control. Our commitment is to provide you with the best possible advisory and management.',
      },
      {
        h: '4. Accuracy of Information',
        body: 'The user agrees to provide truthful, complete and up-to-date information in the application form and in all communications with Projecta. Providing false or incomplete information may result in cancellation of the process without refund.',
      },
      {
        h: '5. User Obligations',
        body: 'By using the website and services of Projecta, the user agrees to:',
        list: [
          'Not use the site or services for fraudulent or illegal purposes.',
          'Not reproduce, distribute or use site content without express authorization.',
          'Comply with the specific terms of agreements signed with Projecta.',
        ],
      },
      {
        h: '6. Intellectual Property',
        body: 'All website content —including texts, images, logos and design— is the property of Projecta Sports Agency or is used under license. Reproduction, distribution or commercial use without express written authorization from Projecta is prohibited.',
      },
      {
        h: '7. Limitation of Liability',
        body: "To the extent permitted by applicable law, Projecta shall not be liable for indirect, incidental, special or consequential damages arising from the use of the website or services, including loss of opportunities, revenue or data.",
      },
      {
        h: '8. Modifications',
        body: 'Projecta reserves the right to modify these Terms at any time. Changes will be published on this page with the update date. Continued use of the site or services after the publication of changes implies acceptance of the new terms.',
      },
      {
        h: '9. Governing Law and Dispute Resolution',
        body: 'These Terms are governed by the applicable law in the country of operation of Projecta Sports Agency. In the event of any dispute arising from the use of the site or services, the parties will seek an amicable resolution before resorting to legal proceedings.',
      },
      {
        h: '10. Contact',
        body: 'For inquiries about these Terms and Conditions: hola@projectasports.com',
      },
    ],
    also: 'Looking for the Privacy Policy?',
    alsoLink: 'View Privacy Policy',
    alsoHref: '/privacidad',
  },
}

export default function TerminosContent() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <div className="grain relative min-h-screen bg-ink">
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">{c.label}</span>
          <h1 className="mt-3 font-display text-5xl uppercase text-bone lg:text-6xl">{c.title}</h1>
          <p className="mt-3 text-xs text-bone/35">{c.updated}</p>
          <p className="mt-6 leading-relaxed text-bone/65">{c.intro}</p>
        </div>

        <div className="space-y-8">
          {c.sections.map((s, i) => (
            <div key={i} className="border-t border-line pt-8">
              <h2 className="font-semibold text-bone">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{s.body}</p>
              {s.list && (
                <ul className="mt-3 space-y-2">
                  {s.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-bone/60">
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45 bg-flame" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-8 text-sm text-bone/40">
          {c.also}{' '}
          <a href={c.alsoHref} className="text-flame underline hover:text-flame/80">
            {c.alsoLink}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
