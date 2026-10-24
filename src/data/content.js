// All of the site's text, links, photos and videos live here.
//
// Languages: any text can be a plain string (shown in both languages) or
// `{ es: '...', en: '...' }` to show a different version per language.
//
// Placeholders: any `src: null` photo or video without a `youtubeId` /
// `vimeoId` renders a stand-in. To use real media, drop files in
// `public/images/...` and set `src: '/images/your-file.jpg'`, and paste
// the ID from a YouTube link (youtube.com/watch?v=THIS_PART) into `youtubeId`.

// Builds `count` placeholder photos for a gallery.
const placeholders = (count, label) =>
  Array.from({ length: count }, (_, i) => ({
    src: null,
    alt: { es: `${label.es} ${i + 1}`, en: `${label.en} ${i + 1}` },
  }))

export const site = {
  name: 'Montañistas de Washington',
  // Set to e.g. '/images/logo.png' once the real logo is in public/images.
  logo: null,
}

// Labels for buttons, forms and screen readers.
export const ui = {
  language: { es: 'Idioma', en: 'Language' },
  home: { es: 'Inicio', en: 'Home' },
  previous: { es: 'Anterior', en: 'Previous' },
  next: { es: 'Siguiente', en: 'Next' },
  previousPhoto: { es: 'Foto anterior', en: 'Previous photo' },
  nextPhoto: { es: 'Foto siguiente', en: 'Next photo' },
  carousel: { es: 'carrusel', en: 'carousel' },
  viewPhoto: { es: 'Ver', en: 'View' },
  thumbsLeft: { es: 'Desplazar miniaturas a la izquierda', en: 'Scroll thumbnails left' },
  thumbsRight: { es: 'Desplazar miniaturas a la derecha', en: 'Scroll thumbnails right' },
  play: { es: 'Reproducir', en: 'Play' },
  videoPending: { es: 'Video pendiente', en: 'Video coming soon' },
  rightsReserved: { es: 'Todos los derechos reservados.', en: 'All Rights Reserved.' },
}

export const hero = {
  title: {
    es: 'Descubre la Belleza al Aire Libre',
    en: 'Discover the Beauty of the Outdoors',
  },
  subtitle: {
    es: 'Experimente la naturaleza como nunca antes con nuestro equipo de primera calidad y recorridos guiados.',
    en: 'Experience nature like never before with our top-quality gear and guided tours.',
  },
  cta: { label: { es: 'Únete ya', en: 'Join us' }, href: '#contacto' },
  // Background: a looping video (e.g. '/videos/hero.mp4') or an image.
  backgroundVideo: null,
  backgroundImage: null,
}

export const about = {
  eyebrow: { es: 'Una milla a la vez.', en: 'One mile at a time.' },
  title: 'Montañistas de Washington',
  lines: {
    es: ['SOMOS DE LA COMUNIDAD Y PARA LA COMUNIDAD', 'Salga y respire aire fresco.'],
    en: ['WE ARE OF THE COMMUNITY AND FOR THE COMMUNITY', 'Step outside and breathe in the fresh air.'],
  },
  cta: { label: { es: 'Conoce más', en: 'Find out more' }, href: '#nosotros' },
}

const CREW =
  'Alicia Tapia, Fabian Matia Mora, Eliseo Cruz, Lourdes Orozco, Pablo Gaviria, Marvin Velasquez, Marcos Bueno'

export const featuredVideo = {
  heading: 'Video',
  credits: {
    es: [
      CREW,
      'y Hector Tito Hernandez felicidades por tu gran esfuerzo y tu apoyo incondicional',
      'al grupo',
      'Montañistas De Washington',
    ],
    en: [
      CREW,
      'and Hector Tito Hernandez, congratulations on your hard work and your unconditional support',
      'for the group',
      'Montañistas De Washington',
    ],
  },
  video: { title: 'Montañistas de Washington', vimeoId: null, youtubeId: null },
}

