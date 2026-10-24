import Photo from './Photo'
import { intro } from '../data/content'
import './Intro.css'

export default function Intro() {
  return (
    <section className="intro section section--grey">
      <div className="container">
        <h2 className="section-title">{intro.title}</h2>
        <div className="intro__grid">
          <div className="intro__photo">
            <Photo src={intro.photo.src} alt={intro.photo.alt} />
          </div>
          <div className="intro__text">
            <h3 className="intro__subtitle">{intro.subtitle}</h3>
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
