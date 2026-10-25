import PageHero from '../components/sections/PageHero'
import Contact from '../components/sections/Contact'
import Subscribe from '../components/sections/Subscribe'
import usePageTitle from '../hooks/usePageTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { contactPage } from '../data/common'

export default function ContactPage() {
  const { t } = useLanguage()
  usePageTitle(t(contactPage.title))

  return (
    <>
      <PageHero title={t(contactPage.title)} intro={t(contactPage.intro)} image={contactPage.heroImage} />
      <Contact />
      <Subscribe />
    </>
  )
}
