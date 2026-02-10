import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Senior-level design work, presented like an exhibit.
        </motion.h1>

        <p className="mt-4 max-w-2xl text-muted">
          Case studies with process, iterations, and impact — built with a real design system.
        </p>
      </section>

      <section id="projects" className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border p-6 bg-surface">
          <h2>Featured Project</h2>
          <p className="mt-2 text-muted">Add your hero image + story structure here.</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-surface">
          <h2>Featured Project</h2>
          <p className="mt-2 text-muted">Second case study.</p>
        </div>
      </section>
    </div>
  )
}