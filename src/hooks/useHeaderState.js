import { useEffect, useState } from 'react'

// Scroll-driven state for the site header:
// - `atTop`: still at the very top of the page, so the header stays
//   transparent over the banner
// - `concealed`: the page has a banner marked with `data-header-reveal` and
//   it's still on screen, so the logo and menu wait until it's scrolled past
export default function useHeaderState(headerRef, pathname) {
  const [atTop, setAtTop] = useState(true)
  const [concealed, setConcealed] = useState(false)

  // Runs again on every page change, since each page has its own banner.
  useEffect(() => {
    const header = headerRef.current
    const banner = document.querySelector('[data-header-reveal]')
    let frame = 0

    const update = () => {
      frame = 0
      setAtTop(window.scrollY < 40)
      setConcealed(Boolean(banner) && banner.getBoundingClientRect().bottom > header.offsetHeight)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [headerRef, pathname])

  return { atTop, concealed }
}
