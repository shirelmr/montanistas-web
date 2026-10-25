import './PageHero.css'

// Banner at the top of the inner pages: a photo with the page title and a
// short introduction. Without a photo it falls back to a brand gradient.
export default function PageHero({ title, intro, image, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media" aria-hidden="true">
        {image && <img className="page-hero__bg" src={image} alt="" fetchPriority="high" />}
        <div className="page-hero__shade" />
      </div>
      <div className="page-hero__content container--narrow">
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
