import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  variant?: 'default' | 'product' | 'tool'
  headerVariant?: 'default' | 'product' | 'tool'
  footerVariant?: 'default' | 'product' | 'tool'
  className?: string
  headerClassName?: string
  footerClassName?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  variant = 'default',
  headerVariant,
  footerVariant,
  className = '',
  headerClassName = '',
  footerClassName = ''
}) => {
  // 如果没有指定 headerVariant 和 footerVariant，使用主 variant
  const finalHeaderVariant = headerVariant || variant
  const finalFooterVariant = footerVariant || variant

  const getBodyClasses = () => {
    switch (variant) {
      case 'product':
        return "v1-professional"
      case 'tool':
        return "svg-studio"
      default:
        return "v1-professional"
    }
  }

  const getMainClasses = () => {
    switch (variant) {
      case 'tool':
        return "app-container"
      default:
        return ""
    }
  }

  return (
    <div className={`min-h-screen ${getBodyClasses()} ${className}`}>
      <Header variant={finalHeaderVariant} className={headerClassName} />
      <main className={getMainClasses()}>
        {children}
      </main>
      <Footer variant={finalFooterVariant} className={footerClassName} />
    </div>
  )
}

export default Layout
