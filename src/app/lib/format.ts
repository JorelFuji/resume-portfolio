export function formatNumber(value: number, opts?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat('en-US', opts).format(value)
}

export function formatCurrency(
  value: number,
  currency: string = 'USD',
  opts?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    ...opts,
  }).format(value)
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }
) {
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return ''
  return new Intl.DateTimeFormat('en-US', opts).format(d)
}

export function formatDateRange(
  start: Date | string | number,
  end?: Date | string | number | null,
  opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }
) {
  const s = formatDate(start, opts)
  const e = end ? formatDate(end, opts) : 'Present'
  if (!s) return e
  return `${s} — ${e}`
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function readingTimeMinutes(text: string) {
  // ~200 wpm baseline
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}