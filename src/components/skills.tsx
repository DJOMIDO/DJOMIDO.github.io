import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

interface SkillGroup {
  name: string
  items: string[]
}

export function Skills() {
  const { t } = useTranslation()
  const groups = t('skills.groups', { returnObjects: true }) as unknown as SkillGroup[]

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading index="02." title={t('skills.title')} />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.08} className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
