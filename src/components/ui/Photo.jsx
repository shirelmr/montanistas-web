import { TbMountain } from 'react-icons/tb'
import './Photo.css'

// Snow, forest, sunset and lake tones so placeholder galleries don't look flat.
const TONES = [
  ['#5b7fa8', '#c9d8e8'],
  ['#3f6b4f', '#9cbf8f'],
  ['#c0602a', '#f2b56b'],
  ['#2f5e7a', '#8fc3d6'],
  ['#5a5f6b', '#b7bcc6'],
  ['#7a4f8a', '#e0a3a0'],
]

// Renders an image, or a labelled placeholder when there is no `src` yet.
export default function Photo({ src, alt, index = 0, className = '', onLoad }) {
  if (src) {
    return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" onLoad={onLoad} />
  }

  const [from, to] = TONES[index % TONES.length]
  return (
    <div
      className={`photo photo--placeholder ${className}`}
      style={{ '--from': from, '--to': to }}
      {...(alt ? { role: 'img', 'aria-label': alt } : { 'aria-hidden': true })}
    >
      <TbMountain className="photo__icon" aria-hidden="true" />
      <span className="photo__label">{alt}</span>
    </div>
  )
}