export const intro = {
  title: 'Montañistas de Washington',
  subtitle: {
    es: 'Explore la naturaleza con Montañistas de Washington',
    en: 'Explore the Great Outdoors with Montañistas de Washington',
  },
  photo: { src: null, alt: { es: 'Grupo en la nieve', en: 'Group in the snow' } },
  paragraphs: {
    es: [
      'Montañistas de Washington es un grupo de entusiastas de las actividades al aire libre con sede en el estado de Washington. Nos encanta explorar rutas de senderismo, montañas y espacios al aire libre no solo en Washington, sino en todo Estados Unidos. Únase a nosotros en nuestras aventuras, ya sea una caminata tranquila o una escalada desafiante, y conéctese con una comunidad de amantes de las actividades al aire libre con ideas afines.',
    ],
    en: [
      "Montañistas de Washington is a group of outdoor enthusiasts based in the state of Washington. We love exploring hiking trails, mountains, and the great outdoors not only in Washington, but across the United States. Join us on our adventures, whether it's a leisurely hike or a challenging climb, and connect with a community of like-minded outdoor lovers.",
    ],
  },
}

export const galleries = {
  outdoors: {
    title: {
      es: 'Nuestros momentos favoritos en la naturaleza',
      en: 'The Great Outdoors: Our Favorite Moments in Nature',
    },
    photos: placeholders(8, { es: 'Momento', en: 'Moment' }),
  },
  journey: {
    title: {
      es: 'Un viaje por lo salvaje: una guía visual de nuestras excursiones',
      en: 'Journey Through the Wild: A Visual Guide to Our Outdoor Trips',
    },
    photos: placeholders(16, { es: 'Viaje', en: 'Trip' }),
  },
  kids: {
    title: {
      es: 'Pequeños Senderistas porque los niños son lo más importante',
      en: 'Little Hikers, because kids are what matter most',
    },
    photos: placeholders(16, { es: 'Pequeños Senderistas', en: 'Little Hikers' }),
  },
  climbing: {
    title: { es: 'Noches de Escalada en Español', en: 'Climbing Nights in Spanish' },
    photos: placeholders(16, { es: 'Noche de Escalada', en: 'Climbing Night' }),
  },
}

