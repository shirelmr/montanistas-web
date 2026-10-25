// Image files used by the site. Gallery photos are picked up automatically
// from `src/assets/images/galleries/<folder>/`, so adding a photo only takes
// running scripts/optimize_images.py into the right folder (see README).

import logo from '../assets/images/brand/logo.webp'
import heroImage from '../assets/images/hero/rainier-rope-team.webp'
import introImage from '../assets/images/intro/group-snow-hike.webp'

const GALLERIES = '../assets/images/galleries/'

const fullSize = import.meta.glob('../assets/images/galleries/*/*.webp', {
  eager: true,
  import: 'default',
})
const thumbnails = import.meta.glob('../assets/images/galleries/*/thumbs/*.webp', {
  eager: true,
  import: 'default',
})

// Photos in one gallery folder, ordered by file name (hence the 01-, 02- prefixes).
export function galleryImages(folder) {
  const prefix = `${GALLERIES}${folder}/`
  return Object.keys(fullSize)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .map((path) => ({
      src: fullSize[path],
      thumb: thumbnails[path.replace(prefix, `${prefix}thumbs/`)] ?? null,
    }))
}

export { logo, heroImage, introImage }
