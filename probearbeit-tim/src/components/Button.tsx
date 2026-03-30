import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'underline'
  size?: 'sm' | 'lg'
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'default',
  size = 'sm',
  onClick,
  disabled = false,
}: ButtonProps) {
  const variantClasses = {
    default: `
      bg-gray-70 text-gray-900
      hover:bg-gray-500
      active:bg-gray-70 active:border-gray-900
      ${disabled && 'bg-gray-70 text-gray-700 cursor-not-allowed'}
    `,
    primary: `
      bg-white text-gray-900
      hover:bg-gray-70
      active:bg-white active:border-gray-900
      ${disabled && 'bg-white text-gray-700 cursor-not-allowed'}
    `,
    secondary: `
      bg-gray-900 text-white
      hover:bg-black
      active:bg-gray-900 active:border-black
      ${disabled && 'bg-gray-700 text-black cursor-not-allowed'}
    `,
    underline: `
      text-gray-900 underline underline-offset-6
      hover:text-black
      active:text-black
      ${disabled && 'text-gray-700 cursor-not-allowed'}
    `,
  }

  const sizeClasses = {
    sm: 'h-10 px-4',
    lg: 'h-12 px-6',
  }

  const classes = `
    box-border border border-transparent rounded-full button cursor-pointer transition-colors duration-300
    ${variantClasses[variant]}
    ${sizeClasses[size]}
  `

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}