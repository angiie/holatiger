import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  className?: string
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'ui-button ui-button-primary',
  secondary: 'ui-button ui-button-secondary',
  accent: 'ui-button ui-button-primary',
  outline: 'ui-button ui-button-secondary',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'ui-button-small',
  medium: 'ui-button-medium',
  large: 'ui-button-large',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => (
  <button
    className={`${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
