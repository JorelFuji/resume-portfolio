import Container from './Container'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#docs', label: 'Docs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          <span className="text-zinc-100">Runbook</span>{' '}
          <span className="text-zinc-400">Portfolio</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-zinc-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/downloads/resume.pdf"
            className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  )
}