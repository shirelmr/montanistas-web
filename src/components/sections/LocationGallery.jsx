import { useId, useState } from 'react'
import { TbMapPin } from 'react-icons/tb'
import PhotoStrip from '../ui/PhotoStrip'
import VideoGrid from '../ui/VideoGrid'
import { useLanguage } from '../../i18n/LanguageContext'
import './LocationGallery.css'

// Several places (or outings) under one heading: optional videos for all of
// them, then a tab per place showing that place's own videos and photos.
export default function LocationGallery({ heading, intro, videos, places, tone = 'grey' }) {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const id = useId()
  const place = places[active]

  return (
    <section className={`locations section section--${tone}`}>
      <div className="container--narrow">
        <h2 className="section-title">{t(heading)}</h2>
        {intro && <p className="section-intro">{t(intro)}</p>}
      </div>

      {videos && (
        <div className="locations__videos">
          <VideoGrid items={videos} />
        </div>
      )}

      <div className="container--narrow">
        <div className="locations__tabs" role="tablist" aria-label={t(heading)}>
          {places.map(({ name }, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              className={`locations__tab ${i === active ? 'is-active' : ''}`}
              onClick={(event) => {
                setActive(i)
                // On phones the tabs slide sideways: bring the chosen one into view.
                event.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
              }}
            >
              <TbMapPin aria-hidden="true" />
              {t(name)}
            </button>
          ))}
        </div>
      </div>

      {/* Keyed by tab so the photos fade in and start from the first one. */}
      <div
        key={active}
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="locations__panel"
      >
        {place.videos && (
          <div className="locations__place-videos">
            <VideoGrid items={place.videos} />
          </div>
        )}
        <PhotoStrip photos={place.photos} />
      </div>
    </section>
  )
}
