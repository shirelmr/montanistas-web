import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { socialLinks } from '../../data/content'
import './SocialIcons.css'

const ICONS = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Pinterest: FaPinterestP,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
}

export default function SocialIcons({ size = 'md', className = '' }) {
  return (
    <ul className={`social social--${size} ${className}`}>
      {socialLinks.map(({ name, href }) => {
        const Icon = ICONS[name]
        return (
          <li key={name}>
            <a className="social__link" href={href} target="_blank" rel="noreferrer" aria-label={name}>
              <Icon aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
