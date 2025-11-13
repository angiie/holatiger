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
    const toNorm = (l) => {
      const s = String(l || '').toLowerCase();
      if (s === 'zh' || s === 'zh-cn') return 'zh-CN';
      if (['zh-tw','zh-hk','zh-hant'].includes(s)) return 'zh-TW';
      if (s.startsWith('en')) return 'en';
      if (s.startsWith('fr')) return 'fr';
      if (s.startsWith('es')) return 'es';
      if (s.startsWith('ar')) return 'ar';
      return 'zh-CN';
    }
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang) {
      const normalized = toNorm(urlLang);
      try { localStorage.setItem('language', normalized); } catch {}
      return normalized;
    }
    return toNorm(localStorage.getItem('language') || 'zh-CN');
  }

  /**
   * 设置语言
   */
  setLanguage(lang) {
    const toNorm = (l) => {
      const s = String(l || '').toLowerCase();
      if (s === 'zh' || s === 'zh-cn') return 'zh-CN';
      if (['zh-tw','zh-hk','zh-hant'].includes(s)) return 'zh-TW';
      if (s.startsWith('en')) return 'en';
      if (s.startsWith('fr')) return 'fr';
      if (s.startsWith('es')) return 'es';
      if (s.startsWith('ar')) return 'ar';
      return 'zh-CN';
    }
    const normalized = toNorm(lang);
    try { localStorage.setItem('language', normalized); } catch {}
    document.documentElement.lang = normalized;
    document.documentElement.dir = normalized === 'ar' ? 'rtl' : 'ltr';
    this.currentLanguage = normalized;
  }

  /**
   * 加载语言包
   */
  async loadLanguage(lang) {
    const toNorm = (l) => {
      const s = String(l || '').toLowerCase();
      if (s === 'zh' || s === 'zh-cn') return 'zh-CN';
      if (['zh-tw','zh-hk','zh-hant'].includes(s)) return 'zh-TW';
      if (s.startsWith('en')) return 'en';
      if (s.startsWith('fr')) return 'fr';
      if (s.startsWith('es')) return 'es';
      if (s.startsWith('ar')) return 'ar';
      return 'zh-CN';
    }
    const toResource = (norm) => {
      if (norm === 'zh-CN') return 'zh';
      if (norm === 'zh-TW') return 'zh-tw';
      return norm;
    }
    const normalized = toNorm(lang);
    if (this.loadedLanguages.has(normalized)) {
      return this.translations[normalized];
    }
    try {
      const resCode = toResource(normalized);
      const response = await fetch(`/assets/i18n/${resCode}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load language pack: ${normalized}`);
      }
      const translations = await response.json();
      this.translations[normalized] = translations;
      this.loadedLanguages.add(normalized);
      return translations;
    } catch (error) {
      console.warn(`Failed to load language pack for ${lang}:`, error);
      if (normalized !== 'zh-CN' && !this.loadedLanguages.has('zh-CN')) {
        return this.loadLanguage('zh-CN');
      }
      return {};
    }
  }

  /**
   * 获取翻译文本
   */
  t(key, params = {}) {
    const currentTranslations = this.translations[this.currentLanguage] || {};
    const fallbackTranslations = this.translations['zh-CN'] || {};
    
    const translation = currentTranslations[key] || fallbackTranslations[key] || key;
    
    // 替换参数
    return translation.replace(/\{(\w+)\}/g, (match, paramKey) => {
      return params[paramKey] || match;
    });
  }

  /**
   * 切换语言
   */
  async switchLanguage(lang) {
    // 先加载语言包
    await this.loadLanguage(lang);
    this.setLanguage(lang);
    this.updateContent();
    this.updateLanguageSelector();
    
    // 触发语言切换事件
    window.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { language: lang }
    }));
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
    
    // 首页等无特定titleKey时，直接使用通用的 title 键
    const directTitle = this.t('title');
    if (directTitle && directTitle !== 'title') {
      document.title = directTitle;
    }
    
    // 更新meta描述
    this.updateMetaDescription();
  }

  /**
   * 获取页面标题键
   */
  getPageTitleKey() {
    const path = window.location.pathname;
    if (path.includes('webdavy')) return 'title.webdavy';
    if (path.includes('tinypass')) return 'title.tinypass';
    if (path.toLowerCase().includes('handytulip')) return 'title.handytulip';
    return null;
  }

  /**
   * 更新meta描述
   */
  updateMetaDescription() {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const path = window.location.pathname;
      let descKey = '';
      if (path.includes('webdavy')) descKey = 'webdavy.description';
      if (path.includes('tinypass')) descKey = 'tinypass.description';
      if (path.toLowerCase().includes('handytulip')) descKey = 'handytulip.description';
      
      if (descKey) {
        metaDesc.setAttribute('content', this.t(descKey));
      }
    }
  }

  /**
   * 更新语言选择器显示
   */
  updateLanguageSelector() {
    const currentLangElement = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    const selectEl = document.getElementById('language-select');
    
    if (currentLangElement) {
      const map = { 'zh-CN': '简体', 'zh-TW': '繁體', 'en': 'EN', 'fr': 'Français', 'es': 'Español', 'ar': 'العربية' };
      const fallback = this.t('lang.current');
      currentLangElement.textContent = map[this.currentLanguage] || fallback;
    }
    if (selectEl && 'value' in selectEl) {
      try { selectEl.value = this.currentLanguage; } catch {}
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
    // 加载当前语言包
    await this.loadLanguage(this.currentLanguage);
    this.updateContent();
    this.updateLanguageSelector();
    const selectEl = document.getElementById('language-select');
    if (selectEl && !selectEl.getAttribute('data-i18n-bound')) {
      selectEl.addEventListener('change', (e) => {
        const v = e.target && e.target.value ? e.target.value : this.currentLanguage;
        this.switchLanguage(v);
      });
      selectEl.setAttribute('data-i18n-bound', '1');
    }
    
    // 监听DOM变化，自动翻译新添加的元素
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE && node.querySelectorAll) {
            // 检查节点本身是否有data-i18n属性
            if (node.hasAttribute && node.hasAttribute('data-i18n')) {
              const key = node.getAttribute('data-i18n');
              const params = node.getAttribute('data-i18n-params');
              const parsedParams = params ? JSON.parse(params) : {};
              node.innerHTML = this.t(key, parsedParams);
            }
            
            // 查找子元素中的data-i18n元素
            const i18nElements = node.querySelectorAll('[data-i18n]');
            i18nElements.forEach(element => {
              const key = element.getAttribute('data-i18n');
              const params = element.getAttribute('data-i18n-params');
              const parsedParams = params ? JSON.parse(params) : {};
              element.innerHTML = this.t(key, parsedParams);
            });
          }
        });
      });
    });
    
    // 确保document.body存在后再开始监听
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      // 如果body还不存在，等待DOM加载完成
      document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }
  }
}

// 创建全局实例
const i18n = new I18nManager();

// 暴露到全局作用域
window.i18n = i18n;
window.switchLanguage = async (lang) => {
  await i18n.switchLanguage(lang);
};

// 导出（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { I18nManager };
}
