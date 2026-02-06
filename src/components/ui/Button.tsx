import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'solid' | 'outline' | 'ghost'
    size?: 'sm' | 'md'
  }
>

const base =
  'inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-zinc-500/40 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'bg-zinc-100 text-zinc-950 hover:bg-white',
  outline: 'border border-zinc-800 text-zinc-200 hover:bg-zinc-900',
  ghost: 'text-zinc-200 hover:bg-zinc-900',
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-sm',
}

export default function Button({
  variant = 'outline',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}