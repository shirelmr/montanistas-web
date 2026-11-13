import { Fragment } from 'react'
import VideoGrid from '../components/ui/VideoGrid'
import PeakFeature from '../components/sections/PeakFeature'
import PeakStory from '../components/sections/PeakStory'
import PhotoMosaic from '../components/sections/PhotoMosaic'
import PeakChart from '../components/sections/PeakChart'
import PeakClosing from '../components/sections/PeakClosing'
import JoinBand from '../components/sections/JoinBand'
import usePageTitle from '../hooks/usePageTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { peaksText } from '../data/peaks'

// One page per summit (see data/peaks.js). Its photos appear in a different
// way in each part, so the page never repeats itself: it opens on a magazine
// spread with the name, then the mountain on a card over a photo, videos, a
// mosaic of every photo, its place among the other summits, and a closing
// that leads to the others.
export default function PeakPage({ peak }) {
  const { t } = useLanguage()
  usePageTitle(t(peak.name))

  // Placeholders (photos still missing) don't count.
  const photos = peak.photos.filter((photo) => photo.src)
  // Photos for the opening spread; with fewer than three, just the main one
  // (or the drawn mountain).
  const feature = peak.feature ?? (photos.length >= 3 ? photos.slice(0, 3).map((photo) => photo.src) : [peak.photo])

  // The plain sections between the photo story and the closing, each drawn
  // with its background. They alternate, ending on grey above the black
  // closing.
  const parts = [
    peak.videos.length > 0 &&
      ((tone) => (
        <section className={`section section--${tone}`}>
          <h2 className="section-title">{t(peaksText.videosTitle)}</h2>
          <VideoGrid items={peak.videos.map((video) => ({ video }))} />
        </section>
      )),
    photos.length > 0 && ((tone) => <PhotoMosaic title={peaksText.photosTitle} photos={photos} tone={tone} />),
    (tone) => <PeakChart title={peaksText.compareTitle} intro={null} current={peak.slug} tone={tone} />,
  ].filter(Boolean)

  return (
    <>
      <PeakFeature peak={peak} photos={feature} />
      <PeakStory peak={peak} image={peak.storyImage ?? peak.photo} />

      {parts.map((part, i) => (
        <Fragment key={i}>{part((parts.length - 1 - i) % 2 ? 'dark' : 'grey')}</Fragment>
      ))}

      <PeakClosing peak={peak} image={peak.closingImage ?? peak.photo} />
      <JoinBand />
    </>
  )
}
