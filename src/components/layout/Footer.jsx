import { Link } from 'react-router'
import Logo from '../ui/Logo'
import SocialIcons from '../ui/SocialIcons'
import { useLanguage } from '../../i18n/LanguageContext'
import { contact, footer, ui } from '../../data/common'
import { activities } from '../../data/activities'
import { mediaPage } from '../../data/media'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <Logo className="footer__logo" />
          <p className="footer__tagline">{t(footer.tagline)}</p>
          <SocialIcons size="sm" className="footer__social" />
        </div>

        <nav className="footer__col" aria-labelledby="footer-activities">
          <h2 className="footer__heading" id="footer-activities">{t(footer.activitiesTitle)}</h2>
          <ul className="footer__list">
            {activities.map((activity) => (
              <li key={activity.slug}>
                <Link to={`/${activity.slug}`}>{t(activity.title)}</Link>
              </li>
            ))}
            <li>
              <Link to={mediaPage.path}>{t(mediaPage.title)}</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">{t(footer.contactTitle)}</h2>
          <ul className="footer__list">
            {contact.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copy container">
        Copyright © {new Date().getFullYear()} MONTAÑISTAS DE WASHINGTON - {t(ui.rightsReserved)}
      </p>
    </footer>
  )
}
