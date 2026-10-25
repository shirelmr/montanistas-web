import { useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Photo from '../ui/Photo'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/content'
import './StripGallery.css'

// Horizontally scrolling row of large photos, with the next one peeking in.
export default function StripGallery({ title, photos }) {
  const { t } = useLanguage()
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    const slide = track.firstElementChild
    track.scrollBy({ left: direction * (slide?.clientWidth ?? 600), behavior: 'smooth' })
  }

  return (
    <section className="strip section section--grey">
      <h2 className="strip__title container--narrow">{t(title)}</h2>
      <div className="strip__viewport">
        <div className="strip__track" ref={trackRef}>
          {photos.map((photo, i) => (
            <div className="strip__slide" key={i}>
              <Photo src={photo.src} alt={t(photo.alt)} index={i} />
            </div>
          ))}
        </div>
        <div className="strip__controls container--narrow">
          <button type="button" className="strip__arrow" onClick={() => scroll(-1)} aria-label={t(ui.previous)}>
            <FiChevronLeft />
          </button>
          <button type="button" className="strip__arrow" onClick={() => scroll(1)} aria-label={t(ui.next)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
