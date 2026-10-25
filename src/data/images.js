// Image files used by the site. Gallery photos are picked up automatically
// from `src/assets/images/galleries/<folder>/`, so adding a photo only takes
// running scripts/optimize_images.py into the right folder (see README).

import logo from '../assets/images/brand/logo.webp'

const ROOT = '../assets/images/'

const allImages = import.meta.glob('../assets/images/**/*.webp', {
  eager: true,
  import: 'default',
})

// Any image by its path inside src/assets/images, without the extension,
// e.g. image('galleries/trips/16-summit-team').
export function image(path) {
  const url = allImages[`${ROOT}${path}.webp`]
  if (!url) throw new Error(`Image not found: src/assets/images/${path}.webp`)
  return url
}

// Photos in one gallery folder, ordered by file name (hence the 01-, 02-
// prefixes), each with its thumbnail and a numbered alt text. While the
// folder is empty it returns placeholders instead.
export function gallery(folder, label, placeholderCount = 8) {
  const prefix = `${ROOT}galleries/${folder}/`
  const photos = Object.keys(allImages)
    .filter((path) => path.startsWith(prefix) && !path.includes('/thumbs/'))
    .sort()
    .map((path) => ({
      src: allImages[path],
      thumb: allImages[path.replace(prefix, `${prefix}thumbs/`)] ?? null,
    }))
  const items = photos.length
    ? photos
    : Array.from({ length: placeholderCount }, () => ({ src: null, thumb: null }))
  return items.map((photo, i) => ({
    ...photo,
    alt: { es: `${label.es} ${i + 1}`, en: `${label.en} ${i + 1}` },
  }))
}

export { logo }
