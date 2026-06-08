'use client'

import { motion } from 'framer-motion'

export function Logo({ className = 'h-7', full = false }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={full ? '/logo-full.png' : '/logo-psa.png'}
      alt="Projecta Sports Agency"
      className={`w-auto ${className}`}
    />
  )
}

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionTag({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-[6px] w-[6px] rotate-45 bg-flame" />
      <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-flame">
        {children}
      </span>
    </div>
  )
}

export function Heading({ children, className = '' }) {
  return (
    <h2 className={`font-display display-tight text-4xl uppercase sm:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h2>
  )
}
