// Home page: the highlights. Everything else lives on the activity pages.

import { gallery, image } from './images'
import { videos } from './videos'

export const hero = {
  title: {
    es: 'Descubre la Belleza al Aire Libre',
    en: 'Discover the Beauty of the Outdoors',
  },
  subtitle: {
    es: 'Experimente la naturaleza como nunca antes con nuestro equipo de primera calidad y recorridos guiados.',
    en: 'Experience nature like never before with our top-quality gear and guided tours.',
  },
  cta: { label: { es: 'Únete ya', en: 'Join us' }, to: '/contacto' },
  // Background: an image, or a looping video (e.g. '/videos/hero.mp4') that
  // plays over it once loaded.
  backgroundVideo: null,
  backgroundImage: image('hero/rainier-rope-team'),
}

// The one video to show first.
export const featured = {
  heading: { es: 'Lo más destacado', en: 'Featured' },
  text: {
    es: ['Haciendo cima en el Monte Rainier a 14,410 pies: el reportaje de Q13 Fox con nuestro compañero Pablo Gaviria.'],
    en: ['Reaching the summit of Mount Rainier at 14,410 feet: the Q13 Fox story with our member Pablo Gaviria.'],
  },
  video: videos.foxSummit,
}

export const about = {
  eyebrow: { es: 'Una milla a la vez.', en: 'One mile at a time.' },
  title: 'Montañistas de Washington',
  lines: {
    es: ['SOMOS DE LA COMUNIDAD Y PARA LA COMUNIDAD', 'Salga y respire aire fresco.'],
    en: ['WE ARE OF THE COMMUNITY AND FOR THE COMMUNITY', 'Step outside and breathe in the fresh air.'],
  },
  description: {
    es: 'Somos un grupo de entusiastas de las actividades al aire libre con sede en el estado de Washington. Nos encanta explorar rutas de senderismo, montañas y espacios al aire libre no solo en Washington, sino en todo Estados Unidos. Únase a nosotros, ya sea en una caminata tranquila o una escalada desafiante.',
    en: "We're a group of outdoor enthusiasts based in the state of Washington. We love exploring hiking trails, mountains, and the great outdoors not only in Washington, but across the United States. Join us, whether it's a leisurely hike or a challenging climb.",
  },
  cta: { label: { es: 'Conoce nuestras actividades', en: 'See our activities' }, href: '#actividades' },
}

export const activitiesSection = {
  heading: { es: 'Nuestras actividades', en: 'Our activities' },
}

// Newest first. `link` points to the page where the story continues.
export const recent = {
  heading: { es: 'Lo más reciente', en: 'Latest' },
  items: [
    {
      date: { es: 'Enero 2025', en: 'January 2025' },
      title: { es: 'Limpieza de la playa en Seward Park', en: 'Seward Park beach cleanup' },
      text: {
        es: 'Con los Pequeños Senderistas: predicar con el ejemplo es la mejor manera de educar.',
        en: 'With the Little Hikers: leading by example is the best way to teach.',
      },
      video: videos.sewardPark,
      link: '/comunidad',
    },
    {
      date: '2025',
      title: { es: 'Nuestros logros de 2024 y planes para 2025', en: 'Our 2024 achievements and 2025 plans' },
      text: {
        es: 'Entrevista en VT Radio sobre lo que logramos y lo que viene.',
        en: "An interview on VT Radio about what we achieved and what's next.",
      },
      video: videos.plans2025,
      link: '/en-los-medios',
    },
    {
      date: { es: 'Noviembre 2024', en: 'November 2024' },
      title: { es: 'Raquetas de nieve en Artist Point', en: 'Snowshoeing at Artist Point' },
      text: {
        es: 'Practicando con los nuevos miembros en el Monte Baker.',
        en: 'Practicing with new members on Mount Baker.',
      },
      video: videos.artistPoint,
      link: '/alta-montana',
    },
  ],
}

export const moments = {
  title: {
    es: 'Nuestros momentos favoritos en la naturaleza',
    en: 'The Great Outdoors: Our Favorite Moments in Nature',
  },
  photos: gallery('outdoors', { es: 'Momento en la naturaleza', en: 'Moment in nature' }),
}
