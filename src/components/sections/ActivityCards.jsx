import { Link } from 'react-router'
import { TbArrowUpRight } from 'react-icons/tb'
import Photo from '../ui/Photo'
import { useLanguage } from '../../i18n/LanguageContext'
import { activities } from '../../data/activities'
import { activitiesSection } from '../../data/home'
import './ActivityCards.css'

// Home page grid with one photo card per activity, each linking to its page.
export default function ActivityCards({ tone = 'grey' }) {
  const { t } = useLanguage()

  return (
    <section className={`activities section section--${tone}`} id="actividades">
      <div className="container">
        <h2 className="section-title">{t(activitiesSection.heading)}</h2>
        <ul className="activities__grid">
          {activities.map(({ slug, title, summary, cardImage }, i) => (
            <li key={slug}>
              <Link to={`/${slug}`} className="activity-card">
                <Photo className="activity-card__bg" src={cardImage} alt="" index={i} />
                <span className="activity-card__arrow" aria-hidden="true">
                  <TbArrowUpRight />
                </span>
                <div className="activity-card__content">
                  <h3 className="activity-card__title">{t(title)}</h3>
                  <p className="activity-card__text">{t(summary)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
