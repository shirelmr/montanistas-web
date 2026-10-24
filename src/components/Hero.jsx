import Logo from './Logo'
import { useLanguage } from '../i18n/LanguageContext'
import { hero, ui } from '../data/content'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <header className="hero" id="top">
      <div className="hero__bar">
        <a href="#top" className="hero__logo-link" aria-label={t(ui.home)}>
          <Logo className="hero__logo" />
        </a>
      </div>

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
        ) : hero.backgroundImage ? (
          <img className="hero__bg" src={hero.backgroundImage} alt="" />
        ) : (
          <svg className="hero__scene" viewBox="0 0 1600 700" preserveAspectRatio="xMidYMax slice">
            <path
              d="M0 520 L180 360 L300 430 L470 250 L620 400 L760 300 L900 420 L1060 220 L1220 380 L1380 290 L1600 450 L1600 700 L0 700 Z"
              fill="#c7d4e4"
            />
            <path
              d="M470 250 L520 300 L500 310 L540 340 L470 320 L430 300 Z M1060 220 L1110 270 L1090 280 L1130 310 L1060 290 L1010 270 Z"
              fill="#fff"
            />
            <path
              d="M0 600 L220 470 L380 540 L560 430 L760 560 L980 450 L1180 560 L1400 470 L1600 560 L1600 700 L0 700 Z"
              fill="#e9eff6"
            />
          </svg>
        )}
        <div className="hero__shade" />
      </div>

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
