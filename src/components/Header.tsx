import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  variant?: 'default' | 'product' | 'tool'
  className?: string
}

const SECTION_IDS = ['home', 'extensions', 'apps', 'tools', 'about']

const Header: React.FC<HeaderProps> = ({ variant = 'default', className = '' }) => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    if (variant === 'tool') return

    const updateHeader = () => {
      setIsScrolled(window.scrollY > 12)
      if (variant !== 'default') return

      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240)
      let current = 'home'
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = 'about'
      }
      setActiveSection(current)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('resize', updateHeader)
    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [variant])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const getHeaderClasses = () => {
    const baseClasses = 'sticky top-0 z-50'
    const scrolledClass = isScrolled ? 'is-scrolled' : ''

    switch (variant) {
      case 'product':
        return `${baseClasses} site-header-v1 border-b border-orange-100 ${scrolledClass}`
      case 'tool':
        return `${baseClasses} app-header`
      default:
        return `${baseClasses} site-header-v1 ${scrolledClass}`
    }
  }

  const getContainerClasses = () => {
    return variant === 'tool' ? 'header-container' : 'container nav-v1'
  }

  const getLogoClasses = () => {
    if (variant === 'tool') return 'brand'
    return 'logo-v1'
  }

  const navItems = [
    { key: 'nav.home', href: variant === 'product' ? '/' : '#home', section: 'home' },
    { key: 'nav.extensions', href: variant === 'product' ? '/#extensions' : '#extensions', section: 'extensions' },
    { key: 'nav.apps', href: variant === 'product' ? '/#apps' : '#apps', section: 'apps' },
    { key: 'nav.tools', href: variant === 'product' ? '/#tools' : '#tools', section: 'tools' },
    { key: 'nav.about', href: variant === 'product' ? '/#about' : '#about', section: 'about' },
    { key: 'nav.blog', href: '/blog', section: '' },
  ]

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
        <img src="/assets/images/icons/icon_64x64.png" alt="虎啦 Logo" className="h-8 w-8" />
        <span className="logo-text">{t('logo.text', '虎啦')}</span>
      </a>
    )
  }

  const renderLinks = (mobile = false) => navItems.map((item) => {
    const isActive = variant === 'default' && item.section === activeSection
    return (
      <a
        key={item.key}
        href={item.href}
        className={`${mobile ? 'mobile-nav-link-v1' : ''} ${isActive ? 'is-active' : ''}`.trim()}
        aria-current={isActive ? 'location' : undefined}
        onClick={() => {
          if (item.section) setActiveSection(item.section)
          setIsMenuOpen(false)
        }}
      >
        {t(item.key)}
      </a>
    )
  })

  return (
    <header className={`${getHeaderClasses()} ${className}`}>
      <div className={getContainerClasses()}>
        {renderLogo()}
        <div className="flex items-center gap-3">
          {variant !== 'tool' && (
            <nav className="nav-links-v1" aria-label={t('nav.menu', 'Navigation menu')}>
              {renderLinks()}
            </nav>
          )}
          {variant !== 'tool' && (
            <button
              type="button"
              className="nav-mobile-toggle"
              aria-label={t('nav.menu', 'Navigation menu')}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          )}
          {variant === 'tool' ? (
            <div className="header-right"><LanguageSelector /></div>
          ) : (
            <LanguageSelector />
          )}
        </div>
      </div>
      {isMenuOpen && variant !== 'tool' && (
        <nav id="mobile-navigation" className="mobile-nav-v1" aria-label={t('nav.menu', 'Navigation menu')}>
          {renderLinks(true)}
        </nav>
      )}
    </header>
  )
}

export default Header
