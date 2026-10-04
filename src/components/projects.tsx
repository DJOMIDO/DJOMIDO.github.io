import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface Project {
  name: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
}

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as unknown as Project[]

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="03." title={t('projects.title')} />
      <div className="flex flex-col">
        {items.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="group grid gap-6 border-t border-border py-10 md:grid-cols-[3rem_1fr_auto]">
              <span className="font-mono text-sm text-muted-foreground">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-heading text-2xl tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="outline" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-6 md:flex-col md:items-end md:gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t('projects.demoLabel')}
                    <ArrowUpRight />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t('projects.repoLabel')}
                    <ArrowUpRight />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
