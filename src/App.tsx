import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'

import type { Lang } from './types/i18n'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import Metrics from './components/sections/Metrics'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Docs from './components/sections/Docs'
import Contact from './components/sections/Contact'

function safeLang(v: unknown): Lang {
  return v === 'ja' ? 'ja' : 'en'
}

function PortfolioPage({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const labels = useMemo(() => {
    return lang === 'ja'
      ? {
          language: '言語',
          english: 'EN',
          japanese: '日本語',
          skip: '本文へスキップ',
        }
      : {
          language: 'Language',
          english: 'EN',
          japanese: '日本語',
          skip: 'Skip to content',
        }
  }, [lang])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2"
      >
        {labels.skip}
      </a>

      <Navbar />

      {/* Utility bar (language only) */}
      <div className="border-b border-zinc-800/60 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
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
        {/* Only pass lang if component supports it */}
        <Hero lang={lang} />
        <Metrics lang={lang} />

        <Skills />
        <Projects />

        <Docs lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer />
    </div>
  )
}

function PortfolioRoute({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const routeLang = safeLang(params.lang)
    setLang(routeLang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.lang])

  return (
    <PortfolioPage
      lang={lang}
      setLang={(l) => {
        setLang(l)
        navigate(`/${l}`, { replace: true })
      }}
    />
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    return saved === 'ja' ? 'ja' : 'en'
  })

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${lang}`} replace />} />
      <Route path="/:lang" element={<PortfolioRoute lang={lang} setLang={setLang} />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  )
}