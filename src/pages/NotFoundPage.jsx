import { Link } from 'react-router'
import PageHero from '../components/sections/PageHero'
import usePageTitle from '../hooks/usePageTitle'
import { useLanguage } from '../i18n/LanguageContext'
import { notFoundPage, ui } from '../data/common'

export default function NotFoundPage() {
  const { t } = useLanguage()
  usePageTitle(t(notFoundPage.title))

  return (
    <PageHero title={t(notFoundPage.title)} intro={t(notFoundPage.text)}>
      <Link className="btn" to="/">
        {t(ui.home)}
      </Link>
    </PageHero>
  )
}
