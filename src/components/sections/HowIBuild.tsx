import Section from '../layout/Section'
import Card from '../ui/Card'
import Callout from '../ui/Callout'
import Divider from '../ui/Divider'

export default function HowIBuild() {
  return (
    <Section
      id="how-i-build"
      title="How I Build Systems"
      subtitle="From identity-driven security to automated delivery — built for scale, compliance, and reliability."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Sticky narrative */}
        <div className="lg:sticky lg:top-24 space-y-4 self-start">
          <h3 className="text-xl font-semibold">
            Identity → Policy → Delivery
          </h3>
          <p className="text-sm text-zinc-400">
            Systems fail when identity is bolted on late. I design platforms
            where access, policy, and delivery are first-class concerns.
          </p>

          <Callout tone="neutral">
            Senior principle: boring, auditable systems outlast clever ones.
          </Callout>
        </div>

        {/* Evidence */}
        <div className="space-y-12">
          <Card>
            <h4 className="text-lg font-semibold mb-2">
              Identity & Federation
            </h4>
            <p className="text-sm text-zinc-400">
              Inbound federation → normalized claims → group-based RBAC →
              conditional access enforcement.
            </p>
          </Card>

          <Divider />

          <Card>
            <h4 className="text-lg font-semibold mb-2">
              CI/CD & Automation
            </h4>
            <p className="text-sm text-zinc-400">
              Deterministic pipelines with build gates, artifact promotion,
              secrets isolation, and rollback paths.
            </p>
          </Card>

          <Divider />

          <Card>
            <h4 className="text-lg font-semibold mb-2">
              Security & Zero Trust
            </h4>
            <p className="text-sm text-zinc-400">
              Least privilege by default, device posture signals, risk-based
              policies, and clean revocation paths.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}