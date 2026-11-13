import { useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import './Lightbox.css'

// A photo shown large over a dark screen, with arrows (and the arrow keys)
// to move through the rest. Esc, the close button or a click on the dark
// area closes it. Built on <dialog>, so focus stays inside while it's open.
export default function Lightbox({ photos, index, onChange, onClose }) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)
  const photo = photos[index]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const go = (step) => onChange((index + step + photos.length) % photos.length)
  const close = () => dialogRef.current.close()

  const handleKey = (event) => {
    if (event.key === 'ArrowLeft') go(-1)
    if (event.key === 'ArrowRight') go(1)
  }

  // Clicks on the dialog itself land on the dark area around the photo.
  const handleClick = (event) => {
    if (event.target === dialogRef.current) close()
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={t(photo.alt)}
      onClose={onClose}
      onKeyDown={handleKey}
      onClick={handleClick}
    >
      <img className="lightbox__photo" src={photo.src} alt={t(photo.alt)} />
      <p className="lightbox__count">
        {index + 1} / {photos.length}
      </p>
      <button type="button" className="lightbox__btn lightbox__close" onClick={close} aria-label={t(ui.close)}>
        <FiX />
      </button>
      {photos.length > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label={t(ui.previous)}>
            <FiChevronLeft />
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label={t(ui.next)}>
            <FiChevronRight />
          </button>
        </>
      )}
    </dialog>
  )
}
