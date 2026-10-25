import { Link } from 'react-router'
import { TbArrowRight } from 'react-icons/tb'
import VideoEmbed from '../ui/VideoEmbed'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import { recent } from '../../data/home'
import './RecentHighlights.css'

// "Lo más reciente": the latest videos, each linking to its page.
export default function RecentHighlights({ tone = 'dark' }) {
  const { t } = useLanguage()

  return (
    <section className={`recent section section--${tone}`}>
      <div className="container">
        <h2 className="section-title">{t(recent.heading)}</h2>
        <ul className="recent__grid">
          {recent.items.map((item) => (
            <li key={item.video.title} className="recent-card">
              <VideoEmbed video={item.video} />
              <div className="recent-card__body">
                <p className="recent-card__date">{t(item.date)}</p>
                <h3 className="recent-card__title">{t(item.title)}</h3>
                <p className="recent-card__text">{t(item.text)}</p>
                <Link className="recent-card__more" to={item.link}>
                  {t(ui.seeMore)} <TbArrowRight aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
