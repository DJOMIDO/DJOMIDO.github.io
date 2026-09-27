import { FileUser, Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/reveal'

interface ContactLink {
  label: string
  url: string
}

function linkIcon(url: string) {
  if (url.includes('github.com')) return Github
  if (url.includes('linkedin.com')) return Linkedin
  return FileUser
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
          className="inline-flex items-center gap-3 font-mono text-xl tracking-tight underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary md:text-3xl"
        >
          <Mail />
          {email}
        </a>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((link) => {
            const Icon = linkIcon(link.url)
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon />
                {link.label}
              </a>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
