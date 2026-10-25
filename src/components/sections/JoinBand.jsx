import { Link } from 'react-router'
import { useLanguage } from '../../i18n/LanguageContext'
import { contactPage, joinBand } from '../../data/common'
import './JoinBand.css'

// Orange invitation band at the end of the inner pages.
export default function JoinBand() {
  const { t } = useLanguage()

  return (
    <section className="join-band">
      <div className="container--narrow">
        <h2 className="join-band__title">{t(joinBand.title)}</h2>
        <p className="join-band__text">{t(joinBand.text)}</p>
        <Link className="btn btn--light" to={contactPage.path}>
          {t(joinBand.cta)}
        </Link>
      </div>
    </section>
  )
}
