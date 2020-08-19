import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `./locales/fa.json`
    },
    react: {
      useSuspense: true
    },
    interpolation: { escapeValue: false },
    fallbackLng: 'fa',
    lng: 'fa',
    preload: ['fa', 'en'],
    defaultNS: 'fa'
  })

export default i18next
