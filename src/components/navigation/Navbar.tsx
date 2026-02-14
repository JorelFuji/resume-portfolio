import { useEffect, useMemo, useState } from 'react';
import Container from '../layout/Container';

type Lang = 'en' | 'ja';
type Props = { lang?: Lang };

type Link = { href: string; label: string };

const LINKS: Link[] = [
  { href: '#projects', label: 'Projects' },
  { href: '#docs', label: 'Docs' },
  { href: '#contact', label: 'Contact' },
];

function useActiveHash(ids: string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible) return;
        setActive(`#${(visible.target as HTMLElement).id}`);
      },
      { root: null, threshold: [0.35, 0.5, 0.65] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}

export default function Navbar({ lang = 'en' }: Props) {
  void lang; // keep it if you plan to localize labels soon; remove if you don't

  const [open, setOpen] = useState(false);
  const ids = useMemo(() => LINKS.map((l) => l.href.replace('#', '')), []);
  const active = useActiveHash(ids);

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-bg))]/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 font-semibold tracking-tight">
          <span className="text-[hsl(var(--color-text))]">Runbook</span>
          <span className="text-[hsl(var(--color-muted))]">Portfolio</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {LINKS.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={[
                  'transition-colors',
                  isActive
                    ? 'text-[hsl(var(--color-text))]'
                    : 'text-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-text))]',
                ].join(' ')}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="sm:hidden rounded-lg border border-[hsl(var(--color-border))] px-3 py-2 text-sm text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-surface))]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          <a
            href="/downloads/resume.pdf"
            className="rounded-lg border border-[hsl(var(--color-border))] px-3 py-2 text-sm text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-surface))]"
          >
            Resume
          </a>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="sm:hidden border-t border-[hsl(var(--color-border))]">
          <Container className="py-3">
            <nav className="flex flex-col gap-2 text-sm">
              {LINKS.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={[
                      'rounded-lg px-3 py-2 transition-colors',
                      isActive
                        ? 'bg-[hsl(var(--color-surface))] text-[hsl(var(--color-text))]'
                        : 'text-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-surface))] hover:text-[hsl(var(--color-text))]',
                    ].join(' ')}
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
