import { useEffect, useState } from 'react'
import { TbWorld } from 'react-icons/tb'
import { useLanguage } from '../i18n/LanguageContext'
import { ui } from '../data/content'
import './LanguageToggle.css'

const OPTIONS = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
]

// Below this width the pill would sit on top of page content, so it slides
// away while scrolling down and comes back when scrolling up.
const AUTO_HIDE_QUERY = '(max-width: 1279px)'

function useHideOnScrollDown() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const narrow = window.matchMedia(AUTO_HIDE_QUERY)
    let lastY = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      const delta = y - lastY
      if (Math.abs(delta) < 8) return
      setHidden(narrow.matches && y > 120 && delta > 0)
      lastY = y
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onResize = () => {
      if (!narrow.matches) setHidden(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    narrow.addEventListener('change', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      narrow.removeEventListener('change', onResize)
    }
  }, [])

  return hidden
}

// Small pill pinned to the top-right corner for switching languages.
export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  const hidden = useHideOnScrollDown()

  return (
    <div className={`lang-toggle ${hidden ? 'is-hidden' : ''}`} role="group" aria-label={t(ui.language)}>
      <TbWorld className="lang-toggle__icon" aria-hidden="true" />
      {OPTIONS.map(({ code, label, name }) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={`lang-toggle__btn ${lang === code ? 'is-active' : ''}`}
          aria-pressed={lang === code}
          aria-label={name}
          title={name}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
