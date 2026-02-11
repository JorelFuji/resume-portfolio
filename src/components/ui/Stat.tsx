import React from 'react';

interface StatProps {
  label: string;
  value: string;
  description?: string;
}

export default function Stat({ label, value, description }: StatProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="text-3xl font-bold text-[var(--color-text-primary)]">{value}</p>
      {description && <p className="text-sm text-zinc-400">{description}</p>}
    </div>
  );
}