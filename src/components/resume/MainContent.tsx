import { Card } from '@/components/ui/card';
import Section from '@/components/resume/blocks/Section';
import TimelineItem from '@/components/resume/blocks/TimelineItem';
import Tag from '@/components/resume/blocks/Tag';

export default function MainContent() {
  return (
    <main className="space-y-6">
      {/* ABOUT */}
      <Card tone="default">
        <Section
          title="About"
          subtitle={
            <>
              Platform/DevOps engineer focused on secure identity, automation, and reliable
              delivery. I build boring systems that don’t fail at 2AM: CI/CD that’s predictable,
              access that’s auditable, and platforms that are easy to operate.
            </>
          }
        >
          <div className="flex flex-wrap gap-2">
            <Tag tone="accent">Platform Engineering</Tag>
            <Tag>DevSecOps</Tag>
            <Tag>Okta / IAM</Tag>
            <Tag>Kubernetes</Tag>
          </div>
        </Section>
      </Card>

      {/* EXPERIENCE */}
      <Card tone="default">
        <Section title="Experience">
          <div className="space-y-6">
            <TimelineItem
              title="Platform Engineer"
              org="Army Software Factory"
              range="2023–Present"
              location="Austin, TX"
              summary={
                <>
                  Own platform operations and identity workflows across developer tooling. Build
                  repeatable onboarding and access patterns, tighten security controls, and document
                  everything so teams move faster without breaking compliance.
                </>
              }
              bullets={[
                'Automated onboarding + access validation across Okta, GitLab, and Google Workspace.',
                'Implemented CI/CD quality gates (lint/test/coverage) with cleaner logs and traceable artifacts.',
                'Standardized incident triage with runbooks, escalation paths, and audit-friendly checklists.',
              ]}
              tags={['Okta', 'GitLab', 'Google Workspace', 'CI/CD']}
            />

            {/* Add more roles below */}
            <TimelineItem
              title="(Your previous role)"
              org="(Org)"
              range="(Dates)"
              location="(Location)"
              bullets={[
                'Add 2–3 impact bullets. Use numbers where possible: time saved, incidents reduced, users supported.',
                'Keep bullets “did X → resulted in Y”. Avoid job-description fluff.',
              ]}
              tags={['Systems', 'Security', 'Automation']}
            />
          </div>
        </Section>
      </Card>

      {/* PROJECTS */}
      <Card tone="default">
        <Section
          title="Projects"
          subtitle="Selected work that demonstrates platform thinking, automation, and operational reliability."
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-4 print:bg-white">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold text-zinc-100 print:text-zinc-900">TechOps Portal</h3>
                <span className="text-xs text-zinc-400 print:text-zinc-600">
                  Internal tooling / documentation
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-200 print:text-zinc-700">
                Built a centralized portal for onboarding, SOPs, and ticket triage so teams can
                execute consistent processes fast.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>Docs</Tag>
                <Tag>Automation</Tag>
                <Tag tone="accent">Platform</Tag>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-4 print:bg-white">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-semibold text-zinc-100 print:text-zinc-900">
                  CI/CD Deploy to cPanel via SSH
                </h3>
                <span className="text-xs text-zinc-400 print:text-zinc-600">
                  GitHub Actions pipeline
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-200 print:text-zinc-700">
                Implemented build/test/deploy stages with predictable outputs and secure secrets
                handling.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Tag>GitHub Actions</Tag>
                <Tag>SSH</Tag>
                <Tag tone="accent">CI/CD</Tag>
              </div>
            </div>
          </div>
        </Section>
      </Card>

      {/* EDUCATION */}
      <Card tone="subtle">
        <Section title="Education">
          <div className="text-sm text-zinc-200 print:text-zinc-700">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <span className="font-medium text-zinc-100 print:text-zinc-900">
                (Degree) — (School)
              </span>
              <span className="text-xs text-zinc-400 print:text-zinc-600">(Year)</span>
            </div>
            <p className="mt-1 text-zinc-300 print:text-zinc-700">
              (Optional: relevant coursework / honors)
            </p>
          </div>
        </Section>
      </Card>
    </main>
  );
}
