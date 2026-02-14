// src/data/projects.ts
export const projects = [
    {
        id: 'eams-a-oidc',
        title: 'EAMS-A Inbound OIDC Federation',
        description: 'Inbound federation brokered via Okta, mapping EDIPI + secondary email claims with defensive login flows and RBAC enforcement.',
        tags: ['Okta', 'OIDC', 'SSO', 'PKCE', 'Federation'],
        mediaItems: [
            {
                type: 'video',
                src: '/media/demo.mp4',
                poster: '/media/demo-poster.webp',
                alt: 'OIDC federation demo',
            },
            {
                type: 'image',
                src: '/media/eams-oidc-1.webp',
                alt: 'OIDC flow diagram',
            },
            {
                type: 'image',
                src: '/media/eams-oidc-2.webp',
                alt: 'Okta claim mapping',
            },
        ],
    },
    {
        id: 'cicd-pipeline',
        title: 'CI/CD Deployment Pipeline',
        description: 'GitHub Actions build/test/deploy stages with secure secret handling and repeatable SSH-based deployments.',
        tags: ['GitHub Actions', 'DevSecOps', 'Node', 'React'],
        href: '#',
        mediaItems: [
            {
                type: 'image',
                src: '/media/cicd-1.webp',
                alt: 'GitHub Actions workflow',
            },
            {
                type: 'image',
                src: '/media/cicd-2.webp',
                alt: 'Deployment logs',
            },
        ],
    },
    {
        id: 'scim-onboarding',
        title: 'Okta + SCIM Onboarding Automation',
        description: 'Automated user lifecycle onboarding with deterministic attribute mapping, group rules, and app entitlements.',
        tags: ['Okta', 'SCIM', 'OIDC', 'Google Workspace', 'Automation'],
        href: '#',
        mediaItems: [
            {
                type: 'image',
                src: '/media/scim-1.webp',
                alt: 'SCIM provisioning flow',
            },
            {
                type: 'image',
                src: '/media/scim-2.webp',
                alt: 'Group rules and entitlements',
            },
        ],
    },
];
