import { useState } from 'react'
import { subscribe } from '../data/content'
import './Subscribe.css'

// Like the contact form, this only confirms on screen until it's wired to
// a mailing list service.
export default function Subscribe() {
  const [done, setDone] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setDone(true)
  }

  return (
    <section className="subscribe section section--dark">
      <div className="container">
        <h2 className="subscribe__heading">{subscribe.heading}</h2>
        <p className="subscribe__text">{subscribe.text}</p>
        <form className="subscribe__form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="subscribe-email">Email</label>
          <input
            id="subscribe-email"
            className="field subscribe__field"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <button type="submit" className="btn">Sign up</button>
        </form>
        {done && (
          <p className="subscribe__thanks" role="status">
            ¡Listo! Te avisaremos de nuestros próximos eventos.
          </p>
        )}
      </div>
    </section>
  )
}
