import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as unknown as ExperienceItem[]

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="04." title={t('experience.title')} />
      <div className="flex flex-col">
        {items.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.05}>
            <article className="grid gap-4 border-t border-border py-10 last:border-b md:grid-cols-[11rem_1fr] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.period}
              </p>
              <div>
                <h3 className="font-heading text-2xl tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm text-primary">{item.company}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
