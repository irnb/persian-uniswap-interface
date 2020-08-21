import i18next from 'i18next'
export enum RtlLanguages {
  fa = 'fa'
}
export type CssDir = 'rtl' | 'ltr'

export function getLanguageDirection(): CssDir {
  return i18next.language in RtlLanguages ? 'rtl' : 'ltr'
}
export function setLanguageDirection(dir?: CssDir): CssDir {
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
