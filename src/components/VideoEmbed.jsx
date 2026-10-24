import { useState } from 'react'
import { FaYoutube, FaPlay } from 'react-icons/fa6'
import './VideoEmbed.css'

function embedUrl({ youtubeId, vimeoId }) {
  if (youtubeId) return `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`
  if (vimeoId) return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`
  return null
}

// YouTube/Vimeo player that only loads the iframe once it's clicked, so a
// page with dozens of videos stays fast. Without an ID it shows a placeholder.
export default function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false)
  const src = embedUrl(video)

  if (playing && src) {
    return (
      <div className="video">
        <iframe
          className="video__frame"
          src={src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  const thumb = video.youtubeId
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : video.poster

  return (
    <button
      type="button"
      className={`video video--cover ${thumb ? '' : 'video--placeholder'}`}
      onClick={() => setPlaying(true)}
      disabled={!src}
      aria-label={src ? `Reproducir: ${video.title}` : `${video.title} (video pendiente)`}
    >
      {thumb && <img className="video__thumb" src={thumb} alt="" loading="lazy" />}
      <span className="video__title">{video.title}</span>
      <span className="video__play" aria-hidden="true">
        {video.vimeoId ? <FaPlay /> : <FaYoutube />}
      </span>
      {!src && <span className="video__note">Video pendiente</span>}
    </button>
  )
}