// Video titles are the names of the videos on YouTube, so they aren't translated.
export const videoList = {
  heading: 'Video',
  items: [
    {
      title: { es: 'Pequeños Senderistas', en: 'Little Hikers' },
      text: {
        es: [
          'Inculcar a disfrutar la naturaleza a temprana edad es la clave para un mejor futuro para nuestros niños y jóvenes',
        ],
        en: [
          'Teaching kids to enjoy nature at an early age is the key to a better future for our children and young people',
        ],
      },
      video: { title: '1er Aniversario- Pequeños Senderistas', youtubeId: null },
    },
    {
      title: 'Montañistas De Washington',
      text: {
        es: ['Un pequeño video de lo que se vive en las caminatas del grupo a un año de su fundación'],
        en: ['A short video of what our group hikes are like, one year after we were founded'],
      },
      video: { title: '1er Aniversario| Alta Montaña | Eventos', youtubeId: null },
    },
    {
      title: {
        es: 'Es mucho lo que se puede lograr si se trabaja con mucho esfuerzo',
        en: 'So much can be achieved through hard work',
      },
      text: {
        es: [
          'Este es el reportaje que nos hizo recientemente el canal Q13 Fox de nuestra cima a la montaña Rainier a los 14,410 pies de altura gracias a Pablo Gaviria (reportero y miembro del grupo de alta montaña)',
        ],
        en: [
          'This is the story Q13 Fox recently ran about our summit of Mount Rainier at 14,410 feet, thanks to Pablo Gaviria (reporter and member of our high-mountain group)',
        ],
      },
      video: { title: 'MONTAÑISTAS DE WASHINGTON SUMMITTING THE HIGHEST PEAK', youtubeId: null },
    },
    {
      title: {
        es: 'El corrido de Montañistas de Washington',
        en: 'The Montañistas de Washington corrido',
      },
      text: {
        es: [
          'Los corridos son una manera de expresión para contar la historia de las personas a través de la música',
          'Fabian Matia Mora (autor de la letra)',
          'Lazo Norteño (música)',
          'Enrique Vargas (voz)',
        ],
        en: [
          "Corridos are a way of telling people's stories through music",
          'Fabian Matia Mora (lyrics)',
          'Lazo Norteño (music)',
          'Enrique Vargas (vocals)',
        ],
      },
      video: { title: 'Montañistas De Washington- Corrido', youtubeId: null },
    },
    {
      title: {
        es: 'The Enchantments (Los Lagos Encantados)',
        en: 'The Enchantments',
      },
      text: {
        es: [
          'Los Lagos Encantados es un recorrido por los lagos alpinos en Leavenworth, WA, con una elevación de 4,500 pies y 18 millas. Es un sendero difícil, pero su belleza impulsa a muchos a tomar el desafío con tal de ver las maravillas de la naturaleza',
        ],
        en: [
          "The Enchantments is a route through the alpine lakes near Leavenworth, WA, with 4,500 feet of elevation gain over 18 miles. It's a tough trail, but its beauty inspires many to take on the challenge just to see the wonders of nature",
        ],
      },
      video: { title: 'The Enchantments- Montañistas De Washington', youtubeId: null },
    },
    {
      title: { es: 'Pequeños Senderistas', en: 'Little Hikers' },
      text: { es: ['Algunos de los eventos'], en: ['Some of our events'] },
      video: { title: 'PEQUEÑOS SENDERISTAS —EVENTOS', youtubeId: null },
    },
    {
      title: { es: 'Noches de Escalada', en: 'Climbing Nights' },
      text: ['Edgeworks Bellevue'],
      video: { title: 'Montañistas De Washington | Edgeworks Bellevue', youtubeId: null },
    },
    {
      title: 'Edgeworks Seattle',
      text: {
        es: [
          'Edgeworks Seattle',
          'Gracias por darle este espacio de recreación a nuestra comunidad latina hispanohablante',
        ],
        en: [
          'Edgeworks Seattle',
          'Thank you for giving our Spanish-speaking Latino community this space for recreation',
        ],
      },
      video: { title: 'Montañistas De Washington| Noche De Escalada', youtubeId: null },
    },
    {
      title: { es: 'El Gran Cañón', en: 'The Grand Canyon' },
      text: {
        es: [
          'El viaje al Gran Cañón en Arizona es uno de los senderos que caminamos cada año para llevar a nuevos miembros del grupo a conocer senderos y parques nacionales fuera del estado de WA',
        ],
        en: [
          'The Grand Canyon trip in Arizona is one of the hikes we do every year, so new members can discover trails and national parks outside Washington State',
        ],
      },
      video: { title: 'Grand Canyon |Montañistas De Washington', youtubeId: null },
    },
    {
      title: { es: 'Pequeños Senderistas', en: 'Little Hikers' },
      text: {
        es: ['Esta es la razón por la cual el grupo trabaja fuerte todos los días: la niñez es el futuro'],
        en: ['This is why our group works hard every day: children are the future'],
      },
      video: { title: 'Pequeños Senderistas _ Feliz día del niño', youtubeId: null },
    },
    {
      title: { es: 'Haciendo Comunidad', en: 'Building Community' },
      text: {
        es: ['Gracias a nuestros amigos de Wenatchee por participar en esta caminata'],
        en: ['Thanks to our friends from Wenatchee for joining us on this hike'],
      },
      video: { title: 'Montañistas De Washington #wenatchee Wallace', youtubeId: null },
    },
    {
      title: { es: 'Viaje a Alaska', en: 'Trip to Alaska' },
      text: {
        es: ['Visitando la última frontera: Alaska'],
        en: ['Visiting the last frontier: Alaska'],
      },
      video: { title: 'Alaska-Fairbanks - Montañistas De Washington', youtubeId: null },
    },
  ],
}

