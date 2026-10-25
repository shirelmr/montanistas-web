import { useLayoutEffect } from 'react'

// The blocks that glide up into place the first time they scroll into view.
const SELECTOR = [
  'main .section-title',
  'main .section-intro',
  'main .locations__tabs',
  'main .video-grid__item',
  'main .about__grid',
  'main .activity-card',
  'main .featured__text',
  'main .featured .video',
  'main .recent-card',
  'main .strip__viewport',
  'main .media__row',
  'main .interviews__row',
  'main .fox__subtitle',
  'main .fox .video',
  'main .social-band .container',
  'main .join-band .container--narrow',
  'main .contact__form',
  'main .contact__visit',
  'main .contact__info',
  'main .subscribe .container',
].join(', ')

// Cards arrive one after another instead of all at once.
const STAGGERED = '.activity-card, .recent-card'
const STAGGER_MS = 90

// Runs on every page change. It's a layout effect so the blocks are already
// hidden on the first paint, rather than flashing in and then animating.
export default function useScrollReveal(pathname) {
  useLayoutEffect(() => {
    // Without the observer nothing would ever reveal, so show everything as is.
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    document.querySelectorAll(SELECTOR).forEach((element) => {
      if (element.matches(STAGGERED)) {
        const item = element.closest('li') ?? element
        const position = [...item.parentElement.children].indexOf(item)
        element.style.setProperty('--reveal-delay', `${(position % 4) * STAGGER_MS}ms`)
      }
      element.setAttribute('data-reveal', '')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])
}
