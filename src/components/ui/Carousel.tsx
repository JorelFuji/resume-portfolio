import Section from '../layout/Section'
import Grid from '../layout/Grid'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'

import FadeIn from '../motion/FadeIn'
import HoverLift from '../motion/HoverLift'

import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Built to solve real problems: access, automation, security, and operations."
    >
      <Grid cols="sm:grid-cols-2 lg:grid-cols-3" gap="gap-6">
        {projects.map((p) => (
          <FadeIn key={p.id}>
            <HoverLift>
              <Card className="h-full">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.title}</h3>

                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-zinc-400 hover:text-white"
                      >
                        View →
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-zinc-400">
                    {p.description}
                  </p>

                  {p.media?.type === 'video' && (
                    <video
                      src={p.media.src}
                      controls
                      playsInline
                      className="w-full rounded-xl border border-zinc-800"
                    />
                  )}

                  {p.media?.type === 'image' && (
                    <img
                      src={p.media.src}
                      alt={p.media.alt ?? p.title}
                      className="w-full rounded-xl border border-zinc-800 object-cover"
                      loading="lazy"
                    />
                  )}

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  {p.href && (
                    <div className="pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(p.href, '_blank', 'noreferrer')
                        }
                      >
                        Open project
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </HoverLift>
          </FadeIn>
        ))}
      </Grid>
    </Section>
  )
}