export const community = {
  heading: { es: 'Comunidad', en: 'Community' },
  items: [
    {
      title: {
        es: 'Un mensaje de nuestra pequeña senderista Dulce',
        en: 'A message from our little hiker Dulce',
      },
      text: {
        es: [
          'Porque nuestros niños son el futuro es importante hacer conciencia de cuidar nuestras playas y áreas verdes donde nos podamos recrear de manera sana y sin preocuparnos de si en un futuro seguirán ahí. No tirar basura es el consejo de Dulce, nuestra pequeña senderista',
        ],
        en: [
          "Because our children are the future, it's important to raise awareness about caring for the beaches and green spaces where we can spend time in a healthy way, without worrying whether they'll still be there in the future. Don't litter: that's the advice from Dulce, our little hiker",
        ],
      },
      video: { title: 'Seward Park - Mensaje de Dulce', youtubeId: null },
    },
    {
      title: { es: 'Felices Fiestas', en: 'Happy Holidays' },
      text: {
        es: ['Felices Fiestas', 'les deseamos a todos'],
        en: ['Happy Holidays', 'to everyone from all of us'],
      },
      video: { title: 'MONTAÑISTAS DE WASHINGTON LES DESEA UNA FELIZ NAVIDAD', youtubeId: null },
    },
    {
      title: { es: 'Raquetas de nieve en Artist Point', en: 'Snowshoeing at Artist Point' },
      text: {
        es: [
          'Raquetas de nieve en Artist Point',
          'Practicando con los nuevos miembros del grupo en este sendero que parece de una película con tanta nieve',
        ],
        en: [
          'Snowshoeing at Artist Point',
          'Practicing with new group members on this trail, which looks like something out of a movie with all that snow',
        ],
      },
      video: { title: 'Artist Point - Mt Baker Nov-30-2024', youtubeId: null },
    },
    {
      title: {
        es: 'Poo Poo Point: limpiando y cortando los árboles derribados después del ciclón bomba en el PNW',
        en: 'Poo Poo Point: clearing and cutting fallen trees after the bomb cyclone in the PNW',
      },
      text: {
        es: [
          'Montañistas de Washington',
          'trabajando para la comunidad.',
          'Después de la tormenta viene la calma, y después a limpiar lo que la tormenta y el viento tiraron a su paso. Nos dimos a la tarea de limpiar y cortar los árboles caídos en este sendero, que es muy popular en el PNW y quedó muy obstruido, para que todos los senderistas pasen libremente',
        ],
        en: [
          'Montañistas de Washington',
          'working for the community.',
          'After the storm comes the calm, and then cleaning up what the storm and wind knocked down. We set out to clear and cut the fallen trees on this trail, which is very popular in the PNW and was badly blocked, so that every hiker can get through freely',
        ],
      },
      video: { title: 'Poo Poo Point- Labor Comunitario —Bomb Ciclone', youtubeId: null },
    },
    {
      title: { es: 'Seward Park: limpiando la playa', en: 'Seward Park beach cleanup' },
      text: {
        es: [
          'Montañistas de Washington',
          'trabajando para la comunidad.',
          'Limpiando Seward Park',
          'con los Pequeños Senderistas',
          'Predicar con el ejemplo es la manera más efectiva de educar',
        ],
        en: [
          'Montañistas de Washington',
          'working for the community.',
          'Cleaning up Seward Park',
          'with the Little Hikers',
          'Leading by example is the most effective way to teach',
        ],
      },
      video: { title: 'SewardPark - Servicio Comunitario 1-5-2025', youtubeId: null },
    },
    {
      title: { es: 'Mount Rainier: Skyline Trail', en: 'Mount Rainier Skyline Trail' },
      text: {
        es: [
          'Impulsando a la comunidad joven del estado y la ciudad de Seattle a salir a disfrutar de todas las maravillosas áreas verdes que nos ofrece este maravilloso estado',
          'DVSA WA y Montañistas de Washington',
          'trabajando para la comunidad.',
        ],
        en: [
          'Encouraging young people across the state and the city of Seattle to get out and enjoy all the wonderful green spaces this amazing state has to offer',
          'DVSA WA and Montañistas de Washington',
          'working for the community.',
        ],
      },
      video: { title: 'Skyline Loop Trail.—Mount Rainier National Park', youtubeId: null },
    },
    {
      title: 'Green Day Burien',
      text: {
        es: [
          'Trabajando en conjunto y participando con diferentes organizaciones para mejorar los parques y zonas verdes en la ciudad de Burien, WA',
          'City of Burien (Green Burien)',
          'EarthCorps',
          'Montañistas De Washington',
        ],
        en: [
          'Working together with different organizations to improve parks and green spaces in the city of Burien, WA',
          'City of Burien (Green Burien)',
          'EarthCorps',
          'Montañistas De Washington',
        ],
      },
      video: { title: 'Plantando árboles | Green Burien', youtubeId: null },
    },
    {
      title: 'Pierce County Trail Days',
      text: {
        es: [
          'Pierce County Trail Days',
          'es un evento que se lleva a cabo en muchos senderos de este condado, al cual fuimos invitados para limpiar este parque para que la gente lo siga disfrutando, manteniéndolo libre de basura y campamentos de indigentes',
          'en colaboración con',
          'Green Trail Systems',
          'Forever Green Trails',
          'VT Radio',
        ],
        en: [
          'Pierce County Trail Days',
          'is an event held on many trails in this county. We were invited to clean up this park so people can keep enjoying it, free of trash and homeless encampments',
          'in collaboration with',
          'Green Trail Systems',
          'Forever Green Trails',
          'VT Radio',
        ],
      },
      video: { title: 'Pierce County Trail Day - Swan Creek Park- VTRU', youtubeId: null },
    },
  ],
}

