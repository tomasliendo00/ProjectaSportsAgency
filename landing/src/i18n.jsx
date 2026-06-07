import { createContext, useContext, useState, useCallback } from 'react'

export const content = {
  es: {
    nav: { about: 'Nosotros', services: 'Servicios', programs: 'Programas', how: 'Proceso', team: 'Equipo', cta: 'Postular' },
    hero: {
      kicker: 'Agencia Deportiva',
      title1: 'PROJECTA',
      title2: 'SPORTS AGENCY',
      sub: 'Becas y transferencias deportivas en Estados Unidos.',
      lead: 'Convertimos tu talento en una oportunidad real para construir tu futuro académico y futbolístico.',
      cta: 'Comienza tu proceso',
      ctaAlt: 'Ver programas',
      stat1: '+5', stat1l: 'años de experiencia',
      stat2: '3', stat2l: 'asociaciones (NCAA · NAIA · NJCAA)',
      stat3: 'F-1', stat3l: 'gestión de visa estudiantil',
    },
    marquee: ['BECAS', 'TRANSFER PORTAL', 'VISA F-1', 'NCAA', 'NAIA', 'NJCAA', 'PERFIL DEPORTIVO', 'RECLUTAMIENTO'],
    about: {
      tag: '01 — Quiénes somos',
      title: 'Tu conexión entre el fútbol y la academia',
      body: 'Somos una agencia deportiva dedicada al apoyo de jugadores en el proceso de becas en los Estados Unidos. Te acompañamos en todo el proceso de reclutamiento: búsqueda universitaria, creación de perfil deportivo y procesos de visa.',
      points: [
        'Somos la conexión entre tu sueño futbolístico y tu meta académica.',
        'Convertimos tu talento en una oportunidad real para construir tu futuro.',
        'Liderados por jóvenes ex deportistas universitarios con más de 5 años de experiencia.',
      ],
    },
    services: {
      tag: '02 — Qué hacemos',
      title: 'Un acompañamiento integral',
      items: [
        { t: 'Búsqueda de becas', d: 'Acercamiento universitario y gestión de ofertas acorde a tu perfil.' },
        { t: 'Asesoramiento de visa F-1', d: 'Acompañamiento completo para la obtención de tu visa de estudiante.' },
        { t: 'Video deportivo', d: 'Grabación y edición profesional de tu material para reclutadores.' },
        { t: 'Evaluación psicodeportiva', d: 'Análisis profesional del jugador dentro y fuera de la cancha.' },
      ],
    },
    programs: {
      tag: '03 — Programas',
      title: 'Dos caminos hacia USA',
      items: [
        { n: '01', t: 'Projecta', d: 'Proceso de preparación académica, deportiva y migratoria. Para jugadores que están comenzando su camino hacia Estados Unidos.' },
        { n: '02', t: 'Transfer Portal', d: 'Para jugadores ya situados en USA que buscan transferirse de una universidad a otra.' },
      ],
      assoc: ['NCAA', 'NAIA', 'NJCAA'],
    },
    how: {
      tag: '04 — Cómo funciona',
      title: 'El proceso, paso a paso',
      steps: [
        { t: 'Perfil deportivo', d: 'Generamos tu perfil deportivo: tu carta de presentación ante las universidades.' },
        { t: 'Ofertas de beca', d: 'Gestionamos ofertas acorde a tu perfil deportivo, académico y presupuesto.' },
        { t: 'Preparación y elegibilidad', d: 'Te guiamos en la preparación académica, el visado y la elegibilidad.' },
        { t: 'Visa y arribo', d: 'Te preparamos para los procedimientos de visa previo a tu llegada a USA.' },
      ],
    },
    reqs: {
      tag: '05 — Requisitos',
      title: 'Lo que necesitás para calificar',
      items: [
        { t: 'Graduado', tag: 'Requerido', d: 'Haber completado high school, secundaria o enseñanza media.' },
        { t: 'TOEFL / Duolingo', tag: 'Obligatorio', d: 'Examen de medición de inglés. Se evalúan 4 aspectos.' },
        { t: 'GPA', tag: 'Elegibilidad', d: 'Promedio de secundaria sobre 2.0 para ser elegible para competir.' },
        { t: 'SAT', tag: 'Opcional', d: 'Prueba de lectura, escritura y matemáticas.' },
      ],
    },
    team: {
      tag: '06 — Equipo',
      title: 'Team Projecta',
      members: [
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: '🇨🇱', initials: 'CC' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: '🇦🇷', initials: 'MV' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: '🇧🇷', initials: 'PS' },
      ],
    },
    cta: {
      tag: 'Da el primer paso',
      title: 'Tu sueño empieza con una conversación',
      sub: 'Contanos sobre vos y empezamos a construir tu camino a Estados Unidos.',
      name: 'Nombre completo',
      email: 'Email',
      position: 'Posición / Deporte',
      message: 'Contanos tu situación actual',
      submit: 'Postula ahora',
      sent: '¡Recibido! Te contactaremos pronto.',
    },
    footer: {
      tagline: 'Becas y transferencias deportivas en USA.',
      nav: 'Navegación',
      contact: 'Contacto',
      social: 'Redes',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: { about: 'About', services: 'Services', programs: 'Programs', how: 'Process', team: 'Team', cta: 'Apply' },
    hero: {
      kicker: 'Sports Agency',
      title1: 'PROJECTA',
      title2: 'SPORTS AGENCY',
      sub: 'Athletic scholarships and transfers in the United States.',
      lead: 'We turn your talent into a real opportunity to build your academic and football future.',
      cta: 'Start your process',
      ctaAlt: 'See programs',
      stat1: '+5', stat1l: 'years of experience',
      stat2: '3', stat2l: 'associations (NCAA · NAIA · NJCAA)',
      stat3: 'F-1', stat3l: 'student visa handling',
    },
    marquee: ['SCHOLARSHIPS', 'TRANSFER PORTAL', 'F-1 VISA', 'NCAA', 'NAIA', 'NJCAA', 'ATHLETIC PROFILE', 'RECRUITMENT'],
    about: {
      tag: '01 — Who we are',
      title: 'Your bridge between football and academics',
      body: 'We are a sports agency dedicated to supporting players through the scholarship process in the United States. We guide you through the entire recruitment journey: university search, athletic profile creation and visa processes.',
      points: [
        'We are the link between your football dream and your academic goal.',
        'We turn your talent into a real opportunity to build your future.',
        'Led by young former college athletes with over 5 years of experience.',
      ],
    },
    services: {
      tag: '02 — What we do',
      title: 'End-to-end guidance',
      items: [
        { t: 'Scholarship search', d: 'University outreach and offer management tailored to your profile.' },
        { t: 'F-1 visa advisory', d: 'Full support to obtain your student visa.' },
        { t: 'Athletic video', d: 'Professional recording and editing of your footage for recruiters.' },
        { t: 'Psycho-sport evaluation', d: 'Professional analysis of the player on and off the pitch.' },
      ],
    },
    programs: {
      tag: '03 — Programs',
      title: 'Two paths to the USA',
      items: [
        { n: '01', t: 'Projecta', d: 'Academic, athletic and immigration preparation. For players just starting their journey to the United States.' },
        { n: '02', t: 'Transfer Portal', d: 'For players already in the USA looking to transfer from one university to another.' },
      ],
      assoc: ['NCAA', 'NAIA', 'NJCAA'],
    },
    how: {
      tag: '04 — How it works',
      title: 'The process, step by step',
      steps: [
        { t: 'Athletic profile', d: 'We build your athletic profile: your calling card for universities.' },
        { t: 'Scholarship offers', d: 'We manage offers based on your athletic, academic and budget profile.' },
        { t: 'Prep & eligibility', d: 'We guide you through academic prep, visa and eligibility.' },
        { t: 'Visa & arrival', d: 'We prepare you for the visa procedures before your arrival in the USA.' },
      ],
    },
    reqs: {
      tag: '05 — Requirements',
      title: 'What you need to qualify',
      items: [
        { t: 'Graduate', tag: 'Required', d: 'Completed high school or equivalent secondary education.' },
        { t: 'TOEFL / Duolingo', tag: 'Mandatory', d: 'English proficiency test evaluating 4 areas.' },
        { t: 'GPA', tag: 'Eligibility', d: 'Secondary GPA above 2.0 to be eligible to compete.' },
        { t: 'SAT', tag: 'Optional', d: 'Reading, writing and mathematics test.' },
      ],
    },
    team: {
      tag: '06 — Team',
      title: 'Team Projecta',
      members: [
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: '🇨🇱', initials: 'CC' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: '🇦🇷', initials: 'MV' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: '🇧🇷', initials: 'PS' },
      ],
    },
    cta: {
      tag: 'Take the first step',
      title: 'Your dream starts with a conversation',
      sub: 'Tell us about yourself and we will start building your path to the United States.',
      name: 'Full name',
      email: 'Email',
      position: 'Position / Sport',
      message: 'Tell us about your current situation',
      submit: 'Apply now',
      sent: 'Received! We will contact you soon.',
    },
    footer: {
      tagline: 'Athletic scholarships and transfers in the USA.',
      nav: 'Navigation',
      contact: 'Contact',
      social: 'Social',
      rights: 'All rights reserved.',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const toggle = useCallback(() => {
    setLang((l) => {
      const next = l === 'es' ? 'en' : 'es'
      document.documentElement.lang = next
      return next
    })
  }, [])
  const t = content[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
