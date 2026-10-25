import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { TbChevronDown } from 'react-icons/tb'
import LanguageToggle from './LanguageToggle'
import useHeaderState from '../../hooks/useHeaderState'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../data/common'
import { navItems } from '../../data/navigation'
import './Header.css'

// Space between the links and the language switch, in px (matches the CSS gap).
const GAP = 16

// Chooses how the menu fits the screen, by comparing the width the links
// need in one line with the room available:
// - centered: one line, centered on the page, language switch on the right
// - row:      one line beside the language switch
// - stacked:  language switch on top, the links on their own full line
// - compact:  not even a full line is enough, so they become a drop-down
function pickLayout(inner, lang, measure) {
  const available = inner.clientWidth
  const needed = measure.offsetWidth + 2
  const langSpace = lang.offsetWidth + GAP
  if (needed + 2 * langSpace <= available) return 'centered'
  if (needed + langSpace <= available) return 'row'
  if (needed <= available) return 'stacked'
  return 'compact'
}

// Site header: the menu links float in a translucent pill, with the
// language switch beside it. Over the home photo only the language switch
// shows; the menu slides in after scrolling past it.
export default function Header() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const headerRef = useRef(null)
  const innerRef = useRef(null)
  const navRef = useRef(null)
  const langRef = useRef(null)
  const measureRef = useRef(null)
  const { atTop, concealed } = useHeaderState(headerRef, pathname)
  const [layout, setLayout] = useState('centered')

  // The drop-down remembers the page it was opened on, so it closes by
  // itself as soon as the page changes.
  const [menuOpenedOn, setMenuOpenedOn] = useState(null)
  const menuOpen = layout === 'compact' && menuOpenedOn === pathname
  const closeMenu = () => setMenuOpenedOn(null)

  const current = navItems.find((item) => item.to === pathname)

  // Re-check the layout whenever the screen, the language or the fonts
  // change the widths involved. Runs before paint to avoid a flash.
  useLayoutEffect(() => {
    const check = () => setLayout(pickLayout(innerRef.current, langRef.current, measureRef.current))
    // Decide right away, before the first paint, so a phone never sees the
    // one-line menu flash before switching to the drop-down.
    check()
    const observer = new ResizeObserver(check)
    observer.observe(innerRef.current)
    observer.observe(langRef.current)
    observer.observe(measureRef.current)
    return () => observer.disconnect()
  }, [])

  // Share the header's height so page banners can leave room for it.
  useEffect(() => {
    const header = headerRef.current
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--site-header-height', `${header.offsetHeight}px`)
    })
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  // Close the drop-down with Escape or a tap anywhere outside it.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpenedOn(null)
    const onPointerDown = (event) => {
      if (!navRef.current.contains(event.target)) setMenuOpenedOn(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const classes = [
    'site-header',
    `site-header--${layout}`,
    !atTop && 'is-scrolled',
    concealed && !menuOpen && 'is-concealed',
    menuOpen && 'is-open',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes} ref={headerRef}>
      <a className="skip-link" href="#main">
        {t(ui.skipToContent)}
      </a>
      <div className="site-header__inner" ref={innerRef}>
        <nav className="site-header__nav" aria-label={t(ui.mainMenu)} ref={navRef}>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpenedOn(menuOpen ? null : pathname)}
          >
            {t(current?.label ?? ui.menu)}
            <TbChevronDown className="site-header__chevron" aria-hidden="true" />
          </button>

          <ul id="site-menu" className="site-header__links">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className="site-header__link" onClick={closeMenu}>
                  {t(item.label)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Invisible copy of the links in one line, only used to measure
              how wide that line is. */}
          <ul className="site-header__links site-header__links--measure" ref={measureRef} aria-hidden="true">
            {navItems.map((item) => (
              <li key={item.to}>
                <span className="site-header__link">{t(item.label)}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__lang" ref={langRef}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
