import VideoEmbed from './VideoEmbed'
import { foxReport } from '../data/content'
import './FoxReport.css'

export default function FoxReport() {
  return (
    <section className="fox section section--dark">
      <div className="container--narrow">
        <h2 className="section-title section-title--white fox__title">{foxReport.heading}</h2>
        <p className="fox__subtitle">{foxReport.subtitle}</p>
        <VideoEmbed video={foxReport.video} />
      </div>
    </section>
  )
}
