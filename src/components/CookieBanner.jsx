import { useState } from 'react'
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
      <h2 className="cookies__title" id="cookies-title">This website uses cookies.</h2>
      <p className="cookies__text">
        We use cookies to analyze website traffic and optimize your website experience. By
        accepting our use of cookies, your data will be aggregated with all other user data.
      </p>
      <button type="button" className="cookies__accept" onClick={accept}>
        Accept
      </button>
    </aside>
  )
}
