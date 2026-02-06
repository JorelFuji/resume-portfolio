import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import Metrics from './components/sections/Metrics'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Docs from './components/sections/Docs'
import Contact from './components/sections/Contact'

type Lang = 'en' | 'ja'

function getQueryParam(name: string) {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

function getInitialLang(): Lang {
  // Priority: query param -> localStorage -> default
  const qp = getQueryParam('lang')
  if (qp === 'ja' || qp === 'en') return qp

  const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
  if (saved === 'ja' || saved === 'en') return saved

  return 'en'
}

function getInitialDemo(): boolean {
  // ?demo=1 forces demo mode
  const qp = getQueryParam('demo')
  if (qp === '1' || qp === 'true') return true
  return false
}

export default function App() {
  const [lang, setLang] = useState<Lang>(getInitialLang)
  const [showDemo, setShowDemo] = useState<boolean>(getInitialDemo)

  // Persist language
  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  // Update <html lang="">
  useEffect(() => {
    document.documentElement.lang = lang === 'ja' ? 'ja' : 'en'
  }, [lang])

  const labels = useMemo(() => {
    return lang === 'ja'
      ? {
          demo: 'デモ',
          portfolio: 'ポートフォリオ',
          language: '言語',
          english: 'EN',
          japanese: '日本語',
          skip: '本文へスキップ',
        }
      : {
          demo: 'Demo',
          portfolio: 'Portfolio',
          language: 'Language',
          english: 'EN',
          japanese: '日本語',
          skip: 'Skip to content',
        }
  }, [lang])

  // Demo mode: show full-page sandbox
  if (showDemo) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2"
        >
          {labels.skip}
        </a>

        {/* Minimal top bar for demo controls */}
        <div className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="text-sm text-zinc-300">
              <span className="font-semibold text-zinc-100">Runbook</span>{' '}
              <span className="text-zinc-400">{labels.demo}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span>{labels.language}</span>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-md border px-2 py-1 ${
                    lang === 'en'
                      ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
                      : 'border-zinc-800 hover:bg-zinc-900/60'
                  }`}
                >
                  {labels.english}
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ja')}
                  className={`rounded-md border px-2 py-1 ${
                    lang === 'ja'
                      ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
                      : 'border-zinc-800 hover:bg-zinc-900/60'
                  }`}
                >
                  {labels.japanese}
                </button>
              </div>

              {/* Exit demo */}
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-900"
              >
                {labels.portfolio}
              </button>
            </div>
          </div>
        </div>

        <main id="content">
          <Demo />
        </main>
      </div>
    )
  }

  // Portfolio mode
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2"
      >
        {labels.skip}
      </a>

      {/* Navbar (keep yours) */}
      <Navbar />

      {/* Top utility bar (senior touch: small, useful, not loud) */}
      <div className="border-b border-zinc-800/60 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
          {/* Demo toggle */}
          <button
            type="button"
            onClick={() => setShowDemo(true)}
            className="rounded-md border border-zinc-800 px-2 py-1 text-zinc-300 hover:bg-zinc-900/60 hover:text-white"
            title="Open layout demo sandbox"
          >
            {labels.demo}
          </button>

          {/* Language toggle */}
          <div className="flex items-center gap-2 text-zinc-400">
            <span>{labels.language}</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-md border px-2 py-1 ${
                lang === 'en'
                  ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
                  : 'border-zinc-800 hover:bg-zinc-900/60'
              }`}
            >
              {labels.english}
            </button>
            <button
              type="button"
              onClick={() => setLang('ja')}
              className={`rounded-md border px-2 py-1 ${
                lang === 'ja'
                  ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
                  : 'border-zinc-800 hover:bg-zinc-900/60'
              }`}
            >
              {labels.japanese}
            </button>
          </div>
        </div>
      </div>

      <main id="content">
        {/* Pass lang prop so each section can render bilingual text */}
        <Hero lang={lang} />
        <Metrics lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Docs lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer />
    </div>
  )
}