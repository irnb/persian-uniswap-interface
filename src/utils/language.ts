import i18next from 'i18next'
export enum RtlLanguages {
  fa = 'fa'
}
export function getLanguageDirection(): string {
  return i18next.language === 'fa' ? 'rtl' : 'ltr'
}
