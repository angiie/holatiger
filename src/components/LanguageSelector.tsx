import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '@/types/i18n'

/**
 * 语言切换器（可访问版）
 * - 支持键盘操作（Esc/Enter/上下箭头）
 * - 提供ARIA属性与焦点管理
 * - 显示旗帜与缩写，简洁直观
 * - 切换时同步localStorage，保证刷新后保持选择
 */
const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState<number>(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const LANG_META: Record<SupportedLanguage, { flag: string; abbr: string }> = {
    'zh-CN': { flag: '🇨🇳', abbr: '中' },
    'zh-TW': { flag: '🇹🇼', abbr: '繁' },
    en: { flag: '🇺🇸', abbr: 'EN' },
    fr: { flag: '🇫🇷', abbr: 'FR' },
    es: { flag: '🇪🇸', abbr: 'ES' },
    ar: { flag: '🇸🇦', abbr: 'AR' },
  }

  const currentLanguage =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === i18n.language) ||
    SUPPORTED_LANGUAGES[0]

  /**
   * 切换语言并同步缓存
   */
  const handleLanguageChange = (langCode: SupportedLanguage) => {
    try {
      localStorage.setItem('language', langCode)
    } catch {}
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

  // 打开时设置焦点到当前语言
  useEffect(() => {
    if (isOpen) {
      const idx = SUPPORTED_LANGUAGES.findIndex((l) => l.code === i18n.language)
      setFocusIndex(idx >= 0 ? idx : 0)
      setTimeout(() => listRef.current?.focus(), 0)
    } else {
      setFocusIndex(-1)
    }
  }, [isOpen, i18n.language])

  // 键盘导航：上下选择、回车确认、Esc关闭
  const onListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (!isOpen) return
    const max = SUPPORTED_LANGUAGES.length - 1
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusIndex((prev) => (prev < max ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusIndex((prev) => (prev > 0 ? prev - 1 : max))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const target = SUPPORTED_LANGUAGES[Math.max(0, focusIndex)]
      if (target) handleLanguageChange(target.code as SupportedLanguage)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-gray-300 text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen((v) => !v)}
        title="选择语言"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <span className="inline-flex items-center gap-1">
          <span aria-hidden>{LANG_META[currentLanguage.code as SupportedLanguage]?.flag}</span>
          <span className="font-medium">
            {LANG_META[currentLanguage.code as SupportedLanguage]?.abbr}
          </span>
        </span>
        <span className="text-gray-400" aria-hidden>▾</span>
      </button>

      {isOpen && (
        <ul
          id="language-menu"
          role="listbox"
          tabIndex={0}
          onKeyDown={onListKeyDown}
          ref={listRef}
          className="absolute mt-2 min-w-[9rem] bg-white shadow-lg rounded-md border border-gray-200 z-50 py-1"
        >
          {SUPPORTED_LANGUAGES.map((lang, index) => {
            const selected = lang.code === i18n.language
            const focused = index === focusIndex
            const meta = LANG_META[lang.code as SupportedLanguage]
            return (
              <li
                key={lang.code}
                role="option"
                aria-selected={selected}
                className={`px-3 py-2 cursor-pointer flex items-center gap-2 text-sm ${selected ? 'bg-blue-50 text-blue-700' : 'text-gray-700'} ${focused ? 'outline outline-2 outline-blue-300' : ''}`}
                onMouseEnter={() => setFocusIndex(index)}
                onClick={() => handleLanguageChange(lang.code as SupportedLanguage)}
              >
                <span aria-hidden>{meta?.flag}</span>
                <span className="font-medium">{lang.nativeName}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelector
