import VideoEmbed from './VideoEmbed'
import { useLanguage } from '../i18n/LanguageContext'
import { interviews } from '../data/content'
import './Interviews.css'

export default function Interviews() {
  const { t } = useLanguage()

  return (
    <section className="interviews section section--grey">
      <div className="container--narrow">
        <h2 className="section-title section-title--white">{t(interviews.heading)}</h2>
        <div className="interviews__rows">
          {interviews.rows.map((row) => (
            <div
              key={row[0].video.title}
              className={`interviews__row ${row.length > 1 ? 'interviews__row--pair' : ''}`}
            >
              {row.map((item) => (
                <article key={item.video.title} className="interviews__item">
                  <VideoEmbed video={item.video} />
                  <h3 className="interviews__title">{t(item.title)}</h3>
                  <p className="interviews__text">{t(item.text)}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
