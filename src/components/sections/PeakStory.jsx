import PeakImage from '../ui/PeakImage'
import { useLanguage } from '../../i18n/LanguageContext'
import { formatNumber, peaksText, toMeters } from '../../data/peaks'
import './PeakStory.css'

// A photo across the page with a dotted route drawn over it, and a card
// floating on top with the mountain and how our climb went.
export default function PeakStory({ peak, image }) {
  const { t } = useLanguage()

  return (
    <section className="peak-story">
      <PeakImage className="peak-story__bg" src={image} shape={peak.shape} />
      <svg className="peak-story__route" viewBox="0 0 600 420" aria-hidden="true">
        <polyline points="20,400 120,330 170,350 260,250 330,270 410,150 470,170 560,40" />
        {[
          [20, 400],
          [260, 250],
          [410, 150],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" />
        ))}
        <circle className="peak-story__summit" cx="560" cy="40" r="9" />
      </svg>

      <div className="peak-story__card">
        <h2 className="peak-story__title">{t(peaksText.aboutTitle)}</h2>
        <p className="peak-story__meta">
          {formatNumber(peak.elevationFt)} ft · {formatNumber(toMeters(peak.elevationFt))} m · {peak.region}
        </p>
        <p>{t(peak.about)}</p>
        {peak.story && (
          <>
            <h3 className="peak-story__subtitle">{t(peaksText.storyTitle)}</h3>
            <p>{t(peak.story)}</p>
          </>
        )}
      </div>
    </section>
  )
}
