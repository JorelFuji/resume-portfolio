import type { PropsWithChildren } from 'react'
import Container from '@/components/layout/Container'

type PageProps = PropsWithChildren<{
  title?: string
  subtitle?: string
  size?: 'sm' | 'md' | 'lg'
}>

export default function Page({
  title,
  subtitle,
  size = 'md',
  children,
}: PageProps) {
  return (
    <section className="py-10 sm:py-14">
      <Container size={size}>
        {(title || subtitle) && (
          <header className="mb-8">
            {title && (
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 max-w-prose text-zinc-400">
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