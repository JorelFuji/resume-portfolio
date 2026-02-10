// /src/components/layout/SiteShell.tsx
import type { ReactNode } from "react"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/layout/Footer"

type Props = {
  children: ReactNode
  className?: string
}

export default function SiteShell({ children, className = "" }: Props) {
  return (
    <div className="min-h-screen bg-[hsl(var(--surface))] text-[hsl(var(--text))]">
      {/* Skip link (properly visible on focus) */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999]
                   rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]
                   px-4 py-2 text-sm font-medium shadow-lg outline-none
                   focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="content" className={`section-y ${className}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}