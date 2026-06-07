import { Reveal, SectionTag, Heading } from './ui.jsx'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  const a = t.about
  return (
    <section id="about" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionTag>{a.tag}</SectionTag>
              <Heading>{a.title}</Heading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg text-bone/65">{a.body}</p>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {a.points.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group flex gap-5 bg-surface p-7 transition-colors hover:bg-surface2">
                  <span className="font-display text-3xl text-flame">↘</span>
                  <p className="text-lg font-semibold leading-snug">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
