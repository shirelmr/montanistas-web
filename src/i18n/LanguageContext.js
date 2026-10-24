import { createContext, useContext } from 'react'

export const LANGUAGES = ['es', 'en']
export const DEFAULT_LANGUAGE = 'es'

export const LanguageContext = createContext(null)

export function useLanguage() {
  return useContext(LanguageContext)
}

// Content fields are either plain values (same in both languages) or
// `{ es, en }` pairs. This picks the right side of a pair.
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && DEFAULT_LANGUAGE in value) {
    return value[lang] ?? value[DEFAULT_LANGUAGE]
  }
  return value
}
