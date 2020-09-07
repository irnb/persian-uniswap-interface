import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

const allowedLanguages = ['fa', 'en']

const defaultLng = 'fa'
let lng = defaultLng

const storageLanguage = localStorage.getItem('language')
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage
}

i18next
  .use(XHR)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
      allowMultiLoading: true
    },
    react: {
      wait: true,
      useSuspense: true
    },
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'fa',
    lng: lng,
    preload: ['fa', 'en'],
    defaultNS: 'fa'
  })

export default i18next
