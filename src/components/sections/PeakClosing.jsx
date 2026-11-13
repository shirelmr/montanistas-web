import { Link } from 'react-router'
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb'
import PeakImage from '../ui/PeakImage'
import { useLanguage } from '../../i18n/LanguageContext'
import { PEAKS_PATH, chartOrder, peakPath, peaksText } from '../../data/peaks'
import './PeakClosing.css'

// End of a summit's page: the group's motto, a photo that rises out of the
// dark like mist, and quiet links to its neighbours on the elevation chart
// (left and right, wrapping around at the ends).
export default function PeakClosing({ peak, image }) {
  const { t } = useLanguage()
  const i = chartOrder.indexOf(peak)
  const previous = chartOrder[(i - 1 + chartOrder.length) % chartOrder.length]
  const next = chartOrder[(i + 1) % chartOrder.length]

  return (
    <section className="peak-closing">
      <div className="peak-closing__text container--narrow">
        <h2 className="peak-closing__title">{t(peaksText.closing.title)}</h2>
        <p className="peak-closing__subtitle">{t(peaksText.closing.subtitle)}</p>
      </div>

      <div className="peak-closing__media">
        <PeakImage className="peak-closing__photo" src={image} shape={peak.shape} />
      </div>

      {chartOrder.length > 1 && (
        <nav className="peak-closing__nav" aria-label={t(peaksText.otherPeaks)}>
          <Link to={peakPath(previous)}>
            <TbArrowLeft aria-hidden="true" /> {t(previous.name)}
          </Link>
          <Link to={PEAKS_PATH}>{t(peaksText.allPeaks)}</Link>
          <Link to={peakPath(next)}>
            {t(next.name)} <TbArrowRight aria-hidden="true" />
          </Link>
        </nav>
      )}
    </section>
  )
}
