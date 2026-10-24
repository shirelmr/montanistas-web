import SocialIcons from './SocialIcons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container--narrow">
        <p className="footer__copy">
          Copyright © {new Date().getFullYear()} MONTAÑISTAS DE WASHINGTON - All Rights Reserved.
        </p>
        <SocialIcons size="sm" className="footer__social" />
      </div>
    </footer>
  )
}
