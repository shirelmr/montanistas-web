// Peaks the group has summited. The Montaña page shows them on an elevation
// chart and a timeline, and each one gets its own page at
// /alta-montana/<slug>.
//
// Listed newest first: the timeline follows this order, so the first peak
// the group climbed goes last, at the bottom.
//
// - `shape`: outline on the chart: 'dome', 'cone', 'twin' or 'crater'.
// - `photo`: fills the peak on the chart and its timeline card.
//   `chartImage`: a different one for the chart only, showing the mountain
//   itself (not a sunset or the group). `chartCrop` frames part of it:
//   `at` moves the frame (e.g. '60% 0%' is the top, a bit right of center)
//   and the optional `zoom` closes in, e.g. { zoom: 2, at: '60% 0%' }.
// - `photos`: its page's gallery, from galleries/peak-<slug>/.
// - Optional picks for its page (otherwise taken from the gallery):
//   `feature`: three photos for the magazine spread. The first is the tall
//   one with the name written over its left side, so pick a landscape with
//   sky or snow there rather than faces. The other two are cut to 3:4, so
//   vertical photos keep everyone in the frame;
//   `storyImage`: behind the card about the mountain;
//   `closingImage`: rising out of the dark at the end.
// - `story`: how the group's climb went. `about`: the mountain itself.

import { gallery, image } from './images'
import { videos } from './videos'

export const PEAKS_PATH = '/alta-montana'

export const peakPath = (peak) => `${PEAKS_PATH}/${peak.slug}`

export const peaks = [
  {
    slug: 'rainier',
    name: { es: 'Monte Rainier', en: 'Mount Rainier' },
    region: 'Washington',
    elevationFt: 14411,
    coords: ['46.8529° N', '121.7604° W'],
    shape: 'dome',
    tagline: { es: 'El punto más alto de Washington', en: 'The highest point in Washington' },
    about: {
      es: 'Un volcán cubierto de glaciares que domina el horizonte de Seattle y Tacoma. Es la montaña más alta de la Cordillera de las Cascadas.',
      en: 'A glacier-covered volcano that rules the skyline of Seattle and Tacoma. It is the tallest mountain in the Cascade Range.',
    },
    story: {
      es: 'El 5 de julio de 2026 llegamos a la cumbre del Monte Rainier, a 14,411 pies, el punto más alto de Washington.',
      en: 'On July 5, 2026, we reached the summit of Mount Rainier, 14,411 feet up, the highest point in Washington.',
    },
    photo: image('galleries/peak-rainier/21-9032'),
    // Vertical, so it fills the peak without zooming in and keeps its
    // sharpness.
    chartImage: image('galleries/peak-rainier/57-8619'),
    photos: gallery('peak-rainier', { es: 'Monte Rainier', en: 'Mount Rainier' }),
    feature: [
      image('galleries/peak-rainier/47-497e5934'),
      image('galleries/peak-rainier/08-7741'),
      image('galleries/peak-rainier/44-8496'),
    ],
    storyImage: image('galleries/peak-rainier/48-d29b5dda'),
    closingImage: image('galleries/peak-rainier/36-8425'),
    videos: [videos.summitCrew, videos.foxSummit],
  },
  {
    slug: 'hood',
    name: { es: 'Monte Hood', en: 'Mount Hood' },
    region: 'Oregon',
    elevationFt: 11249,
    coords: ['45.3736° N', '121.6959° W'],
    shape: 'cone',
    tagline: { es: 'El punto más alto de Oregón', en: 'The highest point in Oregon' },
    about: {
      es: 'Un volcán de punta afilada al este de Portland, cubierto de glaciares y nieve todo el año.',
      en: 'A sharp-pointed volcano east of Portland, covered in glaciers and snow all year round.',
    },
    story: null,
    photo: image('galleries/peak-hood/21-6246'),
    chartImage: image('galleries/peak-hood/14-6107'),
    // The rime-covered spire, a bit left of center, lined up with the tip.
    chartCrop: { at: '38% 50%' },
    photos: gallery('peak-hood', { es: 'Monte Hood', en: 'Mount Hood' }),
    feature: [
      image('galleries/peak-hood/18-6215'),
      image('galleries/peak-hood/20-0401'),
      image('galleries/peak-hood/27-6283'),
    ],
    storyImage: image('galleries/peak-hood/07-3224'),
    closingImage: image('galleries/peak-hood/06-7836'),
    videos: [],
  },
  {
    slug: 'baker',
    name: { es: 'Monte Baker', en: 'Mount Baker' },
    region: 'Washington',
    elevationFt: 10781,
    coords: ['48.7768° N', '121.8144° W'],
    shape: 'dome',
    tagline: { es: 'La tercera montaña más alta de Washington', en: 'The third-highest mountain in Washington' },
    about: {
      es: 'Un volcán cubierto de glaciares cerca de la frontera con Canadá, que se ve desde Bellingham y Vancouver. Después del Rainier, es el volcán con más glaciares de las Cascadas.',
      en: 'A glacier-covered volcano near the Canadian border, seen from Bellingham and Vancouver. After Rainier, it is the most glaciated volcano in the Cascades.',
    },
    story: null,
    photo: image('galleries/peak-baker/11-7242'),
    chartImage: image('galleries/peak-baker/08-7222'),
    // The rock needle's tip lined up with the tip of the peak.
    chartCrop: { at: '60% 30%' },
    photos: gallery('peak-baker', { es: 'Monte Baker', en: 'Mount Baker' }),
    feature: [
      image('galleries/peak-baker/15-7310'),
      image('galleries/peak-baker/22-1c01cacd'),
      image('galleries/peak-baker/08-7222'),
    ],
    storyImage: image('galleries/peak-baker/07-dawn-over-the-range'),
    closingImage: image('galleries/peak-baker/09-7225'),
    videos: [],
  },
  {
    slug: 'st-helens',
    name: { es: 'Monte St. Helens', en: 'Mount St. Helens' },
    region: 'Washington',
    elevationFt: 8363,
    coords: ['46.1914° N', '122.1956° W'],
    shape: 'crater',
    tagline: { es: 'El volcán de la erupción de 1980', en: 'The volcano of the 1980 eruption' },
    about: {
      es: 'Un volcán activo del suroeste de Washington. La erupción de 1980 le quitó más de 1,300 pies de altura y dejó el gran cráter que se ve desde su cumbre.',
      en: 'An active volcano in southwest Washington. The 1980 eruption took more than 1,300 feet off its top and left the huge crater you see from the summit.',
    },
    story: null,
    photo: image('galleries/peak-st-helens/09-9339'),
    chartImage: image('galleries/peak-st-helens/04-8704'),
    photos: gallery('peak-st-helens', { es: 'Monte St. Helens', en: 'Mount St. Helens' }),
    feature: [
      image('galleries/peak-st-helens/22-b8bd7ddd'),
      image('galleries/peak-st-helens/21-684d0bbb'),
      image('galleries/peak-st-helens/16-9389'),
    ],
    storyImage: image('galleries/peak-st-helens/02-9224'),
    closingImage: image('galleries/peak-st-helens/01-9223'),
    videos: [],
  },
  {
    slug: 'shasta',
    name: { es: 'Monte Shasta', en: 'Mount Shasta' },
    region: 'California',
    elevationFt: 14179,
    coords: ['41.4092° N', '122.1949° W'],
    shape: 'twin',
    tagline: { es: 'El segundo pico más alto de las Cascadas', en: 'The second-highest peak in the Cascades' },
    about: {
      es: 'Un volcán solitario en el norte de California que se levanta sobre todo lo que lo rodea, con Shastina, su cono hermano, a un costado.',
      en: 'A lone volcano in Northern California that towers over everything around it, with Shastina, its sister cone, at its side.',
    },
    story: null,
    photo: image('galleries/peak-shasta/15-team-on-the-slope'),
    chartImage: image('galleries/peak-shasta/27-cloud-cap'),
    photos: gallery('peak-shasta', { es: 'Monte Shasta', en: 'Mount Shasta' }),
    feature: [
      image('galleries/peak-shasta/23-lenticular-sunset'),
      image('galleries/peak-shasta/09-pair-on-the-snow'),
      image('galleries/peak-shasta/22-camp-at-sunset'),
    ],
    storyImage: image('galleries/peak-shasta/18-view-of-the-ridges'),
    closingImage: image('galleries/peak-shasta/04-snowy-forest'),
    videos: [],
  },
]

