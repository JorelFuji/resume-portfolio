// ← grid: sidebar + main
import type { PropsWithChildren } from 'react'

type ResumeLayoutProps = PropsWithChildren<{
  /** Optional: pass a sidebar component (skills, contact, tags, etc.) */
  sidebar?: React.ReactNode
  /** Optional: show a top header area (name/title/contact row) */
  header?: React.ReactNode
  /** Optional: tweak outer spacing */
  className?: string
}>

export default function ResumeLayout({
  sidebar,
  header,
  className = '',
  children,
}: ResumeLayoutProps) {
  return (
    <div
      className={[
        // App background
        'min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]',
        // Print: make the page white/ink-friendly
        'print:bg-white print:text-black',
        className,
      ].join(' ')}
    >
      {/* Outer container */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 print:max-w-none print:px-0 print:py-0">
        {/* “Paper” surface */}
        <div
          className={[
            'rounded-2xl border border-[var(--color-border)]',
            'bg-[var(--color-surface)] shadow-[var(--shadow-md)]',
            'print:rounded-none print:border-0 print:bg-white print:shadow-none',
          ].join(' ')}
        >
          {/* Optional header */}
          {header && (
            <div className="border-b border-[var(--color-border)] px-6 py-6 print:border-gray-200">
              {header}
            </div>
          )}

          {/* Content grid */}
          <div
            className={[
              'grid gap-8 px-6 py-8',
              // mobile: stack, desktop: sidebar + main
              sidebar ? 'lg:grid-cols-[320px_1fr]' : 'grid-cols-1',
              'print:grid-cols-[260px_1fr] print:gap-6 print:px-8 print:py-8',
            ].join(' ')}
          >
            {/* Sidebar */}
            {sidebar && (
              <aside className="space-y-6 print:space-y-4">
                {sidebar}
              </aside>
            )}

            {/* Main content */}
            <main className="space-y-8 print:space-y-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}