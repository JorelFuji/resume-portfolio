import React, { useEffect, useMemo, useRef, useState } from 'react'

type CarouselProps = {
  items: React.ReactNode[]
  className?: string
  slideClassName?: string
  showArrows?: boolean
  showDots?: boolean
  ariaLabel?: string
}

export default function Carousel({
  items,
  className = '',
  slideClassName = '',
  showArrows = true,
  showDots = true,
  ariaLabel = 'Carousel',
}: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<Array<HTMLDivElement | null>>([])
  const [active, setActive] = useState(0)

  const count = items.length

  const clampIndex = (idx: number) => Math.max(0, Math.min(idx, count - 1))

  const scrollToIndex = (idx: number) => {
    const nextIdx = clampIndex(idx)
    const el = slideRefs.current[nextIdx]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  const canPrev = active > 0
  const canNext = active < count - 1

  const prev = () => scrollToIndex(active - 1)
  const next = () => scrollToIndex(active + 1)

  const dots = useMemo(() => Array.from({ length: count }, (_, i) => i), [count])

  // Keep active index valid if items change
  useEffect(() => {
    setActive((a) => clampIndex(a))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        if (!visible) return

        const idx = Number((visible.target as HTMLElement).dataset.index ?? '0')
        if (!Number.isNaN(idx)) setActive(clampIndex(idx))
      },
      { root, threshold: [0.35, 0.5, 0.65, 0.8] }
    )

    slideRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (count <= 1) return

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        if (canPrev) prev()
        break
      case 'ArrowRight':
        e.preventDefault()
        if (canNext) next()
        break
      case 'Home':
        e.preventDefault()
        scrollToIndex(0)
        break
      case 'End':
        e.preventDefault()
        scrollToIndex(count - 1)
        break
      default:
        break
    }
  }

  if (count === 0) return null

  return (
    <div className={`relative ${className}`}>
      {/* Arrows */}
      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            disabled={!canPrev}
            aria-label="Previous slide"
            className={[
              'absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-800 bg-zinc-950/70 p-3 text-zinc-200 backdrop-blur',
              'hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-300/40',
              !canPrev ? 'cursor-not-allowed opacity-40 hover:bg-zinc-950/70' : '',
            ].join(' ')}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            aria-label="Next slide"
            className={[
              'absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-800 bg-zinc-950/70 p-3 text-zinc-200 backdrop-blur',
              'hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-300/40',
              !canNext ? 'cursor-not-allowed opacity-40 hover:bg-zinc-950/70' : '',
            ].join(' ')}
          >
            ›
          </button>
        </>
      )}

      {/* Scroller */}
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-2 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none"
      >
        {items.map((node, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => {
              slideRefs.current[i] = el
            }}
            aria-label={`Slide ${i + 1} of ${count}`}
            className={`snap-center shrink-0 w-[92%] sm:w-[70%] lg:w-[55%] ${slideClassName}`}
          >
            {node}
          </div>
        ))}
      </div>

      {/* Dots */}
      {showDots && count > 1 && (
        <div className="mt-2 flex items-center justify-center gap-2" aria-label="Carousel pagination">
          {dots.map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => scrollToIndex(i)}
              className={[
                'h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-zinc-300/40',
                i === active ? 'w-10 bg-zinc-200' : 'w-6 bg-zinc-700 hover:bg-zinc-500',
              ].join(' ')}
            />
          ))}
        </div>
      )}
    </div>
  )
}