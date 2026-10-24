import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGES, LanguageContext, pick } from './LanguageContext'

const STORAGE_KEY = 'mdw-lang'

// Remembers the visitor's choice; storage can throw in private mode, in which
// case the site simply starts in Spanish each visit.
function savedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(savedLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: (text) => pick(text, lang) }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
