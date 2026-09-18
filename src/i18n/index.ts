import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 语言包
import zhCN from '@assets/i18n/zh.json'
import en from '@assets/i18n/en.json'


const normalizeLang = (lng: string): string => {
  const l = lng.toLowerCase()
  if (l === 'zh' || l === 'zh-cn') return 'zh-CN'
  if (l.startsWith('en')) return 'en'
  return 'zh-CN'
}

const applyHtmlLangDirAndBadge = (lang: string) => {
  const html = document.documentElement
  const normalized = normalizeLang(lang)
  html.lang = normalized
  html.dir = 'ltr'
  html.setAttribute('data-dir', html.dir)
  const el = document.getElementById('current-lang') || document.getElementById('currentLangDisplay')
  if (el) {
    const map: Record<string,string> = {
      'zh-CN': '简体中文',
      'en': 'English'
    }
    el.textContent = map[normalized] || normalized
  }
}

const resources = {
  'zh-CN': { translation: zhCN },
  en: { translation: en },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    debug: import.meta.env?.DEV === true,
    // 语言包是与静态页共用的 assets/i18n/*.json，里面的占位符是单花括号（如 {year}），
    // 静态页的 assets/js/i18n.js 按单花括号替换。i18next 默认用 {{双花括号}}，
    // 不改这里的话 React 页面的 t() 替换不出来，页脚会直接显示 "{year}"。
    interpolation: { escapeValue: false, prefix: '{', suffix: '}' },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    },
  })

// 初始化方向
const normInit = normalizeLang(i18n.language); if (normInit !== i18n.language) { i18n.changeLanguage(normInit) }
applyHtmlLangDirAndBadge(normInit)

// 切换语言时调整方向
// @ts-ignore
i18n.on('languageChanged', (lng: string) => {
  const norm = normalizeLang(lng)
  if (norm !== lng) { i18n.changeLanguage(norm) }
  applyHtmlLangDirAndBadge(norm)
})

export default i18n
