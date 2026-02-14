import Section from '../layout/Section'
import Card from '../ui/card'
import type { Lang } from '../../types/lang'

import FadeIn from '../motion/FadeIn'
import HoverLift from '../motion/HoverLift'
import SlideUp from '../motion/SlideUp'

type Props = {
  lang: Lang
}

export default function Docs({ lang }: Props) {
  const title = lang === 'ja' ? 'ドキュメント' : 'Docs'
  const subtitle =
    lang === 'ja'
      ? '実運用で再利用している、Runbook形式のメモとパターン。'
      : 'Runbook-style notes and patterns I reuse in real deployments.'

  const card1Title =
    lang === 'ja' ? 'Runbook形式のポートフォリオ' : 'Runbook-Style Portfolio'
  const card1Body =
    lang === 'ja'
      ? '判断の根拠、再現可能なパターン、実装メモを “社内ドキュメント” の書き方で整理。'
      : 'Clear decisions, repeatable patterns, and implementation notes — written like internal docs.'
  const card1Tip =
    lang === 'ja'
      ? 'ヒント： #iam / #cicd / #zero-trust のようなアンカーで整理'
      : 'Tip: use anchors like #iam, #cicd, #zero-trust'

  const card2Title = lang === 'ja' ? '次に追加予定' : 'Coming next'
  const items =
    lang === 'ja'
      ? [
          'アイデンティティ & アクセスのパターン（OIDC/SAML, RBAC, SCIM）',
          'CI/CD のゲートとデプロイ手順',
          'ゼロトラストの姿勢チェック',
          'トラブルシューティングの手順書とチェックリスト',
        ]
      : [
          'Identity & Access patterns (OIDC/SAML, RBAC, SCIM)',
          'CI/CD gates and deploy workflows',
          'Zero Trust posture checks',
          'Troubleshooting playbooks and checklists',
        ]

  return (
    <Section id="docs" title={title} subtitle={subtitle}>
      {/* Optional: one “intro” motion element (don’t spam motion) */}
      <SlideUp className="mb-6">
        <p className="max-w-3xl text-sm text-zinc-400">
          {lang === 'ja'
            ? '短く、再利用できて、実装に落ちる。ドキュメントは“現場で使える”が基準です。'
            : 'Short, reusable, and implementation-ready. Docs are only useful if they ship outcomes.'}
        </p>
      </SlideUp>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Card 1: Fade-in on scroll */}
        <FadeIn>
          <Card>
            <p className="text-sm text-zinc-400">{card1Title}</p>
            <p className="mt-2 text-zinc-200">{card1Body}</p>
            <p className="mt-2 text-sm text-zinc-500">{card1Tip}</p>
          </Card>
        </FadeIn>

        {/* Card 2: Fade-in on scroll */}
        <FadeIn>
          <Card>
            <p className="text-sm text-zinc-400">{card2Title}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              {items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>

      {/* Optional: “doc tiles” that are clickable → HoverLift + link */}
      {/* Example pattern:
          <FadeIn>
            <HoverLift>
              <a href="/docs#iam" className="block">
                <Card variant="interactive">...</Card>
              </a>
            </HoverLift>
          </FadeIn>
      */}
    </Section>
  )
}