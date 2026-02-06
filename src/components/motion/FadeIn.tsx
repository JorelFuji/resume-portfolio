import type { PropsWithChildren } from 'react'

type FadeInProps = PropsWithChildren<{
  delay?: string
  className?: string
}>

export default function FadeIn({
  delay = 'delay-0',
  className = '',
  children,
}: FadeInProps) {
  return (
    <div
      className={`opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] ${delay} ${className}`}
    >
      {children}
    </div>
  )
}