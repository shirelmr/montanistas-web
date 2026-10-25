import { TbWorld } from 'react-icons/tb'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import './LanguageToggle.css'

const OPTIONS = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
]

// ES / EN switch shown in the site header.
export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label={t(ui.language)}>
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
