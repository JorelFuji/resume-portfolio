import type { PropsWithChildren, ReactNode } from 'react'
import Tag from './Tag'

type TimelineItemProps = PropsWithChildren<{
  title: string
  org?: string
  range?: string
  location?: string
  summary?: ReactNode
  bullets?: string[]
  tags?: string[]
  href?: string
}>

export default function TimelineItem({
  title,
  org,
  range,
  location,
  summary,
  bullets,
  tags,
  href,
  children,
}: TimelineItemProps) {
  const Heading = (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <div className="min-w-0">
        <h3 className="truncate font-semibold text-zinc-100">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-zinc-700/70 underline-offset-4 hover:decoration-zinc-400"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        {(org || location) && (
          <p className="mt-0.5 text-sm text-zinc-300">
            {org ? <span className="font-medium">{org}</span> : null}
            {org && location ? <span className="text-zinc-500"> • </span> : null}
            {location ? <span>{location}</span> : null}
          </p>
        )}
      </div>

      {range ? <span className="text-xs text-zinc-400">{range}</span> : null}
    </div>
  )

  return (
    <div className="relative pl-6">
      {/* Left rail + dot */}
      <div className="absolute left-0 top-1.5 h-full w-px bg-zinc-800/70" />
      <div className="absolute left-[-3px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-300/70 ring-4 ring-zinc-950" />

      {Heading}

      {summary ? (
        <div className="mt-2 text-sm leading-relaxed text-zinc-200">{summary}</div>
      ) : null}

      {bullets?.length ? (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-200">
          {bullets.map((b, i) => (
            <li key={`${b}-${i}`}>{b}</li>
          ))}
        </ul>
      ) : null}

      {/* Optional custom content */}
      {children ? <div className="mt-3">{children}</div> : null}

      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      ) : null}
    </div>
  )
}