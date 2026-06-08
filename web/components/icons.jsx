// Custom line-icon set for the services — drawn to echo the deck's iconography
// (graduation, travel/visa, video, evaluation). currentColor + 1.5 stroke.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ScholarshipIcon({ className = '' }) {
  return (
    <svg className={className} {...base} aria-hidden>
      <path d="M2.5 9 L12 4.2 L21.5 9 L12 13.8 Z" />
      <path d="M6.2 11 V16 C6.2 17.4 8.8 18.8 12 18.8 C15.2 18.8 17.8 17.4 17.8 16 V11" />
      <path d="M21.5 9 V14" />
      <circle cx="21.5" cy="14.7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function VisaIcon({ className = '' }) {
  return (
    <svg className={className} {...base} aria-hidden>
      <path d="M21.5 3 L3 10.6 L9.6 12.4 L11.4 19 Z" />
      <path d="M9.6 12.4 L21.5 3" />
    </svg>
  )
}

export function VideoIcon({ className = '' }) {
  return (
    <svg className={className} {...base} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="M3 9 L21 9" />
      <path d="M10 12 L14.5 14.5 L10 17 Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function EvaluationIcon({ className = '' }) {
  return (
    <svg className={className} {...base} aria-hidden>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M6.4 12 H9 L10.5 8.4 L13 15.6 L14.4 12 H17.6" />
    </svg>
  )
}

export function ArrowMark({ className = '' }) {
  return (
    <svg className={className} {...base} aria-hidden>
      <path d="M7 7 L17 17" />
      <path d="M17 8.5 V17 H8.5" />
    </svg>
  )
}

export const serviceIcons = [ScholarshipIcon, VisaIcon, VideoIcon, EvaluationIcon]
