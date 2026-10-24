import Logo from './Logo'
import { about } from '../data/content'
import './About.css'

export default function About() {
  return (
    <section className="about section section--grey" id="nosotros">
      <div className="about__grid container">
        <Logo className="about__logo" />
        <div className="about__text">
          <p className="about__eyebrow">{about.eyebrow}</p>
          <h2 className="about__title">{about.title}</h2>
          <div className="about__lines">
            {about.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a className="btn about__cta" href={about.cta.href}>
            {about.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
