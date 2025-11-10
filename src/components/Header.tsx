import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  variant?: 'default' | 'product' | 'tool'
  className?: string
}

const Header: React.FC<HeaderProps> = ({ variant = 'default', className = '' }) => {
  const { t } = useTranslation()

  const getHeaderClasses = () => {
    const baseClasses = "sticky top-0 z-50"
    
    switch (variant) {
      case 'product':
        return `${baseClasses} site-header-v1 border-b border-orange-100`
      case 'tool':
        return `${baseClasses} app-header`
      default:
        return `${baseClasses} site-header-v1`
    }
  }

  const getContainerClasses = () => {
    switch (variant) {
      case 'product':
        return "container mx-auto px-6 py-4 flex items-center justify-between"
      case 'tool':
        return "header-container"
      default:
        return "container nav-v1"
    }
  }

  const getLogoClasses = () => {
    switch (variant) {
      case 'product':
        return "logo-v1"
      case 'tool':
        return "brand"
      default:
        return "logo-v1"
    }
  }

  const getNavClasses = () => {
    switch (variant) {
      case 'product':
        return "nav-links-v1 hidden md:flex items-center gap-6"
      case 'tool':
        return "hidden" // SVG Studio 不需要导航
      default:
        return "nav-links-v1"
    }
  }

  const renderLogo = () => {
    if (variant === 'tool') {
      return (
        <div className={getLogoClasses()}>
          <div className="brand-icon">🎨</div>
          <h1 className="brand-title">SVG Studio</h1>
          <span className="brand-subtitle">Pro</span>
        </div>
      )
    }

    return (
      <a className={getLogoClasses()} href={variant === 'product' ? 'https://holatiger.com/' : '#home'}>
        <img src="/assets/images/icons/icon_64x64.png" alt="虎啦 Logo" className="w-8 h-8" />
        <span className="logo-text">{t('logo.text', '虎啦')}</span>
      </a>
    )
  }

  /**
   * 渲染导航栏（含 i18n）：
   * - default/product 变体：返回站点导航链接
   * - 包含 首页/扩展/工具/关于/博客
   */
  const renderNavigation = () => {
    if (variant === 'tool') {
      return null
    }

    const navItems = [
      { key: 'nav.home', href: variant === 'product' ? './index.html' : '#home' },
      { key: 'nav.extensions', href: variant === 'product' ? './index.html#extensions' : '#extensions' },
      { key: 'nav.tools', href: variant === 'product' ? './index.html#tools' : '#tools' },
      { key: 'nav.about', href: variant === 'product' ? './index.html#about' : '#about' },
      // 博客导航：统一指向 /blog（Vercel 重定向到 blog.html），使用 i18n 文案
      { key: 'nav.blog', href: '/blog' }
    ]

    return (
      <nav className={getNavClasses()}>
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={variant === 'product' 
              ? "text-gray-600 hover:text-orange-500 transition-colors" 
              : "text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:text-sky-600 dark:hover:text-sky-400"
            }
          >
            {t(item.key)}
          </a>
        ))}
      </nav>
    )
  }

  const renderLanguageSelector = () => {
    if (variant === 'tool') {
      return (
        <div className="header-right">
          <LanguageSelector />
        </div>
      )
    }

    return <LanguageSelector />
  }

  return (
    <header className={`${getHeaderClasses()} ${className}`}>
      <div className={getContainerClasses()}>
        {renderLogo()}
        <div className="flex items-center gap-6">
          {renderNavigation()}
          {renderLanguageSelector()}
        </div>
      </div>
    </header>
  )
}

export default Header
