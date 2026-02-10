import Section from '../layout/Section'

type Lang = 'en' | 'ja'
type Props = { lang?: Lang }

type Skill = { label: string; weight: 1 | 2 | 3 | 4 }

/**
 * Core “brand” skills for your positioning:
 * - Enterprise Cloud + Security
 * - DevSecOps / Platform Engineering
 * - Federal / compliance (ATO/RMF, NIST)
 * - Modern delivery + your front-end stack
 */
const skillsEn: Skill[] = [
  // Big rocks (weight 4)
  { label: 'Enterprise Cloud Architecture', weight: 4 },
  { label: 'Cloud Security', weight: 4 },
  { label: 'DevSecOps', weight: 4 },
  { label: 'IAM • Zero Trust', weight: 4 },
  { label: 'Kubernetes', weight: 4 },

  // High-signal (weight 3)
  { label: 'AWS • GCP', weight: 3 },
  { label: 'Infrastructure as Code (IaC)', weight: 3 },
  { label: 'CI/CD Pipelines', weight: 3 },
  { label: 'Secure SDLC', weight: 3 },
  { label: 'Observability', weight: 3 },
  { label: 'Container Security', weight: 3 },
  { label: 'Platform Engineering', weight: 3 },

  // Federal / regulated (weight 2–3)
  { label: 'ATO • RMF', weight: 3 },
  { label: 'NIST 800-53', weight: 2 },
  { label: 'FedRAMP', weight: 2 },
  { label: 'Moderate Risk Systems', weight: 2 },
  { label: 'Audit Readiness', weight: 2 },

  // Tooling + delivery (weight 2)
  { label: 'GitHub Actions', weight: 2 },
  { label: 'Docker', weight: 2 },
  { label: 'Pulumi', weight: 2 },
  { label: 'HashiCorp', weight: 2 },
  { label: 'API Design', weight: 2 },

  // Front-end stack (weight 1–2)
  { label: 'React', weight: 2 },
  { label: 'TypeScript', weight: 2 },
  { label: 'Vite', weight: 2 },
  { label: 'Tailwind CSS', weight: 2 },
  { label: 'Windsurf IDE', weight: 1 },

  // Enterprise governance (weight 1–2)
  { label: 'Technical Writing', weight: 1 },
  { label: 'Stakeholder Comms', weight: 1 },
  { label: 'Problem Solving', weight: 1 },
  { label: 'Customer Service', weight: 1 },
  { label: 'Attention to Detail', weight: 1 },
]

const skillsJa: Skill[] = [
  // Big rocks (weight 4)
  { label: 'エンタープライズ・クラウド設計', weight: 4 },
  { label: 'クラウドセキュリティ', weight: 4 },
  { label: 'DevSecOps', weight: 4 },
  { label: 'IAM・ゼロトラスト', weight: 4 },
  { label: 'Kubernetes', weight: 4 },

  // High-signal (weight 3)
  { label: 'AWS・GCP', weight: 3 },
  { label: 'IaC（インフラ自動化）', weight: 3 },
  { label: 'CI/CD パイプライン', weight: 3 },
  { label: 'セキュアSDLC', weight: 3 },
  { label: '可観測性（Observability）', weight: 3 },
  { label: 'コンテナセキュリティ', weight: 3 },
  { label: 'プラットフォームエンジニアリング', weight: 3 },

  // Federal / regulated (weight 2–3)
  { label: 'ATO・RMF', weight: 3 },
  { label: 'NIST 800-53', weight: 2 },
  { label: 'FedRAMP', weight: 2 },
  { label: '中リスク（MR）システム', weight: 2 },
  { label: '監査対応', weight: 2 },

  // Tooling + delivery (weight 2)
  { label: 'GitHub Actions', weight: 2 },
  { label: 'Docker', weight: 2 },
  { label: 'Pulumi', weight: 2 },
  { label: 'HashiCorp', weight: 2 },
  { label: 'API設計', weight: 2 },

  // Front-end stack (weight 1–2)
  { label: 'React', weight: 2 },
  { label: 'TypeScript', weight: 2 },
  { label: 'Vite', weight: 2 },
  { label: 'Tailwind CSS', weight: 2 },
  { label: 'Windsurf IDE', weight: 1 },

  // Soft / enterprise (weight 1)
  { label: '技術文書', weight: 1 },
  { label: 'ステークホルダー調整', weight: 1 },
  { label: '問題解決', weight: 1 },
  { label: '顧客対応', weight: 1 },
  { label: '注意深さ', weight: 1 },
]

const sizeByWeight: Record<Skill['weight'], string> = {
  1: 'text-xs sm:text-sm',
  2: 'text-sm sm:text-base',
  3: 'text-lg sm:text-xl',
  4: 'text-3xl sm:text-4xl font-semibold',
}

/** deterministic “organic” layout */
const jiggleByIndex = [
  'translate-y-0',
  '-translate-y-1',
  'translate-y-1',
  'translate-y-0',
  'translate-y-1',
  '-translate-y-1',
]

export default function Skills({ lang = 'en' }: Props) {
  const title = lang === 'ja' ? '技術スキル' : 'Technical Skills'
  const subtitle =
    lang === 'ja'
      ? 'クラウド×セキュリティ×自動化。実運用で使う“効く”領域を厳選。'
      : 'Cloud × security × automation — the stuff I actually ship in production.'

  const cloud = lang === 'ja' ? skillsJa : skillsEn

  return (
    <Section id="skills" title={title} subtitle={subtitle}>
      <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-10">
        <div className="relative mx-auto flex min-h-[280px] max-w-5xl items-center justify-center">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

          <div className="relative flex flex-wrap justify-center gap-x-6 gap-y-3 text-indigo-200/55">
            {cloud.map((s, i) => (
              <span
                key={`${s.label}-${i}`}
                className={[
                  sizeByWeight[s.weight],
                  'select-none tracking-tight',
                  'transition-transform duration-200',
                  'hover:-translate-y-0.5 hover:text-indigo-100/80',
                  jiggleByIndex[i % jiggleByIndex.length],
                ].join(' ')}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}