'use client'

import LegalHeader from '@/components/LegalHeader'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

const CONTENT = {
  es: {
    label: 'Legal',
    title: 'Política de Privacidad',
    updated: 'Última actualización: julio de 2026',
    intro: 'En Projecta Sports Agency nos comprometemos a proteger tu privacidad. Esta política describe qué datos recopilamos, cómo los utilizamos y cuáles son tus derechos.',
    sections: [
      {
        h: '1. Responsable del tratamiento',
        body: 'Projecta Sports Agency (en adelante, "Projecta"), con email de contacto hola@projectasports.com, es el responsable del tratamiento de los datos personales recabados a través de este sitio web.',
      },
      {
        h: '2. Datos que recopilamos',
        body: 'A través del formulario de postulación podemos recopilar los siguientes datos:',
        list: [
          'Nombre completo y nacionalidad',
          'Fecha de nacimiento',
          'Dirección postal en EE.UU.',
          'Email y número de WhatsApp',
          'Presupuesto anual estimado',
          'Datos físicos: altura y peso',
          'Perfil deportivo: posición, pie hábil, trayectoria y equipos anteriores',
          'Perfil académico: institución, GPA, créditos, carrera y año académico',
        ],
      },
      {
        h: '3. Finalidad del tratamiento',
        body: 'Tus datos se utilizan exclusivamente para:',
        list: [
          'Evaluar tu candidatura para becas y transferencias deportivas en EE.UU.',
          'Contactarte con información sobre el proceso y las oportunidades disponibles.',
          'Gestionar la relación de servicio entre vos y Projecta.',
        ],
      },
      {
        h: '4. Base legal',
        body: 'El tratamiento de tus datos se basa en el consentimiento explícito que otorgás al completar y enviar el formulario de postulación. Podés retirar ese consentimiento en cualquier momento escribiéndonos a hola@projectasports.com, sin que ello afecte la licitud del tratamiento previo a la retirada.',
      },
      {
        h: '5. Transferencia a terceros — Google',
        body: 'El formulario de postulación utiliza Google Forms, un servicio de Google LLC. Al enviar el formulario, tus datos se transmiten y almacenan en los servidores de Google, que actúa como encargado del tratamiento de conformidad con sus propias políticas de privacidad, disponibles en policies.google.com/privacy. No compartimos tus datos con ningún otro tercero sin tu consentimiento previo.',
      },
      {
        h: '6. Conservación de datos',
        body: 'Conservamos tus datos mientras exista una relación activa contigo o mientras sea necesario para gestionar tu proceso. Podés solicitar la eliminación de tus datos en cualquier momento contactándonos en hola@projectasports.com.',
      },
      {
        h: '7. Tus derechos',
        body: 'Tenés derecho a:',
        list: [
          'Acceder a los datos que tenemos sobre vos.',
          'Rectificar datos inexactos o desactualizados.',
          'Solicitar la eliminación de tus datos.',
          'Oponerte al tratamiento o solicitar su limitación.',
          'Retirar tu consentimiento en cualquier momento.',
          'Portabilidad de datos, en los casos previstos por la legislación aplicable.',
        ],
        footer: 'Para ejercer cualquiera de estos derechos, escribinos a hola@projectasports.com.',
      },
      {
        h: '8. Menores de edad',
        body: 'Si tenés menos de 18 años, el uso del formulario requiere el consentimiento expreso de un padre, madre o tutor legal. Al enviar el formulario, declarás contar con dicho consentimiento.',
      },
      {
        h: '9. Usuarios de la Unión Europea (GDPR)',
        body: 'Si residís en la Unión Europea, el tratamiento de tus datos está adicionalmente sujeto al Reglamento General de Protección de Datos (GDPR). Tenés derecho a presentar una reclamación ante la autoridad de protección de datos de tu país de residencia.',
      },
      {
        h: '10. Cambios en esta política',
        body: 'Podemos actualizar esta política en cualquier momento. La fecha de última actualización aparece al inicio del documento. Te recomendamos revisarla periódicamente.',
      },
      {
        h: '11. Contacto',
        body: 'Para cualquier consulta sobre privacidad: hola@projectasports.com',
      },
    ],
    also: '¿Buscás los Términos y Condiciones?',
    alsoLink: 'Ver Términos y Condiciones',
    alsoHref: '/terminos',
  },
  en: {
    label: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    intro: 'At Projecta Sports Agency we are committed to protecting your privacy. This policy describes what data we collect, how we use it, and what your rights are.',
    sections: [
      {
        h: '1. Data Controller',
        body: 'Projecta Sports Agency (hereinafter "Projecta"), contact email hola@projectasports.com, is the controller of personal data collected through this website.',
      },
      {
        h: '2. Data We Collect',
        body: 'Through the application form we may collect the following data:',
        list: [
          'Full name and nationality',
          'Date of birth',
          'US mailing address',
          'Email and WhatsApp number',
          'Estimated annual budget',
          'Physical data: height and weight',
          'Athletic profile: position, dominant foot, background and previous teams',
          'Academic profile: institution, GPA, credits, major and school year',
        ],
      },
      {
        h: '3. Purpose',
        body: 'Your data is used exclusively to:',
        list: [
          'Evaluate your candidacy for sports scholarships and transfers in the USA.',
          'Contact you with information about the process and available opportunities.',
          'Manage the service relationship between you and Projecta.',
        ],
      },
      {
        h: '4. Legal Basis',
        body: 'The processing of your data is based on the explicit consent you give when completing and submitting the application form. You may withdraw that consent at any time by writing to hola@projectasports.com, without affecting the lawfulness of processing prior to withdrawal.',
      },
      {
        h: '5. Transfer to Third Parties — Google',
        body: "The application form uses Google Forms, a service by Google LLC. When you submit the form, your data is transmitted to and stored on Google's servers, which acts as a data processor under its own privacy policies, available at policies.google.com/privacy. We do not share your data with any other third party without your prior consent.",
      },
      {
        h: '6. Data Retention',
        body: 'We retain your data while there is an active relationship with you or as long as necessary to manage your process. You may request deletion of your data at any time by contacting us at hola@projectasports.com.',
      },
      {
        h: '7. Your Rights',
        body: 'You have the right to:',
        list: [
          'Access the data we hold about you.',
          'Rectify inaccurate or outdated data.',
          'Request deletion of your data.',
          'Object to processing or request its restriction.',
          'Withdraw your consent at any time.',
          'Data portability, where provided by applicable law.',
        ],
        footer: 'To exercise any of these rights, contact us at hola@projectasports.com.',
      },
      {
        h: '8. Minors',
        body: 'If you are under 18 years of age, use of the form requires the express consent of a parent or legal guardian. By submitting the form, you declare that such consent has been obtained.',
      },
      {
        h: '9. EU Users (GDPR)',
        body: 'If you reside in the European Union, the processing of your data is additionally subject to the General Data Protection Regulation (GDPR). You have the right to lodge a complaint with the data protection authority in your country of residence.',
      },
      {
        h: '10. Changes to This Policy',
        body: 'We may update this policy at any time. The last updated date appears at the beginning of this document. We recommend reviewing it periodically.',
      },
      {
        h: '11. Contact',
        body: 'For any privacy-related questions: hola@projectasports.com',
      },
    ],
    also: 'Looking for the Terms & Conditions?',
    alsoLink: 'View Terms & Conditions',
    alsoHref: '/terminos',
  },
}

export default function PrivacidadPage() {
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
              {s.footer && <p className="mt-3 text-sm leading-relaxed text-bone/60">{s.footer}</p>}
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
