import Photo from './Photo'
import { useLanguage } from '../i18n/LanguageContext'
import { intro } from '../data/content'
import './Intro.css'

export default function Intro() {
  const { t } = useLanguage()

  return (
    <section className="intro section section--grey">
      <div className="container">
        <h2 className="section-title">{intro.title}</h2>
        <div className="intro__grid">
          <div className="intro__photo">
            <Photo src={intro.photo.src} alt={t(intro.photo.alt)} />
          </div>
          <div className="intro__text">
            <h3 className="intro__subtitle">{t(intro.subtitle)}</h3>
            {t(intro.paragraphs).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
