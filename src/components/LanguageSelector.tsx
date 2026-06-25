import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/types/i18n'

const LANG_SHORT: Record<string, string> = {
  'zh-CN': '中',
  'en': 'EN',
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = SUPPORTED_LANGUAGES.find(
    lang => lang.code === i18n.language
  ) || SUPPORTED_LANGUAGES[0]

  const handleLanguageChange = (langCode: SupportedLanguage) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="dropdown dropdown-end" ref={dropdownRef}>
      <button
        className="lang-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Language"
      >
        {/* Globe icon (inline SVG, lucide-react removed brand icons) */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
        <span className="lang-text">{LANG_SHORT[currentLanguage.code] || currentLanguage.code}</span>
        <svg className={`chevron-down w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="lang-dropdown-menu" style={{ opacity: 1, visibility: 'visible', transform: 'translateY(0)' }}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <a
                href="#"
                className={`lang-option flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer transition-colors ${lang.code === i18n.language ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLanguageChange(lang.code as SupportedLanguage)
                }}
              >
                <span className="lang-flag">{lang.code === 'zh-CN' ? '🇨🇳' : '🇺🇸'}</span>
                <span className="lang-text">{lang.nativeName}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelector
