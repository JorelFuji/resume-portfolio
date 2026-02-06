import type { PropsWithChildren } from 'react'

type GridProps = PropsWithChildren<{
  cols?: string
  gap?: string
  className?: string
}>

export default function Grid({
  cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-4',
  className = '',
  children,
}: GridProps) {
  return (
    <div className={`grid ${cols} ${gap} ${className}`}>
      {children}
    </div>
  )
}