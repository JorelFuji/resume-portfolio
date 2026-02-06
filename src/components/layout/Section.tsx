import type { PropsWithChildren } from 'react'
import Container from './Container'

type SectionProps = PropsWithChildren<{
  id?: string
  title?: string
  subtitle?: string
  className?: string
}>

export default function Section({
  id,
  title,
  subtitle,
  className = '',
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <header className="mb-10 space-y-2">
            {title && (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="max-w-3xl text-zinc-400">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  )
}