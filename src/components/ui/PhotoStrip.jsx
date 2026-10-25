import { useLayoutEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Photo from './Photo'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import './PhotoStrip.css'

// Until a photo loads, its frame uses this width-to-height ratio.
const DEFAULT_RATIO = 1.6

// Horizontally scrolling row of photos, all the same height but each in its
// own shape (tall photos narrow, wide ones wide), so nothing gets cropped.
// The current photo sits in the middle with its neighbours peeking in.
export default function PhotoStrip({ photos }) {
  const { t } = useLanguage()
  const trackRef = useRef(null)
  const [ratios, setRatios] = useState({})

  // Scrolls the strip (never the page) so the photo at `index` is centered.
  const centerOn = (index, behavior = 'smooth') => {
    const track = trackRef.current
    const slide = track.children[index]
    if (!slide) return
    track.scrollTo({ left: slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2, behavior })
  }

  // The photo whose middle is closest to the middle of the strip.
  const currentIndex = () => {
    const track = trackRef.current
    const middle = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let closestDistance = Infinity
    ;[...track.children].forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - middle)
      if (distance < closestDistance) {
        closest = i
        closestDistance = distance
      }
    })
    return closest
  }

  // Start with the first photo centered.
  useLayoutEffect(() => centerOn(0, 'instant'), [])

  const go = (direction) => {
    centerOn(Math.min(photos.length - 1, Math.max(0, currentIndex() + direction)))
  }

  const rememberShape = (i) => (event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget
    setRatios((previous) => ({ ...previous, [i]: naturalWidth / naturalHeight }))
  }

  return (
    <div className="strip__viewport">
      <div className="strip__track" ref={trackRef}>
        {photos.map((photo, i) => (
          <div className="strip__slide" key={i} style={{ '--ratio': ratios[i] ?? DEFAULT_RATIO }}>
            <Photo src={photo.src} alt={t(photo.alt)} index={i} onLoad={rememberShape(i)} />
          </div>
        ))}
      </div>
      {photos.length > 1 && (
        <div className="strip__controls container--narrow">
          <button type="button" className="strip__arrow" onClick={() => go(-1)} aria-label={t(ui.previous)}>
            <FiChevronLeft />
          </button>
          <button type="button" className="strip__arrow" onClick={() => go(1)} aria-label={t(ui.next)}>
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
