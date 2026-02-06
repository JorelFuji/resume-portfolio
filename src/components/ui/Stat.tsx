type StatProps = {
  label: string
  value: string
  description?: string
}

export default function Stat({ label, value, description }: StatProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="text-2xl font-semibold tracking-tight">
        {value}
      </p>
      {description && (
        <p className="text-xs text-zinc-500">
          {description}
        </p>
      )}
    </div>
  )
}