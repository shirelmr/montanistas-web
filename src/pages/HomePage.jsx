import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import ActivityCards from '../components/sections/ActivityCards'
import FeaturedVideo from '../components/sections/FeaturedVideo'
import RecentHighlights from '../components/sections/RecentHighlights'
import StripGallery from '../components/sections/StripGallery'
import SocialBand from '../components/sections/SocialBand'
import Subscribe from '../components/sections/Subscribe'
import usePageTitle from '../hooks/usePageTitle'
import { featured, moments } from '../data/home'
import './HomePage.css'

// Who we are first, then what we do, then the featured video and the
// latest news.
export default function HomePage() {
  usePageTitle(null)

  return (
    <div className="home">
      <Hero />
      <About tone="grey" />
      <ActivityCards tone="dark" />
      <FeaturedVideo {...featured} tone="grey" />
      <RecentHighlights tone="dark" />
      <StripGallery {...moments} tone="grey" />
      <SocialBand />
      <Subscribe />
    </div>
  )
}
