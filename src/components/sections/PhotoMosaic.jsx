import { useState } from 'react'
import Lightbox from '../ui/Lightbox'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import './PhotoMosaic.css'

// Photos shown at first and added per click: one round of tile sizes, so the
// mosaic always ends on a full row.
const BATCH = 7

// Photos in tiles of different sizes, like a magazine page. Clicking one
// opens it large, where all of them can be browsed.
export default function PhotoMosaic({ title, photos, tone = 'dark' }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(null)
  const [shown, setShown] = useState(BATCH)

  return (
    <section className={`mosaic section section--${tone}`}>
      <div className="container">
        <h2 className="section-title">{t(title)}</h2>
        <ul className="mosaic__grid">
          {photos.slice(0, shown).map((photo, i) => (
            <li key={photo.src} className="mosaic__tile">
              <button type="button" className="mosaic__btn" onClick={() => setOpen(i)}>
                {/* The full photo: the 320px thumbnails are too small for
                    the big tiles. */}
                <img src={photo.src} alt={t(photo.alt)} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
        {shown < photos.length && (
          <button type="button" className="btn mosaic__more" onClick={() => setShown(shown + BATCH)}>
            {t(ui.morePhotos)} ({photos.length - shown})
          </button>
        )}
      </div>
      {open !== null && (
        <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </section>
  )
}
