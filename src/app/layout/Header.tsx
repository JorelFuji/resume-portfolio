import Container from '@/components/layout/Container'
import Nav from './Nav'
import SkipLink from './SkipLink'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur">
      <SkipLink />
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50">
            JS
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Jarrel Spiller</div>
            <div className="text-xs text-zinc-400">Platform Engineer • Design-minded</div>
          </div>
        </div>

        <Nav />
      </Container>
    </header>
  )
}