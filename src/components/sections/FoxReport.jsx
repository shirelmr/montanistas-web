import VideoEmbed from '../ui/VideoEmbed'
import { useLanguage } from '../../i18n/LanguageContext'
import { foxReport } from '../../data/media'
import './FoxReport.css'

export default function FoxReport({ tone = 'dark' }) {
  const { t } = useLanguage()

  return (
    <section className={`fox section section--${tone}`}>
      <div className="container--narrow">
        <h2 className="section-title">{t(foxReport.heading)}</h2>
        <p className="fox__subtitle">{t(foxReport.subtitle)}</p>
        <VideoEmbed video={foxReport.video} />
      </div>
    </section>
  )
}
