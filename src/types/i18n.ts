// 国际化相关类型定义
export interface LanguageOption {
  code: string
  name: string
  nativeName: string
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
  { code: 'zh-TW', name: '繁體中文', nativeName: '繁體中文' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'Français', nativeName: 'Français' },
  { code: 'es', name: 'Español', nativeName: 'Español' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
]

export type SupportedLanguage = 'zh-CN' | 'zh-TW' | 'en' | 'fr' | 'es' | 'ar'
