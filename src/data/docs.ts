export type DocItem = {
  id: string
  title: string
  summary: string
  tags: string[]
  href?: string
}

export const docs: DocItem[] = [
  {
    id: 'iam-patterns',
    title: 'Identity & Access Patterns',
    summary:
      'Inbound federation → normalized claims → group rules → RBAC enforcement. Includes PKCE, session assurance, and audit-friendly logging.',
    tags: ['IAM', 'OIDC', 'SAML', 'RBAC', 'SCIM'],
    href: '#', // later: link to a route or markdown page
  },
  {
    id: 'cicd-runbook',
    title: 'CI/CD & DevSecOps Runbook',
    summary:
      'Build → Test → Ship gates, artifact promotion, secret isolation, and rollback patterns designed for predictable releases.',
    tags: ['CI/CD', 'GitHub Actions', 'DevSecOps'],
    href: '#',
  },
  {
    id: 'zero-trust',
    title: 'Zero Trust Posture Checks',
    summary:
      'Signals, controls, and revocation patterns: device posture, risk, step-up auth, segmentation, and least privilege.',
    tags: ['Zero Trust', 'Device Assurance', 'Conditional Access'],
    href: '#',
  },
]