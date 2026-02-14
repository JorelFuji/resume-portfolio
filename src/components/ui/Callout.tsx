import React from 'react';

interface CalloutProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'info';
}

export const Callout = ({ children }: CalloutProps) => (
  <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm">
    {children}
  </div>
);

export default Callout;