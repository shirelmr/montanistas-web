import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Photo from './Photo'
import './CarouselGallery.css'

// Centered slideshow with the neighbouring photos dimmed on each side and a
// row of thumbnails underneath.
export default function CarouselGallery({ title, photos, uppercase = true, tone = 'grey' }) {
  const [index, setIndex] = useState(0)
  const thumbsRef = useRef(null)
  const count = photos.length
  const at = (offset) => (index + offset + count) % count
  const go = (offset) => setIndex(at(offset))

  // Keep the active thumbnail in view. Scrolls the strip only, never the page.
  useEffect(() => {
    const strip = thumbsRef.current
    const thumb = strip?.children[index]
    if (!thumb) return
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: 'smooth',
    })
  }, [index])

  const scrollThumbs = (direction) => {
    const strip = thumbsRef.current
    strip.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: 'smooth' })
  }

  const prev = photos[at(-1)]
  const current = photos[index]
  const next = photos[at(1)]

  return (
    <section className={`carousel section section--${tone}`}>
      <div className="container--narrow">
        <h2 className={`section-title ${uppercase ? '' : 'section-title--plain'}`}>{title}</h2>

        <div className="carousel__stage" aria-roledescription="carrusel">
          <button
            type="button"
            className="carousel__side carousel__side--prev"
            onClick={() => go(-1)}
            aria-label="Foto anterior"
          >
            <Photo src={prev.src} alt={prev.alt} index={at(-1)} />
            <FiChevronLeft className="carousel__arrow" aria-hidden="true" />
          </button>

          <div className="carousel__main" key={index} aria-live="polite">
            <Photo src={current.src} alt={current.alt} index={index} />
          </div>

          <button
            type="button"
            className="carousel__side carousel__side--next"
            onClick={() => go(1)}
            aria-label="Foto siguiente"
          >
            <Photo src={next.src} alt={next.alt} index={at(1)} />
            <FiChevronRight className="carousel__arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="carousel__thumbs-row">
          <button
            type="button"
            className="carousel__thumbs-arrow"
            onClick={() => scrollThumbs(-1)}
            aria-label="Desplazar miniaturas a la izquierda"
          >
            <FiChevronLeft />
          </button>
          <div className="carousel__thumbs" ref={thumbsRef}>
            {photos.map((photo, i) => (
              <button
                type="button"
                key={photo.alt}
                className={`carousel__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Ver ${photo.alt}`}
                aria-current={i === index}
              >
                <Photo src={photo.src} alt="" index={i} />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="carousel__thumbs-arrow"
            onClick={() => scrollThumbs(1)}
            aria-label="Desplazar miniaturas a la derecha"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
