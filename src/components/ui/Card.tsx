import type { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  className?: string
}>

export default function Card({ className = '', children }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}