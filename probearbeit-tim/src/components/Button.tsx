import React from 'react'


type BaseProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  iconOnly?: boolean
  disabled?: boolean
  isActive?: boolean
  className?: string
}

type ButtonProps =
  | (BaseProps & {
      variant?: 'default' | 'primary'
      size?: 'sm' | 'lg'
    })
  | (BaseProps & {
      variant: 'secondary' | 'underline'
      size?: 'sm'
    })


export default function Button({
  children,
  variant = 'default',
  size = 'sm',
  onClick,
  iconOnly = false,
  disabled = false,
  isActive = false,
  className = '',
}: ButtonProps & { isActive?: boolean }) {
  const variantClasses = {
    default: `
      bg-gray-70 text-gray-900
      hover:bg-gray-500
      active:bg-gray-70 active:border-gray-900
      disabled:bg-gray-70 disabled:text-gray-700 disabled:cursor-not-allowed disabled:border-transparent
    `,
    primary: `
      bg-white text-gray-900
      hover:bg-gray-70
      active:bg-white active:border-gray-900
      disabled:bg-white disabled:text-gray-700 disabled:cursor-not-allowed disabled:border-transparent
    `,
    secondary: `
      bg-gray-900 text-white
      hover:bg-black
      active:bg-gray-900 active:border-black
      disabled:bg-gray-700 disabled:text-black disabled:cursor-not-allowed disabled:border-transparent
    `,
    underline: `
      text-gray-900 underline underline-offset-6
      hover:text-black
      active:text-black
      disabled:text-gray-700 disabled:cursor-not-allowed
    `,
  }


  // persistent active state for filter buttons
  const activeVariantClasses = {
    default: 'bg-gray-70 !border-gray-900',
    primary: 'bg-white !border-gray-900',
    secondary: 'bg-gray-900 !border-black',
    underline: 'text-black',
  }


  // can be extended to ensure that lg cannot be applied to variants 'secondary' and 'underline', according to the style guide
  const sizeClasses = {
    sm: iconOnly
      ? 'size-10 p-0 justify-center'
      : `h-10 ${variant === 'underline' ? 'px-0' : 'px-4'}`,

    lg: iconOnly
      ? 'size-12 p-0 justify-center'
      : 'h-12 px-6',
  }

  const classes = [
    'flex flex-row items-center gap-2 box-border border border-transparent rounded-full button cursor-pointer transition-colors duration-300',
    variantClasses[variant],
    sizeClasses[size],
    isActive ? activeVariantClasses[variant] : '',
    className,
  ].join(' ')

  return (
    <button
      type='button'
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}