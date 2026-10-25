import { useEffect } from 'react'
import { site } from '../data/common'

// Sets the browser tab title, e.g. "Escalada · Montañistas de Washington".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name
  }, [title])
}
