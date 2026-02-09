import Section from '../layout/Section'
import Carousel from '../ui/Carousel'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import FadeIn from '../motion/FadeIn'
import HoverLift from '../motion/HoverLift'
import { projects } from '../../data/projects'

type Lang = 'en' | 'ja'
type Props = { lang?: Lang }

export default function Projects({ lang = 'en' }: Props) {
  const title = lang === 'ja' ? '注目プロジェクト' : 'Featured Projects'
  const subtitle =
    lang === 'ja'
      ? 'ID管理、自動化、セキュリティ、デリバリーに関する代表的な取り組み。'
      : 'Selected work — identity, automation, security posture, and delivery systems.'

  return (
    <Section id="projects" title={title} subtitle={subtitle}>
      <Carousel
        ariaLabel="Featured projects"
        items={projects.map((p) => (
          <FadeIn key={p.id}>
            <HoverLift className="h-full">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                {/* Background media */}
                {p.media?.type === 'image' ? (
                  <img
                    src={p.media.src}
                    alt={p.media.alt ?? p.title}
                    className="h-[260px] w-full object-cover sm:h-[320px]"
                    loading="lazy"
                  />
                ) : p.media?.type === 'video' ? (
                  <video
                    src={p.media.src}
                    className="h-[260px] w-full object-cover sm:h-[320px]"
                    muted
                    playsInline
                    autoPlay
                    loop
                  />
                ) : (
                  <div className="h-[260px] w-full bg-zinc-900/40 sm:h-[320px]" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>

                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-zinc-300 hover:text-white"
                        >
                          Live →
                        </a>
                      )}
                    </div>

                    <p className="max-w-3xl text-sm text-zinc-300/90">{p.description}</p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (p.href) window.open(p.href, '_blank', 'noreferrer')
                        }}
                      >
                        {lang === 'ja' ? '詳細' : 'Details'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </HoverLift>
          </FadeIn>
        ))}
      />
    </Section>
  )
}