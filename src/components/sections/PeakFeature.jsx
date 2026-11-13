import { Link } from 'react-router'
import { TbArrowLeft } from 'react-icons/tb'
import PeakImage from '../ui/PeakImage'
import { logo } from '../../data/images'
import { useLanguage } from '../../i18n/LanguageContext'
import { PEAKS_PATH, formatNumber, peaksText } from '../../data/peaks'
import './PeakFeature.css'

// Top of a summit's page, laid out like a magazine spread: a tall poster
// photo with the peak's name stacked over it, two more photos overlapping
// its edge, and short captions around them. `photos` are up to three image
// URLs; without any, the poster is the drawn mountain.
export default function PeakFeature({ peak, photos }) {
  const { t } = useLanguage()
  const [poster, ...pair] = photos

  return (
    <section className="peak-feature">
      <div className="peak-feature__layout">
        <Link className="peak-feature__back" to={PEAKS_PATH}>
          <TbArrowLeft aria-hidden="true" /> {t(peaksText.allPeaks)}
        </Link>

        <figure className="peak-feature__poster">
          <PeakImage className="peak-feature__photo" src={poster} shape={peak.shape} />
          <p className="peak-feature__badge">
            <img src={logo} alt="" />
            {t(peaksText.summit)}
          </p>
          <h1 className="peak-feature__name">
            {t(peak.name)
              .split(' ')
              .map((word) => (
                <span key={word}>{word}</span>
              ))}
          </h1>
          <p className="peak-feature__motto">
            {t(peaksText.motto).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </figure>

        <p className="peak-feature__claim">
          <span>
            {formatNumber(peak.elevationFt)} {t(peaksText.feet)}
          </span>
          <span>
            {peak.region} · {t(peaksText.cascades)}
          </span>
        </p>

        {pair.length > 0 && (
          <div className="peak-feature__pair">
            {pair.map((src) => (
              <img key={src} className="peak-feature__photo" src={src} alt="" loading="lazy" />
            ))}
          </div>
        )}

        <div className="peak-feature__foot">
          <p className="peak-feature__caption">{t(peak.tagline)}</p>
          <img className="peak-feature__logo" src={logo} alt="" />
        </div>
      </div>
    </section>
  )
}
