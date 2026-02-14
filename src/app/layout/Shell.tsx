import type { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

type ShellProps = PropsWithChildren<{
  className?: string
}>

export default function Shell({ className = '', children }: ShellProps) {
  return (
    <div className={`min-h-dvh bg-zinc-950 text-zinc-100 ${className}`}>
      <Header />
      <main id="main" className="min-h-[70dvh]">
        {children}
      </main>
      <Footer />
    </div>
  )
}