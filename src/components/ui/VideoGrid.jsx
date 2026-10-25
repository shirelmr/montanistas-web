import VideoEmbed from './VideoEmbed'
import { useLanguage } from '../../i18n/LanguageContext'
import './VideoGrid.css'

// One video centered, or several side by side, each with a short caption.
export default function VideoGrid({ items }) {
  const { t } = useLanguage()

  return (
    <div className={`video-grid container--narrow ${items.length > 1 ? 'video-grid--several' : ''}`}>
      {items.map(({ video, caption }) => (
        <figure key={video.title} className="video-grid__item">
          <VideoEmbed video={video} />
          {caption && <figcaption className="video-grid__caption">{t(caption)}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
