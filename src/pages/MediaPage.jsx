import PageHero from '../components/sections/PageHero'
import FoxReport from '../components/sections/FoxReport'
import Interviews from '../components/sections/Interviews'
import JoinBand from '../components/sections/JoinBand'
import usePageTitle from '../hooks/usePageTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { mediaPage } from '../data/media'

export default function MediaPage() {
  const { t } = useLanguage()
  usePageTitle(t(mediaPage.title))

  return (
    <>
      <PageHero title={t(mediaPage.title)} intro={t(mediaPage.intro)} image={mediaPage.heroImage} />
      <FoxReport tone="grey" />
      <Interviews tone="dark" />
      <JoinBand />
    </>
  )
}
