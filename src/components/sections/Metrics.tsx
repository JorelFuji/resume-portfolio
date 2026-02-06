import { motion, type Variants } from 'framer-motion'
import Section from '../layout/Section'
import Card from '../ui/Card'
import Stat from '../ui/Stat'

const metrics = [
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

export default function Metrics() {
  return (
    <Section title="Impact" subtitle="Outcomes that matter: velocity, security, reliability.">
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