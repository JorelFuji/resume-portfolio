import Section from '../layout/Section'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

const focus = [
  'IAM • Zero Trust',
  'DevSecOps Automation',
  'Federal & Regulated Systems',
  'Identity-first Architecture',
]

const tools = [
  'Okta',
  'GitHub Actions',
  'Docker',
  'Kubernetes',
  'Node.js',
  'React',
]

const outcomes = [
  'Reduce time-to-access',
  'Harden delivery pipelines',
  'Lower incident rate',
  'Shorten remediation cycles',
]

export default function Skills() {
  return (
    <Section
      title="Focus"
      subtitle="Identity-driven security + automated delivery. Built for reliability, compliance, and scale."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-sm text-zinc-400">Focus</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {focus.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm text-zinc-400">Tools</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm text-zinc-400">Outcomes</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {outcomes.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  )
}