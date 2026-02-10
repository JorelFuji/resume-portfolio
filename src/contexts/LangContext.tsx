import React, { createContext, useEffect, useMemo, useState } from 'react'
import type { Lang } from '../types/i18n'

export type LangCtx = {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LangContext = React.createContext<LangCtx | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'ja' ? 'ja' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}