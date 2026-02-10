// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
    interpolation: { escapeValue: false },

    resources: {
      en: {
        translation: {
          language: 'Language',
          skip: 'Skip to content',
          hero_title: 'Melvin Spiller',
          hero_role: 'Senior Platform Engineer',
        },
      },
      ja: {
        translation: {
          language: '言語',
          skip: '本文へスキップ',
          hero_title: 'メルビン・スピラー',
          hero_role: 'シニア・プラットフォームエンジニア',
        },
      },
    },

    detection: {
      // priority order
      order: ['querystring', 'path', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      // NOTE: path detection can be flaky depending on detector version.
      // We will ALSO explicitly change language from the router in App.tsx.
      caches: ['localStorage'],
    },
  })

export default i18n