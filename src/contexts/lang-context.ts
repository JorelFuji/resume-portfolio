import { createContext } from 'react'
import type { Lang } from '../types/i18n'

export type LangCtx = {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LangContext = createContext<LangCtx | null>(null)