import Logo from '../ui/Logo'
import { useLanguage } from '../../i18n/LanguageContext'
import { about } from '../../data/home'
import './About.css'

// Glides down to the activity cards instead of jumping.
function scrollToTarget(event) {
  const target = document.querySelector(event.currentTarget.getAttribute('href'))
  if (!target) return
  event.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}

export default function About({ tone = 'grey' }) {
  const { t } = useLanguage()

  return (
    <section className={`about section section--${tone}`} id="nosotros">
      <div className="about__grid container">
        <Logo className="about__logo" />
        <div className="about__text">
          <p className="about__eyebrow">{t(about.eyebrow)}</p>
          <h2 className="about__title">{about.title}</h2>
          <div className="about__lines">
            {t(about.lines).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="about__description">{t(about.description)}</p>
          <a className="btn about__cta" href={about.cta.href} onClick={scrollToTarget}>
            {t(about.cta.label)}
          </a>
        </div>
      </div>
    </section>
  )
}
