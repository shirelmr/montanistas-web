import './PeakImage.css'

// Outlines of the peaks, as clip-path polygons (x y, in % of the box), all
// with the summit at the top center:
// - dome:   broad and rounded, like Rainier
// - cone:   sharp point, like Hood
// - twin:   a shoulder on one side, like Shasta and Shastina
// - crater: a notch blown out of the top, like St. Helens
export const PEAK_SHAPES = {
  dome: '0% 100%, 6% 90%, 13% 79%, 20% 66%, 27% 52%, 33% 38%, 38% 24%, 43% 12%, 47% 4%, 50% 0%, 54% 1%, 58% 7%, 63% 16%, 69% 29%, 75% 43%, 82% 58%, 89% 73%, 95% 87%, 100% 100%',
  cone: '0% 100%, 9% 86%, 18% 71%, 26% 56%, 33% 42%, 39% 29%, 44% 17%, 48% 7%, 50% 0%, 53% 7%, 57% 17%, 62% 29%, 68% 42%, 75% 57%, 83% 72%, 92% 87%, 100% 100%',
  twin: '0% 100%, 7% 88%, 13% 75%, 18% 62%, 22% 51%, 26% 44%, 29% 41%, 32% 43%, 35% 40%, 39% 28%, 43% 16%, 47% 6%, 50% 0%, 54% 5%, 59% 15%, 65% 29%, 72% 45%, 80% 62%, 89% 80%, 100% 100%',
  crater: '0% 100%, 8% 85%, 16% 68%, 23% 52%, 29% 38%, 34% 26%, 38% 16%, 42% 7%, 45% 1%, 47% 0%, 49% 7%, 51% 11%, 53% 8%, 55% 1%, 57% 0%, 60% 6%, 65% 15%, 70% 27%, 76% 41%, 83% 58%, 91% 78%, 100% 100%',
}

export const peakClip = (shape) => `polygon(${PEAK_SHAPES[shape] ?? PEAK_SHAPES.cone})`

// A peak's photo, or, until it has one, a drawing of the mountain in its
// own outline, so the design still holds without photos.
export default function PeakImage({ src, shape, alt = '', className = '' }) {
  if (src) {
    return <img className={`peak-image ${className}`} src={src} alt={alt} loading="lazy" />
  }

  return (
    <div
      className={`peak-image peak-image--drawn ${className}`}
      {...(alt ? { role: 'img', 'aria-label': alt } : { 'aria-hidden': true })}
    >
      <span className="peak-image__ridge" />
      <span className="peak-image__mountain peak-snow" style={{ clipPath: peakClip(shape) }} />
    </div>
  )
}
