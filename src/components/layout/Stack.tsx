import type { PropsWithChildren } from 'react'

type StackProps = PropsWithChildren<{
  space?: string
  className?: string
}>

export default function Stack({
  space = 'space-y-4',
  className = '',
  children,
}: StackProps) {
  return (
    <div className={`flex flex-col ${space} ${className}`}>
      {children}
    </div>
  )
}