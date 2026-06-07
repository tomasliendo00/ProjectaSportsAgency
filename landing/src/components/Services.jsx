import { Reveal, SectionTag, Heading } from './ui.jsx'
import { useLang } from '../i18n.jsx'

const icons = ['◎', '✈', '▶', '◈']

export default function Services() {
  const { t } = useLang()
  const s = t.services
  return (
    <section id="services" className="relative scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTag>{s.tag}</SectionTag>
          <Heading className="max-w-2xl">{s.title}</Heading>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink p-7 transition-all hover:-translate-y-1 hover:border-flame/60">
                <div className="absolute right-4 top-4 font-display text-5xl text-line transition-colors group-hover:text-flame/20">
                  0{i + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-flame/10 text-2xl text-flame">
                  {icons[i]}
                </div>
                <h3 className="mt-6 font-display text-xl uppercase">{item.t}</h3>
                <p className="mt-2 text-sm text-bone/55">{item.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
