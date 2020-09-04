import i18next from 'i18next'
export enum RtlLanguages {
  fa = 'fa'
}

export function getLanguageDirection(): string {
  return i18next.language in RtlLanguages ? 'rtl' : 'ltr'
}
export function getCurrentLanguage(): string {
  if (i18next && i18next?.languages) return i18next?.languages[0]
  return 'en'
}
export function setLanguageDirection(dir?: string): string {
  if (dir === 'rtl') return 'rtl'
  if (dir === 'ltr') return 'ltr'
  return getLanguageDirection()
}
export function setMarginStart(value?: string): string {
  if (getLanguageDirection() === 'rtl') return `margin-right:${value}`
  return `margin-left:${value}`
}
export function setMarginEnd(value?: string): string {
  if (getLanguageDirection() === 'rtl') return `margin-left:${value}`
  return `margin-right:${value}`
}
