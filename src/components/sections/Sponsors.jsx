import { useLanguage } from '../../i18n/LanguageContext'
import { sponsors } from '../../data/home'
import './Sponsors.css'

// The brands that support the group, each logo linking to its site.
export default function Sponsors({ tone = 'dark' }) {
  const { t } = useLanguage()

  return (
    <section className={`sponsors section section--${tone}`}>
      <div className="container">
        <h2 className="section-title">{t(sponsors.heading)}</h2>
        <p className="section-intro">{t(sponsors.intro)}</p>
        <ul className="sponsors__list">
          {sponsors.items.map((sponsor) => (
            <li key={sponsor.name}>
              <a className="sponsor" href={sponsor.url} target="_blank" rel="noreferrer">
                <img className="sponsor__logo" src={sponsor.logo} alt={sponsor.name} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
