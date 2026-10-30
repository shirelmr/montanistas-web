// "En los medios" page: TV and radio stories about the group.

import { image } from './images'
import { videos } from './videos'

export const mediaPage = {
  path: '/en-los-medios',
  nav: { es: 'Medios', en: 'Media' },
  title: { es: 'En los medios', en: 'In the media' },
  intro: {
    es: 'Reportajes y entrevistas sobre Montañistas de Washington en la televisión y la radio.',
    en: 'News stories and interviews about Montañistas de Washington on TV and radio.',
  },
  heroImage: image('galleries/trips/17-crater-rim-team'),
}

export const foxReport = {
  heading: { es: 'Reportaje Fox Local News', en: 'Fox Local News Report' },
  subtitle: {
    es: 'Reportaje de Q13 Fox News haciendo cima en la montaña Rainier a los 14,410 pies de altura. Pablo Gaviria (reportero)',
    en: 'Q13 Fox News story on reaching the summit of Mount Rainier at 14,410 feet. Pablo Gaviria (reporter)',
  },
  video: videos.foxSummit,
}

// Each row holds one (full width) or two (side by side) interviews.
export const interviews = {
  heading: { es: 'Entrevistas', en: 'Interviews' },
  rows: [
    [
      {
        title: { es: 'Seguridad en la montaña', en: 'Mountain safety' },
        text: {
          es: 'VT Radio Universal presenta a Montañistas de Washington hablando de seguridad en la montaña',
          en: 'VT Radio Universal features Montañistas de Washington talking about mountain safety',
        },
        video: videos.mountainSafetyRadio,
      },
      {
        title: { es: 'Entrevista con Sol Castro', en: 'Interview with Sol Castro' },
        text: {
          es: 'Podcast con Sol Castro, alpinista profesional de México',
          en: 'A podcast with Sol Castro, a professional mountaineer from Mexico',
        },
        video: videos.solCastroPodcast,
      },
    ],
  ],
}
