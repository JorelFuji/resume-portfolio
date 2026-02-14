import Section from '../layout/Section'
import Card from '../ui/card'
import Callout from '../ui/Callout'
import Divider from '../ui/Divider'
import type { Lang } from '../../types/lang'

type Props = {
  lang: Lang
}

export default function HowIBuild({ lang }: Props) {
  const title =
    lang === 'ja' ? 'システム設計の考え方' : 'How I Build Systems'

  const subtitle =
    lang === 'ja'
      ? 'アイデンティティ主導のセキュリティから自動化されたデリバリーまで。スケール、コンプライアンス、信頼性を前提に設計。'
      : 'From identity-driven security to automated delivery — built for scale, compliance, and reliability.'

  return (
    <Section id="how-i-build" title={title} subtitle={subtitle}>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Sticky narrative */}
        <div className="lg:sticky lg:top-24 space-y-4 self-start">
          <h3 className="text-xl font-semibold">
            Identity → Policy → Delivery
          </h3>

          <p className="text-sm text-zinc-400">
            {lang === 'ja'
              ? 'アイデンティティを後付けするとシステムは破綻します。アクセス、ポリシー、デリバリーを最初から中核に据えて設計します。'
              : 'Systems fail when identity is bolted on late. I design platforms where access, policy, and delivery are first-class concerns.'}
          </p>

          <Callout tone="neutral">
            {lang === 'ja'
              ? 'シニアの原則：地味で監査可能なシステムは、賢すぎる設計より長く生き残る。'
              : 'Senior principle: boring, auditable systems outlast clever ones.'}
          </Callout>
        </div>

        {/* Evidence */}
        <div className="space-y-12">
          <Card>
            <h4 className="text-lg font-semibold mb-2">
              {lang === 'ja' ? 'アイデンティティとフェデレーション' : 'Identity & Federation'}
            </h4>
            <p className="text-sm text-zinc-400">
              {lang === 'ja'
                ? 'インバウンドフェデレーション → 正規化クレーム → グループベースRBAC → 条件付きアクセスポリシー。'
                : 'Inbound federation → normalized claims → group-based RBAC → conditional access enforcement.'}
            </p>
          </Card>

          <Divider />

          <Card>
            <h4 className="text-lg font-semibold mb-2">
              CI/CD & Automation
            </h4>
            <p className="text-sm text-zinc-400">
              {lang === 'ja'
                ? 'ビルドゲート、成果物昇格、シークレット分離、ロールバック経路を備えた決定論的パイプライン。'
                : 'Deterministic pipelines with build gates, artifact promotion, secrets isolation, and rollback paths.'}
            </p>
          </Card>

          <Divider />

          <Card>
            <h4 className="text-lg font-semibold mb-2">
              {lang === 'ja' ? 'セキュリティとゼロトラスト' : 'Security & Zero Trust'}
            </h4>
            <p className="text-sm text-zinc-400">
              {lang === 'ja'
                ? '最小権限、デバイス姿勢シグナル、リスクベースポリシー、明確な権限剥奪経路。'
                : 'Least privilege by default, device posture signals, risk-based policies, and clean revocation paths.'}
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}