import { ArrowDown, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-16">
      <Reveal>
        <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {t('hero.availability')}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-10 font-heading text-2xl text-muted-foreground md:text-3xl">
          {t('hero.kicker')}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-2 font-heading text-6xl leading-[0.95] tracking-tight md:text-8xl">
          {t('hero.name')}
        </h1>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.25em] text-primary md:text-base">
          {t('hero.role')}
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {t('hero.tagline')}
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">{t('hero.ctaProjects')}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">{t('hero.ctaContact')}</a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.35} className="mt-auto">
        <div className="mt-16 flex items-center justify-between border-t border-border py-6">
          <p className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin />
            {t('hero.location')}
          </p>
          <p className="hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground md:inline-flex">
            {t('hero.scroll')}
            <ArrowDown className="animate-bounce" />
          </p>
        </div>
      </Reveal>
    </section>
  )
}
