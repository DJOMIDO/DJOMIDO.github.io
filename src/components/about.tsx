import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface Stat {
  value: string
  label: string
}

export function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as unknown as string[]
  const stats = t('about.stats', { returnObjects: true }) as unknown as Stat[]

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="01." title={t('about.title')} />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="flex flex-col divide-y divide-border border-y border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 py-5">
                <dd className="font-heading text-4xl text-primary">{stat.value}</dd>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
