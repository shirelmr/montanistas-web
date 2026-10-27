// One entry per activity page. Each entry becomes a page at /<slug>, a link
// in the menu and a card on the home page, in this order.
//
// Below its banner, each page shows its `sections` in order. A section's
// `type` picks how it looks:
// - featured:  one large video with a heading and a few lines of text
// - gallery:   a photo carousel, with an optional intro and videos under it
// - locations: tabs to switch between places, each with its own photos and
//              optional videos; section-wide videos go above the tabs
// - videos:    a list of videos with a description beside each
// Leave `heroImage` / `cardImage` as null to show a placeholder until there
// are photos.

import { gallery, image } from './images'
import { videos } from './videos'

const VIDEOS_HEADING = { es: 'Videos', en: 'Videos' }

export const activities = [
  {
    slug: 'alta-montana',
    nav: { es: 'Montaña', en: 'Mountains' },
    title: { es: 'Senderismo y Alta Montaña', en: 'Hiking & Mountaineering' },
    summary: {
      es: 'Caminatas, campamentos en la nieve y cumbres como el Monte Rainier.',
      en: 'Hikes, snow camping and summits like Mount Rainier.',
    },
    intro: {
      es: 'Desde caminatas de un día hasta cumbres de más de 14,000 pies: exploramos los senderos y montañas de Washington y de todo el país, siempre en grupo.',
      en: 'From day hikes to summits over 14,000 feet, we explore the trails and mountains of Washington and beyond, always as a group.',
    },
    heroImage: image('galleries/outdoors/01-alpenglow-climb'),
    cardImage: image('galleries/trips/16-summit-team'),
    sections: [
      {
        type: 'featured',
        heading: { es: 'Cumbre del Monte Rainier', en: 'Mount Rainier summit' },
        text: {
          es: [
            'El 5 de julio de 2026 llegamos a la cumbre del Monte Rainier, a 14,411 pies, el punto más alto de Washington.',
          ],
          en: [
            'On July 5, 2026, we reached the summit of Mount Rainier, 14,411 feet up, the highest point in Washington.',
          ],
        },
        video: videos.summitCrew,
      },
      {
        type: 'gallery',
        title: {
          es: 'Un viaje por lo salvaje: una guía visual de nuestras excursiones',
          en: 'Journey Through the Wild: A Visual Guide to Our Outdoor Trips',
        },
        photos: gallery('trips', { es: 'Excursión de alta montaña', en: 'Mountaineering trip' }),
      },
      {
        type: 'videos',
        heading: VIDEOS_HEADING,
        items: [
          // 2026 hikes, newest first.
          {
            title: 'Wallace Falls',
            text: {
              es: ['Caminata a las cascadas de Wallace Falls, en Gold Bar, WA', '17 de octubre de 2026'],
              en: ['A hike to the Wallace Falls waterfalls in Gold Bar, WA', 'October 17, 2026'],
            },
            video: videos.wallaceFalls,
          },
          {
            title: 'Lake Ingalls',
            text: {
              es: ['Alerces dorados y la primera nevada de la temporada', '11 de octubre de 2026'],
              en: ['Golden larches and the first snow of the season', 'October 11, 2026'],
            },
            video: videos.lakeIngalls,
          },
          {
            title: 'Mount Pilchuck',
            text: {
              es: ['Caminata a Mount Pilchuck', '27 de septiembre de 2026'],
              en: ['Hiking Mount Pilchuck', 'September 27, 2026'],
            },
            video: videos.mountPilchuck,
          },
          {
            title: {
              es: 'The Enchantments (Los Lagos Encantados)',
              en: 'The Enchantments',
            },
            text: {
              es: [
                'Los Lagos Encantados es un recorrido por los lagos alpinos en Leavenworth, WA, con una elevación de 4,500 pies y 18 millas. Es un sendero difícil, pero su belleza impulsa a muchos a tomar el desafío con tal de ver las maravillas de la naturaleza',
                '20 de septiembre de 2026',
              ],
              en: [
                "The Enchantments is a route through the alpine lakes near Leavenworth, WA, with 4,500 feet of elevation gain over 18 miles. It's a tough trail, but its beauty inspires many to take on the challenge just to see the wonders of nature",
                'September 20, 2026',
              ],
            },
            video: videos.enchantments,
          },
          {
            title: 'Granite Mountain Lookout',
            text: {
              es: ['Caminata hasta el mirador de Granite Mountain', '5 de septiembre de 2026'],
              en: ['Hiking up to the Granite Mountain lookout', 'September 5, 2026'],
            },
            video: videos.graniteMountain,
          },
          {
            title: 'Mount Pugh',
            text: {
              es: ['Caminata a Mount Pugh', '29 de agosto de 2026'],
              en: ['Hiking Mount Pugh', 'August 29, 2026'],
            },
            video: videos.mountPugh,
          },
          {
            title: 'Thunder Mountain',
            text: {
              es: ['Caminata a Thunder Mountain', '22 de agosto de 2026'],
              en: ['Hiking Thunder Mountain', 'August 22, 2026'],
            },
            video: videos.thunderMountain,
          },
        ],
      },
    ],
  },

  {
    slug: 'escalada',
    nav: { es: 'Escalada', en: 'Climbing' },
    title: { es: 'Escalada', en: 'Climbing' },
    summary: {
      es: 'Escalada en hielo, escalada con cuerda en Edgeworks y cursos de belay.',
      en: 'Ice climbing, rope climbing at Edgeworks and belay courses.',
    },
    intro: {
      es: 'Escalada en hielo en Ouray, Colorado, escalada con cuerda en los gimnasios Edgeworks de Seattle, Tacoma y Bellevue, y cursos de belay: aprendemos juntos, con cuerda y con confianza.',
      en: 'Ice climbing in Ouray, Colorado, rope climbing at the Edgeworks gyms in Seattle, Tacoma and Bellevue, and belay courses: we learn together, on rope and with confidence.',
    },
    heroImage: image('galleries/outdoors/06-frozen-waterfall-group'),
    cardImage: image('galleries/ice-climbing/04-flag-on-ice'),
    sections: [
      {
        type: 'gallery',
        title: { es: 'Escalada en hielo en Ouray, Colorado', en: 'Ice Climbing in Ouray, Colorado' },
        photos: gallery('ice-climbing', { es: 'Escalada en hielo', en: 'Ice climbing' }),
        videos: [
          {
            video: videos.iceClimbing2026,
            caption: { es: 'Escalada en hielo · 7 de febrero de 2026', en: 'Ice climbing · February 7, 2026' },
          },
          {
            video: videos.ourayIcePark,
            caption: 'Ouray Ice Park, Colorado',
          },
        ],
      },
      {
        type: 'locations',
        heading: { es: 'Escalada con cuerda en Edgeworks', en: 'Rope climbing at Edgeworks' },
        intro: {
          es: 'Nos reunimos a escalar en los tres gimnasios de Edgeworks. Gracias a Edgeworks por abrirle este espacio a nuestra comunidad latina.',
          en: "We meet to climb at Edgeworks' three gyms. Thanks to Edgeworks for opening this space to our Latino community.",
        },
        // Shown above the tabs: not tied to one gym.
        videos: [
          {
            video: videos.climbingNight,
            caption: { es: 'Noche de escalada', en: 'Climbing night' },
          },
        ],
        // Each gym's photos go in src/assets/images/galleries/edgeworks-<city>.
        places: [
          {
            name: 'Seattle',
            photos: gallery('edgeworks-seattle', { es: 'Edgeworks Seattle', en: 'Edgeworks Seattle' }, 4),
          },
          {
            name: 'Tacoma',
            photos: gallery('edgeworks-tacoma', { es: 'Edgeworks Tacoma', en: 'Edgeworks Tacoma' }, 4),
          },
          {
            name: 'Bellevue',
            photos: gallery('edgeworks-bellevue', { es: 'Edgeworks Bellevue', en: 'Edgeworks Bellevue' }, 4),
          },
        ],
      },
      {
        type: 'gallery',
        title: { es: 'Cursos de belay', en: 'Belay courses' },
        intro: {
          es: 'La seguridad es esencial. Por eso nos capacitamos como belayers, para cuidar a cada compañero que escala.',
          en: 'Safety is essential. That is why we train as belayers, to look after every partner who climbs.',
        },
        photos: gallery('belay-courses', { es: 'Curso de belay', en: 'Belay course' }),
      },
    ],
  },

  {
    slug: 'pequenos-senderistas',
    nav: { es: 'Pequeños Senderistas', en: 'Little Hikers' },
    title: { es: 'Pequeños Senderistas', en: 'Little Hikers' },
    summary: {
      es: 'Caminatas y eventos para niños y sus familias.',
      en: 'Hikes and events for kids and their families.',
    },
    intro: {
      es: 'Inculcar el amor por la naturaleza a temprana edad es la clave para un mejor futuro. Por eso organizamos caminatas y eventos para niños y sus familias.',
      en: "Teaching kids to love nature early is the key to a better future. That's why we organize hikes and events for children and their families.",
    },
    // No photos yet: add some to src/assets/images/galleries/little-hikers.
    heroImage: null,
    cardImage: null,
    sections: [
      {
        type: 'gallery',
        title: {
          es: 'Porque los niños son lo más importante',
          en: 'Because kids are what matter most',
        },
        photos: gallery('little-hikers', { es: 'Pequeños Senderistas', en: 'Little Hikers' }),
      },
      {
        type: 'videos',
        heading: VIDEOS_HEADING,
        items: [
          {
            title: { es: 'Pequeños Senderistas en el acuario', en: 'Little Hikers at the aquarium' },
            text: {
              es: ['Visita al Acuario de Seattle', '18 de octubre de 2026'],
              en: ['A visit to the Seattle Aquarium', 'October 18, 2026'],
            },
            video: videos.seattleAquarium,
          },
          {
            title: { es: 'Algunos de nuestros eventos', en: 'Some of our events' },
            text: {
              es: ['Momentos de los eventos de Pequeños Senderistas'],
              en: ['Moments from our Little Hikers events'],
            },
            video: videos.kidsEvents,
          },
          {
            title: { es: 'Celebración del día del niño', en: "Children's Day celebration" },
            text: {
              es: [
                'Esta es la razón por la cual el grupo trabaja fuerte todos los días: la niñez es el futuro',
                '28 de abril de 2024',
              ],
              en: ['This is why our group works hard every day: children are the future', 'April 28, 2024'],
            },
            video: videos.kidsDay,
          },
          {
            title: 'Snoqualmie Falls',
            text: {
              es: ['Los Pequeños Senderistas en las cascadas de Snoqualmie Falls', '23 de marzo de 2024'],
              en: ['The Little Hikers at Snoqualmie Falls', 'March 23, 2024'],
            },
            video: videos.snoqualmieFalls,
          },
          {
            title: { es: 'Convivio en Wenatchee', en: 'Get-together in Wenatchee' },
            text: {
              es: ['Convivio con la comunidad de Wenatchee y los animalitos'],
              en: ['A get-together with the Wenatchee community, and some furry friends'],
            },
            video: videos.wenatcheeGathering,
          },
        ],
      },
    ],
  },

  {
    slug: 'comunidad',
    nav: { es: 'Comunidad', en: 'Community' },
    title: { es: 'Comunidad', en: 'Community' },
    summary: {
      es: 'Limpieza de senderos y playas, plantación de árboles y más.',
      en: 'Trail and beach cleanups, tree planting and more.',
    },
    intro: {
      es: 'Limpiamos parques y playas, plantamos árboles y abrimos senderos. Trabajamos para la comunidad que nos recibe.',
      en: 'We clean up parks and beaches, plant trees and clear trails, working for the community that welcomes us.',
    },
    heroImage: image('galleries/outdoors/02-sunset-flag'),
    cardImage: image('galleries/trips/03-group-with-flag'),
    sections: [
      {
        type: 'videos',
        heading: { es: 'Trabajando para la comunidad', en: 'Working for the community' },
        items: [
          {
            title: { es: 'Reforestación en Hilltop Park', en: 'Reforestation at Hilltop Park' },
            text: {
              es: ['Plantando árboles para la comunidad', '15 de agosto de 2026'],
              en: ['Planting trees for the community', 'August 15, 2026'],
            },
            video: videos.hilltopPark,
          },
          {
            title: { es: 'Reforestación y servicio comunitario', en: 'Reforestation and community service' },
            text: {
              es: ['Celebramos nuestro 3er aniversario sirviendo a la comunidad'],
              en: ['We celebrated our 3rd anniversary by serving the community'],
            },
            video: videos.communityAnniversary,
          },
        ],
      },
    ],
  },
]
