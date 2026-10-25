import Hero from './components/sections/Hero'
import About from './components/sections/About'
import FeaturedVideo from './components/sections/FeaturedVideo'
import Intro from './components/sections/Intro'
import StripGallery from './components/sections/StripGallery'
import CarouselGallery from './components/sections/CarouselGallery'
import MediaRows from './components/sections/MediaRows'
import FoxReport from './components/sections/FoxReport'
import Interviews from './components/sections/Interviews'
import SocialBand from './components/sections/SocialBand'
import Contact from './components/sections/Contact'
import Subscribe from './components/sections/Subscribe'
import Footer from './components/layout/Footer'
import CookieBanner from './components/layout/CookieBanner'
import LanguageToggle from './components/layout/LanguageToggle'
import { community, galleries, videoList } from './data/content'

export default function App() {
  return (
    <>
      <LanguageToggle />
      <Hero />
      <main>
        <About />
        <FeaturedVideo />
        <Intro />
        <StripGallery {...galleries.outdoors} />
        <CarouselGallery {...galleries.trips} uppercase={false} />
        <CarouselGallery {...galleries.iceClimbing} tone="dark" />
        <CarouselGallery {...galleries.kids} />
        <CarouselGallery {...galleries.climbing} />
        <MediaRows
          heading={videoList.heading}
          items={videoList.items}
          titleClassName="section-title--plain"
        />
        <MediaRows
          heading={community.heading}
          items={community.items}
          tone="grey"
          titleClassName="section-title--white"
        />
        <FoxReport />
        <Interviews />
        <SocialBand />
        <Contact />
        <Subscribe />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
