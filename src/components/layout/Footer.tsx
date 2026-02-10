import Container from './Container'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#docs', label: 'Docs' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-bg))]">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left side */}
        <div className="space-y-2">
          <p className="text-sm text-[hsl(var(--color-muted))]">
            © {year}{' '}
            <span className="text-[hsl(var(--color-text))] font-medium">
              Melvin Spiller
            </span>{' '}
            <span className="text-[hsl(var(--color-muted))]">
              • Platform Engineer
            </span>
          </p>

          <p className="text-xs text-[hsl(var(--color-muted))]">
            Built like a product, not a poster.
          </p>
        </div>

        {/* Right side navigation */}
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[hsl(var(--color-muted))] transition-colors hover:text-[hsl(var(--color-text))]"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </Container>
    </footer>
  )
}