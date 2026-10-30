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
      date: { es: '21 de octubre de 2026', en: 'October 21, 2026' },
      title: { es: 'Seguridad en la montaña', en: 'Mountain safety' },
      text: {
        es: 'VT Radio Universal presenta a Montañistas de Washington hablando de seguridad en la montaña.',
        en: 'VT Radio Universal features Montañistas de Washington talking about mountain safety.',
      },
      video: videos.mountainSafetyRadio,
      link: '/en-los-medios',
    },
    {
      date: { es: '17 de octubre de 2026', en: 'October 17, 2026' },
      title: 'Wallace Falls',
      text: {
        es: 'Caminata a las cascadas de Wallace Falls.',
        en: 'A hike to the Wallace Falls waterfalls.',
      },
      video: videos.wallaceFalls,
      link: '/alta-montana',
    },
    {
      date: { es: '11 de octubre de 2026', en: 'October 11, 2026' },
      title: 'Lake Ingalls',
      text: {
        es: 'Alerces dorados y la primera nieve de la temporada.',
        en: 'Golden larches and the first snow of the season.',
      },
      video: videos.lakeIngalls,
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
