'use client'

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
        { t: 'Graduado', d: 'Haber completado high school, secundaria o enseñanza media.' },
        { t: 'TOEFL / Duolingo', tag: 'Obligatorio', d: 'Examen de medición de inglés. Se evalúan 4 aspectos.' },
        { t: 'GPA', d: 'Promedio de secundaria sobre 2.0 para ser elegible para competir.' },
        { t: 'SAT', tag: 'Opcional', d: 'Prueba de lectura, escritura y matemáticas.' },
      ],
    },
    team: {
      tag: '06 — Equipo',
      title: 'Team Projecta',
      members: [
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: 'cl', photo: '/team/cristobal.jpg', initials: 'CC' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: 'ar', photo: '/team/mateo.jpg', initials: 'MV' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: 'br', photo: '/team/pedro.jpg', initials: 'PS' },
      ],
    },
    cta: {
      tag: 'Da el primer paso',
      title: 'Tu sueño empieza con una conversación',
      sub: 'Completá tu perfil de jugador y empezamos a construir tu camino a Estados Unidos.',
      step1Label: 'Paso 1 de 2',
      step1Title: 'Datos personales',
      step2Label: 'Paso 2 de 2',
      step2Title: 'Perfil deportivo y académico',
      fields: {
        fullName: 'Nombre completo',
        nationality: 'Nacionalidad',
        dob: 'Fecha de nac. (MM/DD/AAAA)',
        address: 'Dirección postal en EE.UU.',
        email: 'Email',
        whatsapp: 'Número de WhatsApp',
        budget: 'Presupuesto anual (USD)',
        housing: 'Preferencia de alojamiento',
        heightWeight: 'Altura y peso',
        positions: 'Posición(es)',
        foot: 'Pie hábil',
        school: 'Institución actual (secundaria o universidad)',
        background: 'Trayectoria deportiva (equipos anteriores)',
        schoolYear: 'Año académico',
        credits: 'Créditos obtenidos (últimos 2 semestres)',
        gpa: 'GPA',
        majors: 'Carrera(s)',
        term: 'Período al que aplicás',
      },
      housingOptions: [
        { label: 'En campus', value: 'On Campus' },
        { label: 'Fuera del campus', value: 'Off Campus' },
        { label: 'Ambas', value: 'Open to both' },
      ],
      termOptions: [
        { label: 'Otoño (Fall)', value: 'Fall' },
        { label: 'Primavera (Spring)', value: 'Spring' },
      ],
      addressHint: 'Podrías recibir merchandising de Projecta.',
      next: 'Continuar',
      back: 'Volver',
      submit: 'Enviar postulación',
      sending: 'Enviando…',
      sent: '¡Recibido! Te contactaremos pronto.',
      sentSub: 'Gracias por postularte a Projecta Sports Agency.',
      error: 'Hubo un problema al enviar. Probá de nuevo.',
      required: 'Completá este campo',
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
        { t: 'Graduate', d: 'Completed high school or equivalent secondary education.' },
        { t: 'TOEFL / Duolingo', tag: 'Mandatory', d: 'English proficiency test evaluating 4 areas.' },
        { t: 'GPA', d: 'Secondary GPA above 2.0 to be eligible to compete.' },
        { t: 'SAT', tag: 'Optional', d: 'Reading, writing and mathematics test.' },
      ],
    },
    team: {
      tag: '06 — Team',
      title: 'Team Projecta',
      members: [
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: 'cl', photo: '/team/cristobal.jpg', initials: 'CC' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: 'ar', photo: '/team/mateo.jpg', initials: 'MV' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: 'br', photo: '/team/pedro.jpg', initials: 'PS' },
      ],
    },
    cta: {
      tag: 'Take the first step',
      title: 'Your dream starts with a conversation',
      sub: 'Complete your player profile and we will start building your path to the United States.',
      step1Label: 'Step 1 of 2',
      step1Title: 'Personal details',
      step2Label: 'Step 2 of 2',
      step2Title: 'Athletic & academic profile',
      fields: {
        fullName: 'Full name',
        nationality: 'Nationality',
        dob: 'Date of birth (MM/DD/YYYY)',
        address: 'US mailing address',
        email: 'Email',
        whatsapp: 'WhatsApp number',
        budget: 'Annual budget (USD)',
        housing: 'Housing preference',
        heightWeight: 'Height & weight',
        positions: 'Position(s)',
        foot: 'Dominant foot',
        school: 'Current school (high school or college)',
        background: 'Athletic background (previous teams)',
        schoolYear: 'School year',
        credits: 'Total credits earned (last 2 semesters)',
        gpa: 'GPA',
        majors: 'Major(s)',
        term: 'Term applying to',
      },
      housingOptions: [
        { label: 'On campus', value: 'On Campus' },
        { label: 'Off campus', value: 'Off Campus' },
        { label: 'Both', value: 'Open to both' },
      ],
      termOptions: [
        { label: 'Fall', value: 'Fall' },
        { label: 'Spring', value: 'Spring' },
      ],
      addressHint: 'You may be receiving Projecta merch.',
      next: 'Continue',
      back: 'Back',
      submit: 'Submit application',
      sending: 'Sending…',
      sent: 'Received! We will contact you soon.',
      sentSub: 'Thanks for applying to Projecta Sports Agency.',
      error: 'Something went wrong. Please try again.',
      required: 'Please fill this field',
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
      if (typeof document !== 'undefined') document.documentElement.lang = next
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
