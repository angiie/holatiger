import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/types/i18n'

export const useI18n = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang)
  }

  const getCurrentLanguage = (): SupportedLanguage => {
    return i18n.language as SupportedLanguage
  }

  const getCurrentLanguageInfo = () => {
    return SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language) || SUPPORTED_LANGUAGES[0]
  }

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    getCurrentLanguageInfo,
    currentLanguage: i18n.language as SupportedLanguage
  }
}