// The order of the elevation chart, left to right: tallest in the middle
// and the rest alternating to its right and left, so the row reads like a
// mountain range. The links between summit pages follow it too.
export const chartOrder = [...peaks]
  .sort((a, b) => b.elevationFt - a.elevationFt)
  .reduce((row, peak, i) => (i % 2 ? [...row, peak] : [peak, ...row]), [])

// Top of the elevation chart: the tallest peak rounded up to the next
// 5,000 ft.
export const ELEVATION_STEP = 5000
export const ELEVATION_TOP =
  Math.ceil(Math.max(...peaks.map((peak) => peak.elevationFt)) / ELEVATION_STEP) * ELEVATION_STEP

// Text for the Montaña page sections and the peak pages.
export const peaksText = {
  chart: {
    title: { es: 'Nuestras cumbres', en: 'Our summits' },
    intro: {
      es: 'Cada montaña a su altura real. Toca una para ver su historia.',
      en: 'Every mountain at its true height. Tap one to see its story.',
    },
    axis: { es: 'Altitud en pies', en: 'Elevation in feet' },
  },
  timeline: {
    title: { es: 'Línea del tiempo', en: 'Timeline' },
    intro: {
      es: 'Cumbre por cumbre, el camino que hemos recorrido juntos.',
      en: 'Summit by summit, the path we have climbed together.',
    },
  },
  summit: { es: 'Cumbre', en: 'Summit' },
  feet: { es: 'pies', en: 'feet' },
  cascades: { es: 'Cascadas', en: 'Cascades' },
  seePeak: { es: 'Ver la cumbre', en: 'See the summit' },
  allPeaks: { es: 'Todas las cumbres', en: 'All summits' },
  aboutTitle: { es: 'La montaña', en: 'The mountain' },
  storyTitle: { es: 'Nuestra cumbre', en: 'Our summit' },
  compareTitle: { es: 'Junto a nuestras otras cumbres', en: 'Next to our other summits' },
  photosTitle: { es: 'Fotos de la cumbre', en: 'Summit photos' },
  videosTitle: { es: 'Videos', en: 'Videos' },
  otherPeaks: { es: 'Otras cumbres', en: 'Other summits' },
  motto: { es: ['Una', 'milla', 'a la vez'], en: ['One', 'mile', 'at a time'] },
  closing: {
    title: { es: 'Una milla a la vez', en: 'One mile at a time' },
    subtitle: { es: 'Nos vemos en la próxima cumbre', en: 'See you at the next summit' },
  },
}

// Feet to meters, rounded, e.g. 14411 -> 4392.
export const toMeters = (feet) => Math.round(feet * 0.3048)

// Numbers always use commas, as in the rest of the site: 14,411.
export const formatNumber = (n) => n.toLocaleString('en-US')
