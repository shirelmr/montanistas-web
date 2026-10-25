import SocialIcons from '../ui/SocialIcons'
import { useLanguage } from '../../i18n/LanguageContext'
import { socialBand } from '../../data/content'
import './SocialBand.css'

export default function SocialBand() {
  const { t } = useLanguage()

  return (
    <section className="social-band">
      <div className="container">
        <h2 className="social-band__title">
          {t(socialBand.title).map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <SocialIcons />
      </div>
    </section>
  )
}
