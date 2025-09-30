import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/types/i18n'

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
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title="选择语言"
      >
        <span className="current-lang">{currentLanguage.nativeName}</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <div 
              key={lang.code}
              className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code as SupportedLanguage)}
            >
              <span className="lang-name">{lang.nativeName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
