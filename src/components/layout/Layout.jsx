import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import useScrollReveal from '../../hooks/useScrollReveal'

// Frame shared by every page. The page itself renders inside <Outlet />.
export default function Layout() {
  const { pathname } = useLocation()
  useScrollReveal(pathname)

  return (
    <>
      <Header />
      {/* Keyed by path so each new page fades in softly. */}
      <main id="main" tabIndex={-1} key={pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
