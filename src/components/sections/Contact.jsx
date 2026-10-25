import { useRef, useState } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import { useLanguage } from '../../i18n/LanguageContext'
import useNetlifyForm from '../../hooks/useNetlifyForm'
import { contact, ui } from '../../data/common'
import './Contact.css'

// Monday-first index of today, to bold the current day in the hours table.
const today = (new Date().getDay() + 6) % 7

// Messages go to Netlify Forms, which emails them to the group.
export default function Contact() {
  const { t } = useLanguage()
  const fileInputRef = useRef(null)
  const [files, setFiles] = useState([])
  const [filesTooBig, setFilesTooBig] = useState(false)
  const { status, submit } = useNetlifyForm('contact')

  // A selection over the limit is dropped whole, with a note saying why.
  const pickFiles = (event) => {
    const picked = [...event.target.files]
    const bytes = picked.reduce((sum, file) => sum + file.size, 0)
    const fits = picked.length <= contact.maxFiles && bytes <= contact.maxFileMB * 1024 * 1024
    setFiles(fits ? picked : [])
    setFilesTooBig(!fits)
    if (!fits) event.target.value = ''
  }

  const handleSubmit = async (event) => {
    const sent = await submit(event, (data) => {
      files.forEach((file, i) => data.set(`attachment${i + 1}`, file))
    })
    if (sent) {
      setFiles([])
      setFilesTooBig(false)
    }
  }

  const days = t(contact.days)

  return (
    <section className="contact section section--grey" id="contacto">
      <div className="container">
        <h2 className="contact__heading">{t(contact.heading)}</h2>
        <p className="contact__intro">{t(contact.intro)}</p>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="visually-hidden" aria-hidden="true">
            <label>
              {t(ui.botField)} <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

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
            <input ref={fileInputRef} type="file" multiple hidden onChange={pickFiles} />
          </div>
          {filesTooBig && (
            <p className="contact__status is-error" role="alert">
              {t(contact.attachLimit)}
            </p>
          )}

          <button type="submit" className="btn contact__send" disabled={status === 'sending'}>
            {t(status === 'sending' ? ui.sending : contact.send)}
          </button>
          {status === 'sent' && (
            <p className="contact__status" role="status">
              {t(contact.thanks)}
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status is-error" role="alert">
              {t(ui.sendFailed)}
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
