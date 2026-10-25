import PhotoStrip from '../ui/PhotoStrip'
import VideoGrid from '../ui/VideoGrid'
import { useLanguage } from '../../i18n/LanguageContext'
import './StripGallery.css'

// A titled photo carousel, with an optional line of text under the title
// and optional videos under the photos. Used on the home page and for every
// activity gallery.
export default function StripGallery({ title, intro, photos, videos, tone = 'grey' }) {
  const { t } = useLanguage()

  return (
    <section className={`strip section section--${tone}`}>
      <div className="container--narrow">
        <h2 className="section-title">{t(title)}</h2>
        {intro && <p className="section-intro">{t(intro)}</p>}
      </div>
      <PhotoStrip photos={photos} />
      {videos && (
        <div className="strip__videos">
          <VideoGrid items={videos} />
        </div>
      )}
    </section>
  )
}
