import type { PropsWithChildren } from 'react'

type SlideUpProps = PropsWithChildren<{
  delay?: string
  className?: string
}>

export default function SlideUp({
  delay = 'delay-0',
  className = '',
  children,
}: SlideUpProps) {
  return (
    <div
      className={`translate-y-4 opacity-0 animate-[slideUp_0.6s_ease-out_forwards] ${delay} ${className}`}
    >
      {children}
    </div>
  )
}