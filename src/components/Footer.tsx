import React from 'react'
import { useTranslation } from 'react-i18next'

interface FooterProps {
  variant?: 'default' | 'product' | 'tool'
  className?: string
}

const Footer: React.FC<FooterProps> = ({ variant = 'default', className = '' }) => {
  const { t } = useTranslation()

  const getFooterClasses = () => {
    switch (variant) {
      case 'product':
        return "py-12 px-6 border-t border-gray-200 bg-white"
      case 'tool':
        return "app-footer"
      default:
        return "py-12 px-6 border-t border-gray-200 bg-white"
    }
  }

  const getContainerClasses = () => {
    switch (variant) {
      case 'tool':
        return "footer-container"
      default:
        return "max-w-6xl mx-auto text-center"
    }
  }

  const renderToolFooter = () => {
    return (
      <footer className={`${getFooterClasses()} ${className}`}>
        <div className={getContainerClasses()}>
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-brand">
                <span className="footer-logo">🎨</span>
                <span className="footer-title">SVG Studio Pro</span>
              </div>
              <p className="footer-description">专业的SVG处理工具，让创作更简单</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 SVG Studio Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const renderDefaultFooter = () => {
    const currentYear = new Date().getFullYear()
    
    return (
      <footer className={`${getFooterClasses()} ${className}`}>
        <div className={getContainerClasses()}>
          <p className={variant === 'default' ? "text-gray-500 text-lg" : "text-gray-500"}>
            {t('footer.copyright', { year: currentYear, defaultValue: `© ${currentYear} 虎啦 (HolaTiger) - 小工具，大能量` })}
          </p>
        </div>
      </footer>
    )
  }

  if (variant === 'tool') {
    return renderToolFooter()
  }

  return renderDefaultFooter()
}

export default Footer
