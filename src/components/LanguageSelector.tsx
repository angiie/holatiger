import React from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/types/i18n'

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SupportedLanguage
    try { localStorage.setItem('language', value) } catch {}
    i18n.changeLanguage(value)
  }

  return (
    <select
      id="language-select"
      aria-label="选择语言"
      className="px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleChange}
      value={i18n.language as SupportedLanguage}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.nativeName}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector
