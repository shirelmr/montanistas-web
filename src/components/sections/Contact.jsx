import { useRef, useState } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'
import { contact } from '../../data/content'
import './Contact.css'

// Monday-first index of today, to bold the current day in the hours table.
const today = (new Date().getDay() + 6) % 7

// The form has no backend yet: submitting just shows a thank-you message.
// Hook `handleSubmit` up to an email service (Formspree, EmailJS…) to send it.
export default function Contact() {
  const { t } = useLanguage()
  const fileInputRef = useRef(null)
  const [files, setFiles] = useState([])
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setFiles([])
    setSent(true)
  }

  const days = t(contact.days)

  return (
    <section className="contact section section--grey" id="contacto">
      <div className="container">
        <h2 className="contact__heading">{t(contact.heading)}</h2>
        <p className="contact__intro">{t(contact.intro)}</p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="contact-name">{t(contact.fields.name)}</label>
          <input
            id="contact-name"
            className="field"
            name="name"
            placeholder={t(contact.fields.name)}
            autoComplete="name"
          />

          <label className="visually-hidden" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            className="field"
            name="email"
            type="email"
            placeholder={t(contact.fields.email)}
            autoComplete="email"
            required
          />

          <label className="visually-hidden" htmlFor="contact-message">{t(contact.fields.message)}</label>
          <textarea
            id="contact-message"
            className="field field--area"
            name="message"
            placeholder={t(contact.fields.message)}
            rows={5}
          />

          <div className="contact__attach">
            <button type="button" className="contact__attach-btn" onClick={() => fileInputRef.current.click()}>
              <FiPaperclip aria-hidden="true" /> {t(contact.attachFiles)}
            </button>
            <span>
              {t(contact.attachments)} ({files.length})
            </span>
            <input
              ref={fileInputRef}
              type="file"
              name="attachments"
              multiple
              hidden
              onChange={(event) => setFiles([...event.target.files])}
            />
          </div>

          <button type="submit" className="btn contact__send">{t(contact.send)}</button>
          {sent && (
            <p className="contact__thanks" role="status">
              {t(contact.thanks)}
            </p>
          )}
        </form>

        <div className="contact__visit">
          <h3 className="contact__visit-title">{t(contact.visitTitle)}</h3>
          {t(contact.visitLines).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="contact__info">
          <div>
            <h3 className="contact__info-title">{contact.orgName}</h3>
            <ul className="contact__emails">
              {contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="contact__info-title contact__info-title--hours">{t(contact.hoursTitle)}</h3>
            <table className="contact__hours">
              <tbody>
                {contact.hours.map((time, i) => (
                  <tr key={i} className={i === today ? 'is-today' : ''}>
                    <th scope="row">{days[i]}</th>
                    <td>{time ?? t(contact.closed)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
