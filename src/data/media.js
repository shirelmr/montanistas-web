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

const LIVED_EXPERIENCES = {
  title: { es: 'Testimonio de las experiencias vividas', en: 'Stories from our members' },
  text: {
    es: 'Nuestros compañeros dando su testimonio de las experiencias vividas dentro del grupo',
    en: 'Our members sharing what they have experienced as part of the group',
  },
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
    [
      {
        title: {
          es: 'Nuestros logros de 2024 y planes para 2025',
          en: 'Our 2024 achievements and 2025 plans',
        },
        text: {
          es: 'En entrevista con VT Radio sobre nuestros alcances en el 2024 y planes en 2025',
          en: 'Talking with VT Radio about what we achieved in 2024 and our plans for 2025',
        },
        video: videos.plans2025,
      },
    ],
    [
      {
        title: 'PBS, KCTS9, Cascade',
        text: {
          es: 'Nuestra participación en el evento de PBS canal 9 Seattle',
          en: 'Our participation in the PBS Channel 9 Seattle event',
        },
        video: videos.cascadePbs,
      },
    ],
    [
      {
        title: { es: 'Información al público', en: 'Community information' },
        text: {
          es: 'Información al público en el programa Estira tu Dólar',
          en: 'Sharing information with the public on the program Estira tu Dólar',
        },
        video: videos.stretchYourDollar,
      },
      { ...LIVED_EXPERIENCES, video: videos.vtrCabin },
    ],
    [
      {
        title: {
          es: 'La entrevista a un año de nuestra fundación',
          en: 'Our interview one year after our founding',
        },
        text: {
          es: 'A un año de nuestra fundación platicamos de las experiencias y planes a futuro',
          en: 'One year after our founding, we talked about our experiences and plans for the future',
        },
        video: videos.firstAnniversaryInterview,
      },
    ],
    [
      {
        title: 'VT Radio',
        text: { es: 'Invitados por la comunidad', en: 'Guests of the community' },
        video: videos.vtrCelebrating,
      },
      {
        title: 'VT Radio',
        text: { es: 'Primera entrevista de MW', en: 'Our first MW interview' },
        video: videos.vtrFirstInterview,
      },
    ],
  ],
}
