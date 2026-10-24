import Hero from './components/Hero'
import About from './components/About'
import FeaturedVideo from './components/FeaturedVideo'
import Intro from './components/Intro'
import StripGallery from './components/StripGallery'
import CarouselGallery from './components/CarouselGallery'
import MediaRows from './components/MediaRows'
import FoxReport from './components/FoxReport'
import Interviews from './components/Interviews'
import SocialBand from './components/SocialBand'
import Contact from './components/Contact'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { community, galleries, videoList } from './data/content'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <FeaturedVideo />
        <Intro />
        <StripGallery {...galleries.outdoors} />
        <CarouselGallery {...galleries.journey} uppercase={false} />
        <CarouselGallery {...galleries.kids} tone="dark" />
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
