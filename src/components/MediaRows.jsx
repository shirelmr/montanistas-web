import VideoEmbed from './VideoEmbed'
import './MediaRows.css'

// List of videos with a description beside each, alternating sides per row.
export default function MediaRows({ heading, items, tone = 'dark', titleClassName = '' }) {
  return (
    <section className={`media section section--${tone}`}>
      <div className="container--narrow">
        <h2 className={`section-title ${titleClassName}`}>{heading}</h2>
        <div className="media__rows">
          {items.map((item, i) => (
            <article
              key={item.video.title}
              className={`media__row ${i % 2 ? 'media__row--reverse' : ''}`}
            >
              <div className="media__video">
                <VideoEmbed video={item.video} />
              </div>
              <div className="media__text">
                <h3 className="media__title">{item.title}</h3>
                <div className="media__body">
                  {item.text.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
