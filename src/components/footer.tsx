import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {t('hero.name')} · {t('footer.rights')}
        </p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  )
}
