import PageHero from '../components/sections/PageHero'
import FeaturedVideo from '../components/sections/FeaturedVideo'
import StripGallery from '../components/sections/StripGallery'
import LocationGallery from '../components/sections/LocationGallery'
import MediaRows from '../components/sections/MediaRows'
import JoinBand from '../components/sections/JoinBand'
import usePageTitle from '../hooks/usePageTitle'
import { useLanguage } from '../i18n/LanguageContext'

// Which component draws each section `type` in data/activities.js.
const SECTIONS = {
  featured: FeaturedVideo,
  gallery: StripGallery,
  locations: LocationGallery,
  videos: MediaRows,
}

// One page per activity, built from its entry in data/activities.js:
// banner, its sections in order, then an invitation to join.
export default function ActivityPage({ activity }) {
  const { t } = useLanguage()
  usePageTitle(t(activity.title))

  return (
    <>
      <PageHero title={t(activity.title)} intro={t(activity.intro)} image={activity.heroImage} />
      {activity.sections.map(({ type, ...props }, i) => {
        const Section = SECTIONS[type]
        // Alternate backgrounds, starting with the one the banner fades into.
        return <Section key={i} {...props} tone={i % 2 ? 'dark' : 'grey'} />
      })}
      <JoinBand />
    </>
  )
}
