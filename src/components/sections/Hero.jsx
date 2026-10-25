import Logo from '../ui/Logo'
import { useLanguage } from '../../i18n/LanguageContext'
import { hero, ui } from '../../data/content'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        {hero.backgroundVideo ? (
          <video
            className="hero__bg"
            src={hero.backgroundVideo}
            poster={hero.backgroundImage ?? undefined}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          hero.backgroundImage && (
            <img className="hero__bg" src={hero.backgroundImage} alt="" fetchPriority="high" />
          )
        )}
        <div className="hero__shade" />
      </div>

      <a href="#top" className="hero__logo-link" aria-label={t(ui.home)}>
        <Logo className="hero__logo" />
      </a>

      <div className="hero__content container">
        <h1 className="hero__title">{t(hero.title)}</h1>
        <p className="hero__subtitle">{t(hero.subtitle)}</p>
        <a className="btn" href={hero.cta.href}>
          {t(hero.cta.label)}
        </a>
      </div>
    </header>
  )
}
