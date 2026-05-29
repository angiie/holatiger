/**
 * 国际化管理类
 * 支持从外部JSON文件加载翻译配置
 */
class I18nManager {
  constructor() {
    this.currentLanguage = this.getCurrentLanguage();
    this.translations = {};
    this.loadedLanguages = new Set();
  }

  /**
   * 获取当前语言
   */
  getCurrentLanguage() {
    // 支持通过 URL 参数 ?lang=xx 临时指定语言，并进行规范化
    // 若无参数，则从 localStorage 读取并做规范化，避免 'zh-CN' / 'fr-FR' 等导致加载失败
    const norm = (l) => {
      const s = String(l || '').toLowerCase();
      if (s === 'zh' || s === 'zh-cn') return 'zh';
      if (s.startsWith('en')) return 'en';
      return 'zh';
    }
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang) {
      // 同步写入 localStorage，保证后续页面一致性
      const normalized = norm(urlLang);
      localStorage.setItem('language', normalized);
      return normalized;
    }
    return norm(localStorage.getItem('language') || 'zh');
  }

  /**
   * 设置语言
   */
  setLanguage(lang) {
    localStorage.setItem('language', lang);
    const norm = (l) => {
      const s = String(l || '').toLowerCase();
      if (s === 'zh' || s === 'zh-cn') return 'zh';
      if (s.startsWith('en')) return 'en';
      return 'zh';
    }
    const normalized = norm(lang);
    const htmlLangMap = { 'zh': 'zh-CN', 'en': 'en' };
    document.documentElement.lang = htmlLangMap[normalized] || 'zh-CN';
    document.documentElement.dir = 'ltr';
    this.currentLanguage = normalized;
  }

  /**
   * 加载语言包
   */
  async loadLanguage(lang) {
    if (this.loadedLanguages.has(lang)) {
      return this.translations[lang];
    }

    try {
      const response = await fetch(`/assets/i18n/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language pack: ${lang}`);
      }
      
      const translations = await response.json();
      this.translations[lang] = translations;
      this.loadedLanguages.add(lang);
      
      return translations;
    } catch (error) {
      console.warn(`Failed to load language pack for ${lang}:`, error);
      
      // 如果加载失败，使用默认的中文翻译
      if (lang !== 'zh' && !this.loadedLanguages.has('zh')) {
        return this.loadLanguage('zh');
      }
      
      return {};
    }
  }

  /**
   * 获取翻译文本
   */
  t(key, params = {}) {
    const currentTranslations = this.translations[this.currentLanguage] || {};
    const fallbackTranslations = this.translations['zh'] || {};
    
    const translation = currentTranslations[key] || fallbackTranslations[key] || key;
    
    // 替换参数
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] || match;
    });
  }

  /**
   * 切换语言 (Toggle)
   * 在 zh 和 en 之间切换
   */
  toggleLanguage() {
    const nextLang = this.currentLanguage === 'zh' ? 'en' : 'zh';
    this.setLanguage(nextLang);
    // 重新加载并更新页面
    this.loadLanguage(nextLang).then(() => {
      this.updateContent();
      // 更新按钮状态（如果有）
      this.updateToggleButton();
    });
  }

  /**
   * 更新 Toggle 按钮显示
   * 假设按钮 ID 为 lang-toggle-btn
   */
  updateToggleButton() {
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      // 如果当前是 zh，显示 "EN" (点击切换到英文)
      // 如果当前是 en，显示 "中" (点击切换到中文)
      // 或者显示当前语言状态
      // 方案：显示 "中/En" icon，或者根据当前语言显示目标语言
      // 这里采用：显示当前语言的 Icon + 文字，或者直接 Toggle 样式
      
      // 简单方案：显示 "中" 或 "En" 代表当前语言，或者 "English" / "中文"
      // 用户需求是 Toggle，通常是一个按钮，点击切换
      // 我们可以显示 "🌐 中/En" 或者当前选中的语言
      
      const isZh = this.currentLanguage === 'zh';
      // 更新按钮文本或内容
      // 这里我们假设按钮内部有一个 span 用来显示文本
      const textSpan = btn.querySelector('.lang-text');
      if (textSpan) {
        textSpan.textContent = isZh ? 'EN' : '中'; // 显示"点击后将切换到的语言"或者"当前语言"？
        // 通常 Toggle 按钮显示的是"当前状态"或者"对立状态"
        // 让我们显示当前语言： "中文" / "English"
        // 或者更简洁： "中" / "En"
        textSpan.textContent = isZh ? '中' : 'En';
      }
    }
  }

  /**
   * 更新页面内容
   */
  updateContent() {
    // 更新带有 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const params = element.getAttribute('data-i18n-params');
      const parsedParams = params ? JSON.parse(params) : {};

      // 特殊处理年份
      if (key === 'footer.copyright') {
        parsedParams.year = new Date().getFullYear();
      }

      const text = this.t(key, parsedParams);
      if (text !== key) element.innerHTML = text;
    });

    // 更新页面标题
    const titleKey = this.getPageTitleKey();
    if (titleKey) {
      document.title = this.t(titleKey);
    }

    const directTitle = this.t('title');
    if (!document.title && directTitle && directTitle !== 'title') {
      document.title = directTitle;
    }

    // 更新所有 SEO meta（描述、OG、Twitter、locale）
    this.updateSeoMeta();
  }

  /**
   * 获取页面标题键
   */
  getPageTitleKey() {
    const path = window.location.pathname;
    if (path.toLowerCase().includes('ezpixy')) return 'title.ezpixy';
    if (path.includes('webdavy')) return 'title.webdavy';
    if (path.includes('tinypass')) return 'title.tinypass';
    return null;
  }

  /**
   * 更新所有 SEO meta 标签（语言切换时同步更新）
   */
  updateSeoMeta() {
    const help = (attr, name, content) => {
      const el = document.querySelector(`${attr === 'name' ? 'meta[name="' : 'meta[property="'}${name}"]`);
      if (el && content) el.setAttribute('content', content);
    };

    const path = window.location.pathname;
    let prefix = '';
    if (path.toLowerCase().includes('ezpixy')) prefix = 'ezpixy';
    else if (path.includes('tinypass')) prefix = 'tinypass';
    else if (path.includes('webdavy')) prefix = 'webdavy';
    else if (path.includes('tinypic')) prefix = 'tinypic';
    else prefix = 'home';

    // 描述
    const descKey = prefix !== 'home' ? `${prefix}.description` : null;
    if (descKey) {
      const desc = this.t(descKey);
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && desc && desc !== descKey) metaDesc.setAttribute('content', desc);
    }

    // OG / Twitter
    const seoKeys = ['title', 'description'];
    seoKeys.forEach(k => {
      const baseKey = prefix !== 'home' ? `seo.og.${prefix}.${k}` : null;
      const text = baseKey ? this.t(baseKey) : null;
      if (text && text !== baseKey) {
        if (k === 'title') {
          help('property', 'og:title', text);
          help('name', 'twitter:title', text);
        } else {
          help('property', 'og:description', text);
          help('name', 'twitter:description', text);
        }
      }
    });

    // locale & html lang
    const langCodeMap = { 'zh': 'zh-CN', 'en': 'en' };
    const localeMap = { 'zh': 'zh_CN', 'en': 'en_US' };
    document.documentElement.lang = langCodeMap[this.currentLanguage] || 'zh-CN';
    help('property', 'og:locale', localeMap[this.currentLanguage] || 'zh_CN');
  }

  /**
   * 更新语言选择器显示
   */
  updateLanguageSelector() {
    const currentLangElement = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (currentLangElement) {
      const map = { 'zh': '简体', 'en': 'EN' };
      const fallback = this.t('lang.current');
      currentLangElement.textContent = map[this.currentLanguage] || fallback;
    }
    
    // 更新选项状态
    langOptions.forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === this.currentLanguage) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  /**
   * 初始化
   */
  async init() {
    console.log('I18n init started');
    await this.loadLanguage(this.currentLanguage);
    this.updateContent();
    
    // 绑定 Toggle 按钮事件
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      console.log('I18n binding toggle button');
      // 移除旧的事件监听器（如果可能），避免重复绑定
      const newBtn = toggleBtn.cloneNode(true);
      toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);
      
      newBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Language toggle clicked');
        this.toggleLanguage();
      });
      
      // 重新获取引用以便后续更新
      this.updateToggleButton();
    } else {
      console.warn('I18n toggle button not found');
    }
  }
}

// 创建全局实例
window.i18n = new I18nManager();
