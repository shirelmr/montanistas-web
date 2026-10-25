import SocialIcons from '../ui/SocialIcons'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/content'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner container--narrow">
        <p className="footer__copy">
          Copyright © {new Date().getFullYear()} MONTAÑISTAS DE WASHINGTON - {t(ui.rightsReserved)}
        </p>
        <SocialIcons size="sm" className="footer__social" />
      </div>
    </footer>
  )
}
