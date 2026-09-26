import { ArrowUpRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/reveal'

interface ContactLink {
  label: string
  url: string
}

export function Contact() {
  const { t } = useTranslation()
  const email = t('contact.email')
  const links = t('contact.links', { returnObjects: true }) as unknown as ContactLink[]

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-32">
      <Reveal className="flex flex-col items-center gap-8 text-center">
        <p className="font-mono text-sm text-primary">06.</p>
        <h2 className="font-heading text-4xl tracking-tight md:text-6xl">
          {t('contact.title')}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t('contact.lead')}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 font-heading text-2xl italic tracking-tight underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary md:text-4xl"
        >
          <Mail />
          {email}
        </a>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
