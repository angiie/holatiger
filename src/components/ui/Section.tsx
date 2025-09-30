import React from 'react'

interface SectionProps {
  children: React.ReactNode
  variant?: 'default' | 'alt' | 'hero' | 'product-hero'
  className?: string
  containerClassName?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'default',
  className = '',
  containerClassName = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'alt':
        return 'bg-slate-50/60 dark:bg-slate-900/60'
      case 'hero':
        return 'relative overflow-hidden'
      case 'product-hero':
        return 'py-12 px-6'
      default:
        return 'py-16 px-6 bg-white'
    }
  }

  const getContainerClasses = () => {
    switch (variant) {
      case 'hero':
        return 'py-20'
      case 'product-hero':
        return 'max-w-4xl mx-auto relative z-10'
      default:
        return 'max-w-6xl mx-auto'
    }
  }

  return (
    <section className={`${getVariantClasses()} ${className}`}>
      <div className={`${getContainerClasses()} ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
