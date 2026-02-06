import type { PropsWithChildren } from 'react'

type CalloutProps = PropsWithChildren<{
  tone?: 'neutral' | 'info' | 'warning'
}>

export default function Callout({ tone = 'neutral', children }: CalloutProps) {
  const tones = {
    neutral: 'border-zinc-800 bg-zinc-900/40 text-zinc-300',
    info: 'border-blue-800/40 bg-blue-950/40 text-blue-300',
    warning: 'border-amber-800/40 bg-amber-950/40 text-amber-300',
  }

  return (
    <div
      className={`rounded-xl border px-4 py-3 text-sm ${tones[tone]}`}
    >
      {children}
    </div>
  )
}