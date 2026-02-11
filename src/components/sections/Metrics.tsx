import { motion, type Variants } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/card'
import Stat from '../ui/Stat'
import type { Lang } from '../../types/lang'

type Props = {
  lang: Lang
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

export default function Metrics({ lang }: Props) {
  const title = lang === 'ja' ? 'インパクト' : 'Impact'
  const subtitle =
    lang === 'ja'
      ? '重要な成果：スピード、セキュリティ、信頼性。'
      : 'Outcomes that matter: velocity, security, reliability.'

  const metrics =
    lang === 'ja'
      ? [
          {
            label: 'プラットフォーム近代化',
            value: '40%高速化',
            description: 'CI/CDの標準化によりリリース頻度を改善。',
          },
          {
            label: '脆弱性対応',
            value: '↓ サイクル短縮',
            description: '再現可能な検証と報告ワークフローを整備。',
          },
          {
            label: 'SSO／フェデレーション',
            value: 'エンタープライズ規模',
            description: 'SAML/OIDC + RBAC + SCIMによるライフサイクル自動化。',
          },
        ]
      : [
          {
            label: 'Platform Modernization',
            value: '40% faster',
            description: 'Release cadence improved via CI/CD standardization.',
          },
          {
            label: 'Vuln Remediation',
            value: '↓ cycle time',
            description: 'Repeatable validation + reporting workflows.',
          },
          {
            label: 'SSO / Federation',
            value: 'Enterprise scale',
            description: 'SAML/OIDC + RBAC + lifecycle automation (SCIM).',
          },
        ]

  return (
    <Section title={title} subtitle={subtitle}>
      <motion.div
        className="grid gap-6 sm:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {metrics.map((m) => (
          <motion.div key={m.label} variants={cardVariants}>
            <Card className="h-full">
              <Stat label={m.label} value={m.value} description={m.description} />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}