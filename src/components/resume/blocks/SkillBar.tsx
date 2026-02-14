import type { HTMLAttributes } from 'react'

type SkillBarProps = HTMLAttributes<HTMLDivElement> & {
  label: string
  /** 0–100 */
  value: number
  /** Optional right-side text (e.g., "Advanced", "5y") */
  meta?: string
  /** Accent color style */
  tone?: 'sky' | 'emerald' | 'amber' | 'zinc'
}

const toneClasses: Record<NonNullable<SkillBarProps['tone']>, string> = {
  sky: 'bg-sky-500/70',
  emerald: 'bg-emerald-500/70',
  amber: 'bg-amber-500/70',
  zinc: 'bg-zinc-300/50',
}

function clamp(n: number) {
  return Math.max(0, Math.min(100, n))
}

export default function SkillBar({
  label,
  value,
  meta,
  tone = 'sky',
  className = '',
  ...rest
}: SkillBarProps) {
  const v = clamp(value)

  return (
    <div className={['space-y-2', className].join(' ')} {...rest}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-zinc-100">{label}</span>
        <span className="text-xs text-zinc-400">{meta ?? `${v}%`}</span>
      </div>

      {/* Track */}
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-zinc-900/70 ring-1 ring-inset ring-zinc-800/70"
        role="progressbar"
        aria-label={label}
        aria-valuenow={v}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Fill */}
        <div
          className={[
            'h-full rounded-full',
            toneClasses[tone],
            'transition-[width] duration-500 ease-out',
          ].join(' ')}
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  )
}