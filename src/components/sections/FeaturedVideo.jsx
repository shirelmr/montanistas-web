import VideoEmbed from '../ui/VideoEmbed'
import { useLanguage } from '../../i18n/LanguageContext'
import { featuredVideo } from '../../data/content'
import './FeaturedVideo.css'

export default function FeaturedVideo() {
  const { t } = useLanguage()

  return (
    <section className="featured section section--dark">
      <div className="container--narrow">
        <h2 className="section-title section-title--plain">{featuredVideo.heading}</h2>
        <div className="featured__credits">
          {t(featuredVideo.credits).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <VideoEmbed video={featuredVideo.video} />
      </div>
    </section>
  )
}
