'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

export const content = {
  es: {
    meta: {
      title: 'Projecta Sports Agency | Becas y transferencias deportivas en USA',
      description:
        'Agencia deportiva que conecta tu talento futbolístico con becas universitarias en Estados Unidos. Te acompañamos en perfil deportivo, búsqueda universitaria, visa F-1 y elegibilidad NCAA, NAIA y NJCAA.',
    },
    nav: { about: 'Nosotros', services: 'Servicios', programs: 'Programas', profile: 'Perfil', how: 'Proceso', requirements: 'Requisitos', team: 'Equipo', testimonials: 'Testimonios', cta: 'Postular' },
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
      imgAlt1: 'Jugador disputando el balón en un partido universitario en Estados Unidos',
      imgAlt2: 'Estudiante-atleta graduándose en una universidad de Estados Unidos',
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
    player: {
      kicker: 'Así te presentamos',
      title: 'Perfil deportivo',
      sub: 'La carta de presentación que armamos para cada jugador ante las universidades: ficha, métricas y video de análisis.',
      name: 'Íñigo Capellán',
      flag: 'es',
      country: 'España',
      stats: [
        { k: 'Posición', v: 'Medio ofensivo' },
        { k: 'Edad', v: '21 años' },
        { k: 'Altura', v: '175 cm' },
        { k: 'Peso', v: '69 kg' },
        { k: 'Pie', v: 'Derecho' },
      ],
      videoLabel: 'Análisis en video',
      videoNote: 'Acciones etiquetadas y editadas para reclutadores.',
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
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: 'cl', country: 'Chile', photo: '/team/cristobal.jpg', initials: 'CC', bio: 'Comenzó su camino hacia los EE.UU. en Sport Academy, en Santiago de Chile. Compitió como estudiante-atleta en York University of Nebraska y Judson University durante 4 años, combinando el alto rendimiento deportivo con una destacada formación académica. Se graduó con doble titulación en Gestión Deportiva y Contabilidad.' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: 'ar', country: 'Argentina', photo: '/team/mateo.jpg', initials: 'MV', bio: 'Comenzó en las divisiones inferiores de Talleres de Córdoba, Argentina, antes de trasladarse a los EE.UU.. Durante 4 años se desempeñó como mediocampista ofensivo en Judson University, donde fue un referente del equipo. Obtuvo una Licenciatura en Ciencias del Ejercicio y el Deporte.' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: 'br', country: 'Brasil', photo: '/team/pedro.jpg', initials: 'PS', bio: 'Desarrolló su trayectoria académica y deportiva en Williams Baptist University, Harry S. Truman College y Judson University. Combinó la competencia de alto nivel en fútbol con una formación en Administración de Empresas, fortaleciendo habilidades de liderazgo y trabajo en equipo en entornos multiculturales.' },
      ],
    },
    testimonials: {
      tag: '07 — Testimonios',
      title: 'Lo que dicen nuestros jugadores',
      items: [
        { name: 'Tim de Kraker', flag: 'nl', country: 'Países Bajos', quote: 'Estudiar y jugar en EEUU fue una de las mejores decisiones que tomé. Me ayudó a crecer tanto como jugador como persona.' },
        { name: 'Mark Leavy', flag: 'ie', country: 'Irlanda', quote: 'La experiencia me permitió obtener un título universitario, competir a un gran nivel y crear amistades de todo el mundo.' },
        { name: 'Tiago Aguiar', flag: 'br', country: 'Brasil', quote: 'Jugar al fútbol universitario en EEUU me abrió puertas que nunca imaginé y me preparó para mi futuro dentro y fuera del deporte.' },
        { name: 'Javier Roca', flag: 'es', country: 'España', quote: 'Combinar estudios y fútbol en EEUU me permitió desarrollarme dentro y fuera de la cancha mientras conocía una nueva cultura.' },
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
        credits: 'Créditos académicos',
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
      creditsHint: 'Total de créditos (credit hours) que obtuviste en tus últimos 2 semestres. Se usa para la elegibilidad de transferencia.',
      next: 'Continuar',
      back: 'Volver',
      submit: 'Enviar postulación',
      sending: 'Enviando…',
      sent: '¡Recibido! Te contactaremos pronto.',
      sentSub: 'Gracias por postularte a Projecta Sports Agency.',
      error: 'Hubo un problema al enviar. Probá de nuevo.',
      required: 'Completá este campo',
      invalidEmail: 'Ingresá un email válido',
      invalidPhone: 'Ingresá un número válido (solo dígitos)',
      invalidDate: 'Usá el formato MM/DD/AAAA',
      invalidNumber: 'Ingresá un número válido',
      consent: 'Acepto la ',
      consentLink: 'Política de Privacidad',
      consentEnd: ' y autorizo el uso de mis datos para evaluar mi candidatura.',
      consentRequired: 'Debés aceptar la política de privacidad para continuar.',
    },
    footer: {
      tagline: 'Becas y transferencias deportivas en USA.',
      nav: 'Navegación',
      contact: 'Contacto',
      social: 'Redes',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
    },
  },
  en: {
    meta: {
      title: 'Projecta Sports Agency | Athletic scholarships and transfers in the USA',
      description:
        'Sports agency connecting your football talent with university scholarships in the United States. We guide you through athletic profile, university search, F-1 visa and NCAA, NAIA and NJCAA eligibility.',
    },
    nav: { about: 'About', services: 'Services', programs: 'Programs', profile: 'Profile', how: 'Process', requirements: 'Requirements', team: 'Team', testimonials: 'Testimonials', cta: 'Apply' },
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
      imgAlt1: 'Player contesting the ball in a US college soccer match',
      imgAlt2: 'Student-athlete graduating from a US university',
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
    player: {
      kicker: 'How we present you',
      title: 'Athletic profile',
      sub: 'The calling card we build for every player in front of US universities: data sheet, metrics and analysis footage.',
      name: 'Íñigo Capellán',
      flag: 'es',
      country: 'Spain',
      stats: [
        { k: 'Position', v: 'Attacking mid' },
        { k: 'Age', v: '21 years' },
        { k: 'Height', v: '175 cm' },
        { k: 'Weight', v: '69 kg' },
        { k: 'Foot', v: 'Right' },
      ],
      videoLabel: 'Video analysis',
      videoNote: 'Tagged and edited actions for recruiters.',
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
        { name: 'Cristóbal Corral', role: 'Co-Founder & Agent', flag: 'cl', country: 'Chile', photo: '/team/cristobal.jpg', initials: 'CC', bio: 'Started his path to the US at Sport Academy in Santiago, Chile. Competed as a student-athlete at York University of Nebraska and Judson University for 4 years, balancing high-level athletics with outstanding academic performance. Graduated with a double degree in Sport Management and Accounting.' },
        { name: 'Mateo Vadora', role: 'Co-Founder & Agent', flag: 'ar', country: 'Argentina', photo: '/team/mateo.jpg', initials: 'MV', bio: 'Started in the youth divisions of Talleres de Córdoba, Argentina, before moving to the US. Played as an attacking midfielder at Judson University for 4 years, becoming a key figure on the team. Earned a Bachelor\'s degree in Exercise and Sports Science.' },
        { name: 'Pedro Storani', role: 'Recruiting Coordinator', flag: 'br', country: 'Brazil', photo: '/team/pedro.jpg', initials: 'PS', bio: 'Built his academic and athletic career across Williams Baptist University, Harry S. Truman College, and Judson University. Combined high-level soccer competition with a Business Management degree, developing leadership, teamwork, and adaptability in multicultural environments.' },
      ],
    },
    testimonials: {
      tag: '07 — Testimonials',
      title: 'What our players say',
      items: [
        { name: 'Tim de Kraker', flag: 'nl', country: 'Netherlands', quote: 'Studying and playing in the US was one of the best decisions I made. It helped me grow both as a player and as a person.' },
        { name: 'Mark Leavy', flag: 'ie', country: 'Ireland', quote: 'The experience allowed me to earn a university degree, compete at a high level and build friendships from all over the world.' },
        { name: 'Tiago Aguiar', flag: 'br', country: 'Brazil', quote: 'Playing college soccer in the US opened doors I never imagined and prepared me for my future on and off the pitch.' },
        { name: 'Javier Roca', flag: 'es', country: 'Spain', quote: 'Combining studies and football in the US allowed me to develop on and off the field while discovering a new culture.' },
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
        credits: 'Academic credits',
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
      creditsHint: 'Total credit hours you earned in your last 2 semesters. Used for transfer eligibility.',
      next: 'Continue',
      back: 'Back',
      submit: 'Submit application',
      sending: 'Sending…',
      sent: 'Received! We will contact you soon.',
      sentSub: 'Thanks for applying to Projecta Sports Agency.',
      error: 'Something went wrong. Please try again.',
      required: 'Please fill this field',
      invalidEmail: 'Enter a valid email',
      invalidPhone: 'Enter a valid number (digits only)',
      invalidDate: 'Use the MM/DD/YYYY format',
      invalidNumber: 'Enter a valid number',
      consent: 'I accept the ',
      consentLink: 'Privacy Policy',
      consentEnd: ' and authorize the use of my data to evaluate my application.',
      consentRequired: 'You must accept the privacy policy to continue.',
    },
    footer: {
      tagline: 'Athletic scholarships and transfers in the USA.',
      nav: 'Navigation',
      contact: 'Contact',
      social: 'Social',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const toggle = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])

  // Keep the document <title>, meta description and <html lang> in sync with the
  // active language (metadata is server-rendered in Spanish for SEO; this updates
  // it client-side when the user toggles).
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content[lang].meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', content[lang].meta.description)
  }, [lang])

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
