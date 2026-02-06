import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Melvin Spiller • Platform Engineer
        </p>

        <div className="flex gap-4 text-sm">
          <a className="text-zinc-400 hover:text-white" href="#projects">
            Projects
          </a>
          <a className="text-zinc-400 hover:text-white" href="#docs">
            Docs
          </a>
          <a className="text-zinc-400 hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  )
}