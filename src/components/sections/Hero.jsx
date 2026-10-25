import { Link } from 'react-router'
import Logo from '../ui/Logo'
import { useLanguage } from '../../i18n/LanguageContext'
import { hero } from '../../data/home'
import './Hero.css'

// Full-screen opening banner of the home page.
export default function Hero() {
  const { t } = useLanguage()

  return (
    // data-header-reveal: the site header keeps its logo and menu hidden
    // until this banner has been scrolled past.
    <section className="hero" data-header-reveal>
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

      <div className="hero__content container">
        <Logo className="hero__logo" />
        <h1 className="hero__title">{t(hero.title)}</h1>
        <p className="hero__subtitle">{t(hero.subtitle)}</p>
        <Link className="btn" to={hero.cta.to}>
          {t(hero.cta.label)}
        </Link>
      </div>
    </section>
  )
}
