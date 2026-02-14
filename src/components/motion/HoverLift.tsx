import type { PropsWithChildren } from 'react'

type HoverLiftProps = PropsWithChildren<{
  className?: string
}>

export default function HoverLift({ className = '', children }: HoverLiftProps) {
  return (
    <div
      className={`transition-transform duration-300 ease-out
        hover:-translate-y-1
        focus-within:-translate-y-1
        ${className}`}
    >
      {children}
    </div>
  )
}