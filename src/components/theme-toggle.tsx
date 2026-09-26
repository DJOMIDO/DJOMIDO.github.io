import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}
