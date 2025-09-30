import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-sm hover:shadow-indigo-500/25 hover:-translate-y-0.5 border-transparent'
      case 'secondary':
        return 'border-slate-300/70 dark:border-slate-600/70 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-700/60'
      case 'accent':
        return 'border-transparent bg-emerald-600 text-white hover:bg-emerald-500'
      case 'outline':
        return 'border-slate-300 text-slate-700 hover:bg-slate-50'
      default:
        return ''
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2.5 py-1.5 text-xs'
      case 'large':
        return 'px-6 py-3 text-lg'
      default:
        return 'px-4 py-2 text-sm'
    }
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-lg font-medium border transition-all duration-200
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
