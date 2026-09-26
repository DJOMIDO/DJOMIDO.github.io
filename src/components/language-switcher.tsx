import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import i18n from '@/i18n'
import { SUPPORTED_LANGUAGES } from '@/i18n'
import type { Language } from '@/i18n'

const LANGUAGE_LABELS: Record<Language, string> = {
  zh: '中文',
  en: 'English',
  fr: 'Français',
}

export function LanguageSwitcher() {
  const { t, i18n: i18nInstance } = useTranslation()
  const current = i18nInstance.language as Language

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t('language.label')}
          className="font-mono text-xs tracking-wider"
        >
          {current.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          {SUPPORTED_LANGUAGES.map((lng) => (
            <DropdownMenuItem
              key={lng}
              onSelect={() => i18n.changeLanguage(lng)}
              aria-current={current === lng ? 'true' : undefined}
            >
              <span className="flex-1">{LANGUAGE_LABELS[lng]}</span>
              {current === lng && <Check />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
