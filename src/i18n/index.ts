import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 语言包
import zhCN from '@assets/i18n/zh.json'
import zhTW from '@assets/i18n/zh-tw.json'
import en from '@assets/i18n/en.json'
import fr from '@assets/i18n/fr.json'
import es from '@assets/i18n/es.json'
import ar from '@assets/i18n/ar.json'


const normalizeLang = (lng: string): string => {
  const l = lng.toLowerCase()
  if (l === 'zh' || l === 'zh-cn') return 'zh-CN'
  if (l === 'zh-tw' || l === 'zh-hant' || l === 'zh-hk') return 'zh-TW'
  if (l.startsWith('en')) return 'en'
  if (l.startsWith('fr')) return 'fr'
  if (l.startsWith('es')) return 'es'
  if (l.startsWith('ar')) return 'ar'
  return 'en'
}

const applyHtmlLangDirAndBadge = (lang: string) => {
  const html = document.documentElement
  const normalized = normalizeLang(lang)
  html.lang = normalized
  const rtlLangs = new Set(['ar'])
  html.dir = rtlLangs.has(normalized) ? 'rtl' : 'ltr'
  html.setAttribute('data-dir', html.dir)
  const el = document.getElementById('current-lang') || document.getElementById('currentLangDisplay')
  if (el) {
    const map: Record<string,string> = {
      'zh-CN': '简体中文',
      'zh-TW': '繁體中文',
      'en': 'English',
      'fr': 'Français',
      'es': 'Español',
      'ar': 'العربية'
    }
    el.textContent = map[normalized] || normalized
  }
}

const resources = {
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  ar: { translation: ar },
}

// const applyDirectionByLang (deprecated) = (lang: string) => {
  const rtlLangs = new Set(['ar'])
  const isRTL = rtlLangs.has(lang)
  const html = document.documentElement
  html.dir = isRTL ? 'rtl' : 'ltr'
  // 可选：为 body 添加标记，便于样式覆盖
  html.setAttribute('data-dir', html.dir)
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    debug: import.meta.env?.DEV === true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
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
