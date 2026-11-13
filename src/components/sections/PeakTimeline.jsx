import { Link } from 'react-router'
import { TbArrowRight } from 'react-icons/tb'
import PeakImage from '../ui/PeakImage'
import { useLanguage } from '../../i18n/LanguageContext'
import { formatNumber, peakPath, peaks, peaksText, toMeters } from '../../data/peaks'
import './PeakTimeline.css'

// The summits along a line, newest at the top, alternating sides: a photo
// card with its coordinates and place, and beside it its name, height and a
// link to its page.
export default function PeakTimeline({ tone = 'dark' }) {
  const { t } = useLanguage()

  return (
    <section className={`peak-timeline section section--${tone}`}>
      <div className="container">
        {/* No visible title: the intro and the line speak for themselves. */}
        <h2 className="visually-hidden">{t(peaksText.timeline.title)}</h2>
        <p className="section-intro peak-timeline__intro">{t(peaksText.timeline.intro)}</p>

        <ol className="peak-timeline__list">
          {peaks.map((peak) => (
            <li key={peak.slug} className="peak-timeline__item">
              <span className="peak-timeline__marker" aria-hidden="true" />

              {/* Same link as the one in the text, so it's skipped by the
                  keyboard and screen readers. */}
              <Link to={peakPath(peak)} className="peak-card" tabIndex={-1} aria-hidden="true">
                <PeakImage className="peak-card__photo" src={peak.photo} shape={peak.shape} />
                <span className="peak-card__shade" />
                <span className="peak-card__coords">{peak.coords[0]}</span>
                <span className="peak-card__coords peak-card__coords--side">{peak.coords[1]}</span>
                <span className="peak-card__place">{peak.region}</span>
              </Link>

              <div className="peak-timeline__text">
                <p className="peak-timeline__eyebrow">{t(peaksText.summit)}</p>
                <h3 className="peak-timeline__name">{t(peak.name)}</h3>
                <p className="peak-timeline__height">
                  {formatNumber(peak.elevationFt)} ft · {formatNumber(toMeters(peak.elevationFt))} m
                </p>
                <p className="peak-timeline__tagline">{t(peak.tagline)}</p>
                <Link className="peak-timeline__more" to={peakPath(peak)}>
                  {t(peaksText.seePeak)} <TbArrowRight aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
