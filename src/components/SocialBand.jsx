import SocialIcons from './SocialIcons'
import './SocialBand.css'

export default function SocialBand() {
  return (
    <section className="social-band">
      <div className="container">
        <h2 className="social-band__title">
          Montañistas de Washington
          <br />
          Social Media Links
        </h2>
        <SocialIcons />
      </div>
    </section>
  )
}
