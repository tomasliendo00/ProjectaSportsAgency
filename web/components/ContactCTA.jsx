'use client'

import { useState } from 'react'
import { Reveal } from './ui'
import { useLang } from '@/lib/i18n'
import { submitToGoogleForm } from '@/lib/googleForm'

const REQUIRED = ['fullName', 'email', 'whatsapp']

const inputClass =
  'w-full rounded-xl border border-ink/15 bg-ink/5 px-4 py-3 text-ink placeholder-ink/45 outline-none transition focus:border-ink focus:bg-ink/10'

function HintTooltip({ text }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        aria-label={text}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-ink/40 text-[11px] font-bold leading-none text-ink/60 transition-colors hover:border-ink hover:text-ink"
      >
        ?
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute bottom-full right-0 z-20 mb-2 w-56 rounded-lg bg-ink px-3 py-2 text-left text-xs font-medium leading-snug text-bone shadow-xl"
        >
          {text}
          <span className="absolute right-2 top-full -mt-1 h-2 w-2 rotate-45 bg-ink" />
        </span>
      )}
    </span>
  )
}

function TextField({ label, value, error, required, requiredMsg, onChange, type = 'text', full = false, hint }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label + (required ? ' *' : '')}
          aria-label={label}
          className={`${inputClass} ${hint ? 'pr-11' : ''} ${error ? 'border-red-700 bg-red-700/10' : ''}`}
        />
        {hint && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            <HintTooltip text={hint} />
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-xs font-bold text-red-900">{requiredMsg}</p>}
    </div>
  )
}

function RadioField({ label, options, value, onChange }) {
  return (
    <div className="sm:col-span-2">
      <p className="mb-2 text-sm font-bold text-ink/70">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o.value
          return (
            <button
              type="button"
              key={o.value}
              onClick={() => onChange(o.value)}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                active ? 'border-ink bg-ink text-bone' : 'border-ink/20 bg-ink/5 text-ink hover:border-ink/50'
              }`}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ContactCTA() {
  const { t } = useLang()
  const c = t.cta

  const [step, setStep] = useState(1)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const setValue = (k, v) => {
    setValues((prev) => ({ ...prev, [k]: v }))
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: false }))
  }

  const validateStep1 = () => {
    const next = {}
    REQUIRED.forEach((k) => {
      if (!values[k] || !String(values[k]).trim()) next[k] = true
    })
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const goNext = (e) => {
    e.preventDefault()
    if (validateStep1()) {
      setStep(2)
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitToGoogleForm(values)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  // Stable helper — returns a <TextField> element wired to a field key.
  const text = (k, opts = {}) => (
    <TextField
      key={k}
      label={c.fields[k]}
      value={values[k] || ''}
      error={errors[k]}
      required={REQUIRED.includes(k)}
      requiredMsg={c.required}
      onChange={(v) => setValue(k, v)}
      {...opts}
    />
  )

  return (
    <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-flame py-24 text-ink lg:py-32">
      <div className="stripes pointer-events-none absolute right-0 top-0 h-full w-40 opacity-10" style={{ '--stripe': '#0A0A0B' }} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-ink/60">{c.tag}</span>
            <h2 className="mt-4 font-display display-tight text-5xl uppercase sm:text-6xl lg:text-7xl">
              {c.title}
            </h2>
            <p className="mt-5 max-w-md text-lg font-semibold text-ink/75">{c.sub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            {status === 'sent' ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border-2 border-ink/15 bg-ink/5 p-10 text-center">
                <span className="font-display text-7xl">✓</span>
                <p className="mt-4 text-xl font-bold">{c.sent}</p>
                <p className="mt-1 text-sm font-semibold text-ink/65">{c.sentSub}</p>
              </div>
            ) : (
              <form
                onSubmit={step === 1 ? goNext : handleSubmit}
                className="rounded-3xl border-2 border-ink/10 bg-bone/40 p-6 backdrop-blur-sm sm:p-8"
              >
                {/* Step header + progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink/60">
                    <span>{step === 1 ? c.step1Label : c.step2Label}</span>
                    <span>{step === 1 ? c.step1Title : c.step2Title}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/15">
                    <div
                      className="h-full rounded-full bg-ink transition-all duration-500"
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {step === 1 ? (
                    <>
                      {text('fullName', { full: true })}
                      {text('nationality')}
                      {text('dob')}
                      {text('email', { type: 'email' })}
                      {text('whatsapp', { type: 'tel' })}
                      {text('budget')}
                      {text('heightWeight')}
                      {text('address', { full: true, hint: c.addressHint })}
                      <RadioField
                        key="housing"
                        label={c.fields.housing}
                        options={c.housingOptions}
                        value={values.housing}
                        onChange={(v) => setValue('housing', v)}
                      />
                    </>
                  ) : (
                    <>
                      {text('positions')}
                      {text('foot')}
                      {text('school', { full: true })}
                      {text('background', { full: true })}
                      {text('schoolYear')}
                      {text('credits')}
                      {text('gpa')}
                      {text('majors')}
                      <RadioField
                        key="term"
                        label={c.fields.term}
                        options={c.termOptions}
                        value={values.term}
                        onChange={(v) => setValue('term', v)}
                      />
                    </>
                  )}
                </div>

                {status === 'error' && <p className="mt-4 text-sm font-bold text-red-900">{c.error}</p>}

                <div className="mt-6 flex items-center gap-3">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="rounded-xl border-2 border-ink/20 px-5 py-4 font-display text-base uppercase tracking-wide text-ink transition-colors hover:border-ink"
                    >
                      ← {c.back}
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-7 py-4 font-display text-lg uppercase tracking-wide text-bone transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {status === 'sending' ? c.sending : step === 1 ? c.next : c.submit}
                    {status !== 'sending' && <span className="transition-transform group-hover:translate-x-1">→</span>}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
