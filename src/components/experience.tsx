import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface ExperienceLink {
  label: string
  url: string
}

interface ExperienceItem {
  role: string
  company: string
  period: string
  description?: string
  highlights?: string[]
  tags?: string[]
  url?: string
  links?: ExperienceLink[]
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
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:underline"
                  >
                    {item.company}
                    <ArrowUpRight />
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-primary">{item.company}</p>
                )}
                {item.description && (
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
                {item.highlights && (
                  <ul className="mt-4 flex max-w-xl flex-col gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] size-1 shrink-0 rounded-full bg-primary"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.links && (
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                        <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                )}
                {item.tags && item.tags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="outline" className="font-mono text-xs">
                          {tag}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
