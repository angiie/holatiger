import React from 'react'
import { useTranslation } from 'react-i18next'

/** 显示目标语言缩写：当前中文 → 显示 EN，当前英文 → 显示 中 */
const TARGET_LABEL: Record<string, string> = {
  'zh-CN': 'EN',
  'en': '中',
}

/** 切换到的目标语言 code */
const TOGGLE_MAP: Record<string, string> = {
  'zh-CN': 'en',
  'en': 'zh-CN',
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()

  const currentCode = i18n.language
  const label = TARGET_LABEL[currentCode] || 'EN'
  const nextLang = TOGGLE_MAP[currentCode] || 'en'

  const handleToggle = () => {
    i18n.changeLanguage(nextLang)
  }

  return (
    <button
      className="lang-switcher-btn"
      onClick={handleToggle}
      aria-label="Switch Language"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
      <span className="lang-text">{label}</span>
    </button>
  )
}

export default LanguageSelector
