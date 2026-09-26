import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from '../locales/zh.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

export const SUPPORTED_LANGUAGES = ['zh', 'en', 'fr'] as const
export type Language = (typeof SUPPORTED_LANGUAGES)[number]

const STORAGE_KEY = 'portfolio-language'

function detectLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
    return saved as Language
  }
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('zh')) return 'zh'
  if (nav.startsWith('fr')) return 'fr'
  return 'en'
}

function applyHtmlLang(lng: string) {
  document.documentElement.lang = lng === 'zh' ? 'zh-CN' : lng
}

void i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: detectLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

applyHtmlLang(i18n.language)

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  applyHtmlLang(lng)
})

export default i18n
