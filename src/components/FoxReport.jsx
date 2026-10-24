import VideoEmbed from './VideoEmbed'
import { useLanguage } from '../i18n/LanguageContext'
import { foxReport } from '../data/content'
import './FoxReport.css'

export default function FoxReport() {
  const { t } = useLanguage()

  return (
    <section className="fox section section--dark">
      <div className="container--narrow">
        <h2 className="section-title section-title--white fox__title">{t(foxReport.heading)}</h2>
        <p className="fox__subtitle">{t(foxReport.subtitle)}</p>
        <VideoEmbed video={foxReport.video} />
      </div>
    </section>
  )
}
