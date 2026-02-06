import Section from '../layout/Section'
import Card from '../ui/Card'

export default function Docs() {
  return (
    <Section
      id="docs"
      title="Docs"
      subtitle="Runbook-style notes and patterns I reuse in real deployments."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-sm text-zinc-400">Runbook-Style Portfolio</p>
          <p className="mt-2 text-zinc-200">
            Clear decisions, repeatable patterns, and implementation notes — written like internal docs.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            Tip: use anchors like #iam, #cicd, #zero-trust
          </p>
        </Card>

        <Card>
          <p className="text-sm text-zinc-400">Coming next</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
            <li>Identity & Access patterns (OIDC/SAML, RBAC, SCIM)</li>
            <li>CI/CD gates and deploy workflows</li>
            <li>Zero Trust posture checks</li>
            <li>Troubleshooting playbooks and checklists</li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}