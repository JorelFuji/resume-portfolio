// src/App.tsx
import { useEffect, useMemo } from 'react'
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero'
import Metrics from './components/sections/Metrics'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Docs from './components/sections/Docs'
import Contact from './components/sections/Contact'

type Lang = 'en' | 'ja'

function safeLang(v: unknown): Lang {
  return v === 'ja' ? 'ja' : 'en'
}

function PortfolioPage({ lang }: { lang: Lang }) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2"
      >
        {t('skip')}
      </a>

      <Navbar />

      <div className="border-b border-zinc-800/60 bg-zinc-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <LangSwitcher current={lang} />
        </div>
      </div>

      <main id="content">
        <Hero />
        <Metrics />
        <Skills />
        <Projects />
        <Docs />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function LangSwitcher({ current }: { current: Lang }) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex items-center gap-2 text-zinc-400">
      <span>{t('language')}</span>

      <button
        type="button"
        onClick={() => navigate('/en', { replace: true })}
        className={`rounded-md border px-2 py-1 ${
          current === 'en'
            ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
            : 'border-zinc-800 hover:bg-zinc-900/60'
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => navigate('/ja', { replace: true })}
        className={`rounded-md border px-2 py-1 ${
          current === 'ja'
            ? 'border-zinc-600 bg-zinc-900 text-zinc-100'
            : 'border-zinc-800 hover:bg-zinc-900/60'
        }`}
      >
        日本語
      </button>
    </div>
  )
}

function PortfolioRoute() {
  const params = useParams()
  const { i18n } = useTranslation()

  const lang = useMemo(() => safeLang(params.lang), [params.lang])

  // Keep i18next + <html lang> + localStorage in sync with the route
  useEffect(() => {
    document.documentElement.lang = lang

    // Only call if different
    if (!i18n.language?.startsWith(lang)) {
      i18n.changeLanguage(lang)
    }

    try {
      localStorage.setItem('i18nextLng', lang)
    } catch {
      // ignore
    }
  }, [lang, i18n])

  return <PortfolioPage lang={lang} />
}

function initialLang(): Lang {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null
  return saved && saved.startsWith('ja') ? 'ja' : 'en'
}

export default function App() {
  const lang = initialLang()

  return (
    <Routes>
      {/* redirect / -> /en or /ja based on last saved */}
      <Route path="/" element={<Navigate to={`/${lang}`} replace />} />

      {/* main language route */}
      <Route path="/:lang" element={<PortfolioRoute />} />

      {/* fallback */}
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  )
}