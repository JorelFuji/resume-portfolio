import type { PropsWithChildren } from 'react'
import { cn } from '@/app/lib'

type ContainerSize = 'sm' | 'md' | 'lg'

type ContainerProps = PropsWithChildren<{
  className?: string
  size?: ContainerSize
}>

const sizes: Record<ContainerSize, string> = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
}

export default function Container({
  className,
  size = 'md',
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  )
}