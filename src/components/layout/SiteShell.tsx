import type { ReactNode } from "react"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/layout/Footer"

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-surface text-text p-3 rounded-lg">
        Skip to content
      </a>

      <Navbar />
      <main id="content" className="section-y">
        {children}
      </main>
      <Footer />
    </div>
  )
}