export const foxReport = {
  heading: { es: 'Reportaje Fox Local News', en: 'Fox Local News Report' },
  subtitle: {
    es: 'Reportaje de Q13 Fox News haciendo cima en la montaña Rainier a los 14,410 pies de altura. Pablo Gaviria (reportero)',
    en: 'Q13 Fox News story on reaching the summit of Mount Rainier at 14,410 feet. Pablo Gaviria (reporter)',
  },
  video: {
    title: 'MONTAÑISTAS DE WASHINGTON SUMMITTING THE HIGHEST PEAK- #fox13',
    youtubeId: null,
  },
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
        title: {
          es: 'La entrevista a un año de nuestra fundación',
          en: 'Our interview one year after our founding',
        },
        text: {
          es: 'A un año de nuestra fundación platicamos de las experiencias y planes a futuro',
          en: 'One year after our founding, we talked about our experiences and plans for the future',
        },
        video: {
          title: 'Los Montañistas de Washington están apunto de alcanzar su primer aniversario',
          youtubeId: null,
        },
      },
    ],
    [
      {
        title: 'VT Radio',
        text: { es: 'Invitados por la comunidad', en: 'Guests of the community' },
        video: { title: 'Montañistas de Washington quienes estan aun celebrando', youtubeId: null },
      },
      {
        title: 'VT Radio',
        text: { es: 'Primera entrevista de MW', en: 'Our first MW interview' },
        video: { title: 'Montañistas en Washington nos visita esta tarde', youtubeId: null },
      },
    ],
    [
      {
        title: 'PBS, KCTS9, Cascade',
        text: {
          es: 'Nuestra participación en el evento de PBS canal 9 Seattle',
          en: 'Our participation in the PBS Channel 9 Seattle event',
        },
        video: {
          title: 'Explore The Outdoors Family Fair | Cascade PBS Montañistas De Washington',
          youtubeId: null,
        },
      },
    ],
    [
      {
        title: { es: 'Información al público', en: 'Community information' },
        text: {
          es: 'Información al público en el programa Estira tu Dólar',
          en: 'Sharing information with the public on the program Estira tu Dólar',
        },
        video: { title: 'Los Montañistas de Washington, nos comentan en', youtubeId: null },
      },
      {
        ...LIVED_EXPERIENCES,
        video: { title: 'Los Montañistas de Washington en cabina hoy', youtubeId: null },
      },
    ],
    [
      {
        ...LIVED_EXPERIENCES,
        video: {
          title:
            'Los Montañistas de Washington, en entrevista con nosotros, sus alcances en el 2024 y planes en 2025.',
          youtubeId: null,
        },
      },
    ],
  ],
}

