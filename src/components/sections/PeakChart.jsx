import { Link } from 'react-router'
import { peakClip } from '../ui/PeakImage'
import { useLanguage } from '../../i18n/LanguageContext'
import {
  ELEVATION_STEP,
  ELEVATION_TOP,
  chartOrder,
  formatNumber,
  peakPath,
  peaksText,
} from '../../data/peaks'
import '../ui/PeakImage.css'
import './PeakChart.css'

const TICKS = Array.from({ length: ELEVATION_TOP / ELEVATION_STEP + 1 }, (_, i) => i * ELEVATION_STEP)

// Every summit drawn to scale on an elevation chart, filled with its photo.
// Each peak links to its page. On a peak's own page, `current` lights that
// one up and dims the rest.
export default function PeakChart({
  title = peaksText.chart.title,
  intro = peaksText.chart.intro,
  current = null,
  tone = 'grey',
}) {
  const { t } = useLanguage()
  const row = chartOrder
  // Each peak is this wide (in % of the chart). Neighbours overlap only
  // low on their slopes, so every summit shows whole.
  const width = Math.min(46, 130 / row.length)

  return (
    <section className={`peak-chart section section--${tone}`}>
      <div className="container">
        <h2 className="section-title">{t(title)}</h2>
        {intro && <p className="section-intro">{t(intro)}</p>}

        <div className="peak-chart__scroll">
          <div className="peak-chart__area">
            <ul className="peak-chart__ticks" aria-hidden="true">
              {TICKS.map((tick) => (
                <li key={tick} style={{ bottom: `${(tick / ELEVATION_TOP) * 100}%` }}>
                  <span>{formatNumber(tick)}</span>
                </li>
              ))}
            </ul>
            <p className="peak-chart__axis">{t(peaksText.chart.axis)}</p>

            <ul className="peak-chart__peaks">
              {row.map((peak, i) => {
                const center = row.length > 1 ? width / 2 + (i * (100 - width)) / (row.length - 1) : 50
                const state = current ? (peak.slug === current ? 'is-current' : 'is-dimmed') : ''
                const fill = peak.chartImage ?? peak.photo
                return (
                  <li
                    key={peak.slug}
                    className={`peak-chart__peak ${state}`}
                    style={{
                      '--left': `${center - width / 2}%`,
                      '--width': `${width}%`,
                      '--height': `${(peak.elevationFt / ELEVATION_TOP) * 100}%`,
                      '--delay': `${i * 140}ms`,
                      // Shorter peaks stand in front, so none hides another.
                      zIndex: ELEVATION_TOP - peak.elevationFt,
                    }}
                  >
                    <Link
                      to={peakPath(peak)}
                      className="peak-chart__link"
                      aria-current={peak.slug === current ? 'page' : undefined}
                    >
                      <span
                        className={`peak-chart__shape ${fill ? '' : 'peak-snow'}`}
                        style={{
                          clipPath: peakClip(peak.shape),
                          backgroundImage: fill ? `url(${fill})` : undefined,
                          ...(peak.chartCrop && {
                            backgroundSize: peak.chartCrop.zoom && `auto ${peak.chartCrop.zoom * 100}%`,
                            backgroundPosition: peak.chartCrop.at,
                          }),
                        }}
                      />
                      <span className="peak-chart__label">
                        <span className="peak-chart__name">{t(peak.name)}</span>
                        <span className="peak-chart__elevation">{formatNumber(peak.elevationFt)} ft</span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
