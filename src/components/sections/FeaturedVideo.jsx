import VideoEmbed from '../ui/VideoEmbed'
import { useLanguage } from '../../i18n/LanguageContext'
import './FeaturedVideo.css'

// One large video with a heading and a few lines of text above it.
export default function FeaturedVideo({ heading, text, video, tone = 'dark' }) {
  const { t } = useLanguage()

  return (
    <section className={`featured section section--${tone}`}>
      <div className="container--narrow">
        <h2 className="section-title">{t(heading)}</h2>
        {text && (
          <div className="featured__text">
            {t(text).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
        <VideoEmbed video={video} />
      </div>
    </section>
  )
}
