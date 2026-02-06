export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
  media?: { type: 'image' | 'video'; src: string; alt?: string }
}

export const projects: Project[] = [
  {
    id: 'eams-a-oidc',
    title: 'EAMS-A Inbound OIDC Federation',
    description:
      'Inbound federation brokered via Okta, mapping EDIPI + secondary email claims with defensive login flows and RBAC enforcement.',
    tags: ['Okta', 'OIDC', 'SSO', 'PKCE', 'Federation'],
    media: { type: 'video', src: '/media/demo.mp4', alt: 'OIDC federation demo' },
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Deployment Pipeline',
    description:
      'GitHub Actions build/test/deploy stages with secure secret handling and repeatable SSH-based deployments.',
    tags: ['GitHub Actions', 'DevSecOps', 'Node', 'React'],
    href: '#', // replace with repo link when ready
  },
  {
    id: 'scim-onboarding',
    title: 'Okta + SCIM Onboarding Automation',
    description:
      'Automated user lifecycle onboarding with deterministic attribute mapping, group rules, and app entitlements.',
    tags: ['Okta', 'SCIM', 'OIDC', 'Google Workspace', 'Automation'],
    href: '#', // replace with doc link when ready
  },
]