export const socialBand = {
  // Each entry is shown on its own line.
  title: {
    es: ['Montañistas de Washington', 'Redes sociales'],
    en: ['Montañistas de Washington', 'Social Media Links'],
  },
}

// Replace '#' with the real profile URLs.
export const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Pinterest', href: '#' },
  { name: 'TikTok', href: '#' },
  { name: 'YouTube', href: '#' },
]

export const contact = {
  heading: { es: 'Contáctanos', en: 'Contact Us' },
  intro: { es: '¡Escríbenos!', en: 'Drop us a line!' },
  fields: {
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Email*', en: 'Email*' },
    message: { es: 'Mensaje', en: 'Message' },
  },
  attachFiles: { es: 'Adjuntar archivos', en: 'Attach Files' },
  attachments: { es: 'Archivos adjuntos', en: 'Attachments' },
  send: { es: 'Enviar', en: 'Send' },
  thanks: {
    es: '¡Gracias por escribirnos! Te responderemos pronto.',
    en: "Thanks for reaching out! We'll get back to you soon.",
  },
  visitTitle: { es: 'Mejor aún, ¡véanos en persona!', en: 'Better yet, see us in person!' },
  visitLines: { es: ['Amamos a nuestra comunidad'], en: ['We love our community'] },
  orgName: 'Montañistas de Washington',
  emails: [
    'marcosbueno@montanistasdewashington.org',
    'aliciatapia@montanistasdewashington.org',
    'hectortito@montanistasdewashington.org',
  ],
  hoursTitle: { es: 'Horario', en: 'Hours' },
  closed: { es: 'Cerrado', en: 'Closed' },
  // Monday first. `null` means closed that day.
  days: {
    es: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  hours: [
    '09:00 am – 05:00 pm',
    '09:00 am – 05:00 pm',
    '09:00 am – 05:00 pm',
    '09:00 am – 05:00 pm',
    '09:00 am – 05:00 pm',
    null,
    null,
  ],
}

export const subscribe = {
  heading: { es: 'Suscríbete', en: 'Subscribe' },
  text: {
    es: 'Regístrate para recibir noticias sobre promociones, ofertas y eventos.',
    en: 'Sign up to hear from us about specials, sales, and events.',
  },
  button: { es: 'Suscribirme', en: 'Sign up' },
  thanks: {
    es: '¡Listo! Te avisaremos de nuestros próximos eventos.',
    en: "You're in! We'll let you know about our upcoming events.",
  },
}

export const cookies = {
  title: { es: 'Este sitio web utiliza cookies.', en: 'This website uses cookies.' },
  text: {
    es: 'Usamos cookies para analizar el tráfico del sitio y optimizar tu experiencia. Al aceptar el uso de cookies, tus datos se agruparán con los de todos los demás usuarios.',
    en: 'We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.',
  },
  accept: { es: 'Aceptar', en: 'Accept' },
}
