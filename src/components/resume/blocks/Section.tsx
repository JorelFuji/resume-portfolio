import type { PropsWithChildren, ReactNode } from 'react'

type SectionProps = PropsWithChildren<{
  title: string
  subtitle?: ReactNode
  right?: ReactNode
  className?: string
}>

export default function Section({
  title,
  subtitle,
  right,
  className = '',
  children,
}: SectionProps) {
  return (
    <section className={['space-y-4', className].join(' ')}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400">
            {title.toUpperCase()}
          </h2>
          {subtitle ? (
            <div className="mt-2 text-sm leading-relaxed text-zinc-200 print:text-zinc-700">
              {subtitle}
            </div>
          ) : null}
        </div>

        {right ? <div className="shrink-0">{right}</div> : null}
      </div>

      <div className="space-y-4">{children}</div>
    </section>
  )
}