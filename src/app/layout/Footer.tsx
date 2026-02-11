import Container from '@/components/layout/Container'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <Container className="py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jarrel Spiller. All rights reserved.</p>
          <p className="text-zinc-500">
            Built with Vite, React, Tailwind.
          </p>
        </div>
      </Container>
    </footer>
  )
}