import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'
import { about } from '../data/content'
import './About.css'

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="about section section--grey" id="nosotros">
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
          <a className="btn about__cta" href={about.cta.href}>
            {t(about.cta.label)}
          </a>
        </div>
      </div>
    </section>
  )
}
