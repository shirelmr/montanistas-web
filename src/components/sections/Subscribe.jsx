import { useLanguage } from '../../i18n/LanguageContext'
import useNetlifyForm from '../../hooks/useNetlifyForm'
import { subscribe, ui } from '../../data/common'
import './Subscribe.css'

// Sign-ups go to Netlify Forms, where the list of emails can be downloaded.
export default function Subscribe() {
  const { t } = useLanguage()
  const { status, submit } = useNetlifyForm('subscribe')

  return (
    <section className="subscribe section section--dark">
      <div className="container">
        <h2 className="subscribe__heading">{t(subscribe.heading)}</h2>
        <p className="subscribe__text">{t(subscribe.text)}</p>
        <form className="subscribe__form" onSubmit={(event) => submit(event)}>
          <div className="visually-hidden" aria-hidden="true">
            <label>
              {t(ui.botField)} <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
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
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {t(status === 'sending' ? ui.sending : subscribe.button)}
          </button>
        </form>
        {status === 'sent' && (
          <p className="subscribe__status" role="status">
            {t(subscribe.thanks)}
          </p>
        )}
        {status === 'error' && (
          <p className="subscribe__status is-error" role="alert">
            {t(ui.sendFailed)}
          </p>
        )}
      </div>
    </section>
  )
}
