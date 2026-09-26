import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface EducationItem {
  degree: string
  school: string
  period: string
  description?: string
  url?: string
}

export function Education() {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true }) as unknown as EducationItem[]

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="05." title={t('education.title')} />
      <div className="flex flex-col">
        {items.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.05}>
            <article className="grid gap-4 border-t border-border py-10 last:border-b md:grid-cols-[11rem_1fr] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {item.period}
              </p>
              <div>
                <h3 className="font-heading text-2xl tracking-tight">{item.degree}</h3>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:underline"
                  >
                    {item.school}
                    <ArrowUpRight />
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-primary">{item.school}</p>
                )}
                {item.description && (
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
