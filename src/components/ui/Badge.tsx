import type { PropsWithChildren } from 'react'

type BadgeProps = PropsWithChildren<{
  className?: string
}>

export default function Badge({ className = '', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-800 px-2 py-1 text-xs text-zinc-200 ${className}`}
    >
      {children}
    </span>
  )
}