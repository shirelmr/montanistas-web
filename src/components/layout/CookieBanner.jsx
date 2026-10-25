import { useState } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import { cookies } from '../../data/content'
import './CookieBanner.css'

const STORAGE_KEY = 'mdw-cookies-accepted'

// localStorage can throw (private mode, blocked storage), so failures just
// mean the banner shows again next visit.
function wasAccepted() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export default function CookieBanner() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(() => !wasAccepted())

  if (!visible) return null

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore
    }
    setVisible(false)
  }

  return (
    <aside className="cookies" role="dialog" aria-labelledby="cookies-title">
      <h2 className="cookies__title" id="cookies-title">{t(cookies.title)}</h2>
      <p className="cookies__text">{t(cookies.text)}</p>
      <button type="button" className="cookies__accept" onClick={accept}>
        {t(cookies.accept)}
      </button>
    </aside>
  )
}
