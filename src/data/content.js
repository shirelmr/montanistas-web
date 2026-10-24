// All of the site's text, links, photos and videos live here.
//
// Placeholders: any `src: null` photo or video without a `youtubeId` /
// `vimeoId` renders a stand-in. To use real media, drop files in
// `public/images/...` and set `src: '/images/your-file.jpg'`, and paste
// the ID from a YouTube link (youtube.com/watch?v=THIS_PART) into `youtubeId`.

// Builds `count` placeholder photos for a gallery.
const placeholders = (count, label) =>
  Array.from({ length: count }, (_, i) => ({ src: null, alt: `${label} ${i + 1}` }))

export const site = {
  name: 'Montañistas de Washington',
  // Set to e.g. '/images/logo.png' once the real logo is in public/images.
  logo: null,
}

export const hero = {
  title: 'Descubre la Belleza al Aire Libre',
  subtitle:
    'Experimente la naturaleza como nunca antes con nuestro equipo de primera calidad y recorridos guiados.',
  cta: { label: 'Unete ya', href: '#contacto' },
  // Background: a looping video (e.g. '/videos/hero.mp4') or an image.
  backgroundVideo: null,
  backgroundImage: null,
}

export const about = {
  eyebrow: 'Una milla a la vez.',
  title: 'Montañistas de Washington',
  lines: [
    'SOMOS DE LA COMUNIDAD Y PARA LA COMUNIDAD',
    'WE ARE  OF THE COMMUNITY AND FOR THE COMMUNITY',
    'Step outside and breathe in the fresh air.',
    'Salga y respire aire fresco.',
  ],
  cta: { label: 'Find out more', href: '#nosotros' },
}

export const featuredVideo = {
  heading: 'Video',
  credits: [
    'Alicia Tapia, Fabian Matia Mora, Eliseo Cruz, Lourdes Orozco, Pablo Gaviria, Marvin Velasquez, Marcos Bueno',
    'y Hector Tito Hernandez felicidades por tu gran esfuerzo y tu apoyo incondicional',
    'al grupo',
    'Montañistas De Washington',
  ],
  video: { title: 'Montañistas de Washington', vimeoId: null, youtubeId: null },
}

export const intro = {
  title: 'Montañistas de Washington',
  subtitle: 'Explore the Great Outdoors with Montañistas de Washington',
  photo: { src: null, alt: 'Grupo en la nieve' },
  paragraphs: [
    'Montañistas de Washington es un grupo de entusiastas de las actividades al aire libre con sede en el estado de Washington. Nos encanta explorar rutas de senderismo, montañas y espacios al aire libre no solo en Washington, sino en todo Estados Unidos. Únase a nosotros en nuestras aventuras, ya sea una caminata tranquila o una escalada desafiante, y conéctese con una comunidad de amantes de las actividades al aire libre con ideas afines.',
    "Montañistas de Washington is a group of outdoor enthusiasts based in the state of Washington. We love exploring hiking trails, mountains, and the great outdoors not only in Washington, but across the United States. Join us on our adventures, whether it's a leisurely hike or a challenging climb, and connect with a community of like-minded outdoor lovers.",
  ],
}

export const galleries = {
  outdoors: {
    title:
      'The Great Outdoors: Our Favorite Moments in Nature (Nuestros momentos Favoritos en la Naturaleza)',
    photos: placeholders(8, 'Momento'),
  },
  journey: {
    title: 'Journey Through the Wild: A Visual Guide to Our Outdoor Trips',
    photos: placeholders(16, 'Viaje'),
  },
  kids: {
    title: 'Pequeños Senderistas porque los niños es lo mas importante',
    photos: placeholders(16, 'Pequeños Senderistas'),
  },
  climbing: {
    title: 'Noches de Escalada en Español',
    photos: placeholders(16, 'Noche de Escalada'),
  },
}

export const videoList = {
  heading: 'Video',
  items: [
    {
      title: 'pequeños senderistas',
      text: [
        'inculcar a disfrutar la naturaleza a temprana edad es la clave para un mejor futuro para nuestros niños y jóvenes',
      ],
      video: { title: '1er Aniversario- Pequeños Senderistas', youtubeId: null },
    },
    {
      title: 'Montañistas De Washington',
      text: [
        'un pequeño video de lo que se vive en las caminatas del grupo a un año de su fundación',
      ],
      video: { title: '1er Aniversario| Alta Montaña | Eventos', youtubeId: null },
    },
    {
      title: 'Es mucho lo que se puede lograr si se trabaja con mucho esfuerzo',
      text: [
        'Este es el reportaje que nos hizo recientemente el canal Q13 fox de nuestra cima a la montaña rainier a los 14,410 pies de altura gracias a Pablo Gaviria (reportero y miembro del grupo de alta montaña)',
      ],
      video: { title: 'MONTAÑISTAS DE WASHINGTON SUMMITTING THE HIGHEST PEAK', youtubeId: null },
    },
    {
      title: 'El corrido de montañistas de washington',
      text: [
        'los corridos es una manera de expresión de contar la historia de personas atravez de la musica',
        'Fabian Matia Mora (autor de la letra)',
        'Lazo Norteño (musica)',
        'Enrique Vargas (voz)',
      ],
      video: { title: 'Montañistas De Washington- Corrido', youtubeId: null },
    },
    {
      title: 'The Enchantments ( Los Lagos Encantados)',
      text: [
        'Los lagos encantados es un recorrido por los lagos alpinos en leavenworth wa con una elevación de 4500 pies de altura con 18 millas es un sendero con dificultad pero su belleza impulsa a muchos a tomar el desafío con tal de ver las maravillas de la naturaleza',
      ],
      video: { title: 'The Enchantments- Montañistas De Washington', youtubeId: null },
    },
    {
      title: 'Pequeños Senderistas',
      text: ['algunos de los eventos'],
      video: { title: 'PEQUEÑOS SENDERISTAS —EVENTOS', youtubeId: null },
    },
    {
      title: 'Noches de Escalada',
      text: ['Edgeworks Bellevue'],
      video: { title: 'Montañistas De Washington | Edgeworks Bellevue', youtubeId: null },
    },
    {
      title: 'Edgeworks Seattle',
      text: [
        'Edgeworks Seattle',
        'gracias por darle este espacio de recreación a nuestra comunidad latina hispano hablante',
      ],
      video: { title: 'Montañistas De Washington| Noche De Escalada', youtubeId: null },
    },
    {
      title: 'The Grand Canyon',
      text: [
        'El viaje al grand canyon en Arizona es uno de los senderos que caminamos cada año para llevar a nuevos miembros del grupo conocer senderos y parques nacionales fuera del estado de WA',
      ],
      video: { title: 'Grand Canyon |Montañistas De Washington', youtubeId: null },
    },
    {
      title: 'Pequeños Senderistas',
      text: [
        'esta es la razon por la cual el grupo trabaja fuerte todos los días la niñez es el futuro',
      ],
      video: { title: 'Pequeños Senderistas _ Feliz día del niño', youtubeId: null },
    },
    {
      title: 'Haciendo Comunidad',
      text: ['gracias a nuestros amigos de Wenatchee por participar en esta caminata'],
      video: { title: 'Montañistas De Washington #wenatchee Wallace', youtubeId: null },
    },
    {
      title: 'Viaje a Alaska',
      text: ['Visitando la ultima frontera  Alaska'],
      video: { title: 'Alaska-Fairbanks - Montañistas De Washington', youtubeId: null },
    },
  ],
}

export const community = {
  heading: 'Comunidad',
  items: [
    {
      title: 'Un mensaje de nuestra pequeña senderista Dulce',
      text: [
        'Porque nuestros niños son el futuro es importante hacer conciencia de cuidar nuestras playas y areas verdes donde nos podamos recrear de manera sana y sin preocuparnos de si en un futuro seguirán ahi. No tirar basura es el consejo de Dulce nuestra pequeña senderista',
      ],
      video: { title: 'Seward Park - Mensaje de Dulce', youtubeId: null },
    },
    {
      title: 'Felices Fiestas',
      text: ['Felices Fiestas', 'les deseamos a todos'],
      video: { title: 'MONTAÑISTAS DE WASHINGTON LES DESEA UNA FELIZ NAVIDAD', youtubeId: null },
    },
    {
      title: 'Snowshoe in Artist Point',
      text: [
        'Snowshoe in Artist Point',
        'Practicando con los nuevos miembros del grupo en este sendero que parece de una película con tanta nieve',
      ],
      video: { title: 'Artist Point - Mt Baker Nov-30-2024', youtubeId: null },
    },
    {
      title:
        'Poo Poo Point, Limpiando y cortando los arboles derrumbados después del Bomb Ciclon en el PNW',
      text: [
        'Montañista de Washington',
        'trabajando para la comunidad .',
        'Despues de la tormenta viene la calma y despues a limpiar lo que la tormenta y el aire tiraron a su paso. Nos dimos a la tarea de limpiar y cortar los arboles caidos en este sendero que es muy popular en el PNW ya que quedo muy obstruido el paso por tanto árbol caido, nos dimos a la tarea de cortar y removerlos del paso para que todos los senderistas pasen libremente',
      ],
      video: { title: 'Poo Poo Point- Labor Comunitario —Bomb Ciclone', youtubeId: null },
    },
    {
      title: 'Seward Park Limpiando la playa',
      text: [
        'Montañista de Washington',
        'trabajando para la comunidad .',
        'Limpiando Seward Park',
        'con los pequeños senderistas',
        'predicar con el ejemplo es la manera mas efectiva de educar',
      ],
      video: { title: 'SewardPark - Servicio Comunitario 1-5-2025', youtubeId: null },
    },
    {
      title: 'Mount Rainier skyline trail',
      text: [
        'impulsando a la comunidad joven del estado y la ciudad de seattle a salir a disfrutar de todas las maravillosas areas verdes que nos ofrece este maravilloso estado',
        'DVSA WA y Montañistas de Washington',
        'trabajando para la comunidad .',
      ],
      video: { title: 'Skyline Loop Trail.—Mount Rainier National Park', youtubeId: null },
    },
    {
      title: 'Green Day Burien',
      text: [
        'Trabajando en conjunto y participando con diferentes organizaciones para mejorar los parques y zonas verdes en la ciudad de Burien WA',
        'City OF Burien (green Burien)',
        'earthcorps.',
        'Montañistas De Washington',
      ],
      video: { title: 'Plantando árboles | Green Burien', youtubeId: null },
    },
    {
      title: 'Pierce County Trail Days',
      text: [
        'Pierce County Trail Days',
        'es un evento que se lleva acabo en muchos senderos de este condado al cual fuimos invitados para limpiar este parque para que la gente lo siga disfrutando y manteniéndolo libre de basura y campamentos de indigentes',
        'en colaboración con',
        'Green Trail Systems',
        'forever green trails',
        'VT Radio',
      ],
      video: { title: 'Pierce County Trail Day - Swan Creek Park- VTRU', youtubeId: null },
    },
  ],
}

export const foxReport = {
  heading: 'Reportaje Fox Local News',
  subtitle:
    'Reportaje Q13 Fox News haciendo cima en la montaña Rainier a los 14,410 pies de altura Pablo Gaviria (reportero)',
  video: {
    title: 'MONTAÑISTAS DE WASHINGTON SUMMITTING THE HIGHEST PEAK- #fox13',
    youtubeId: null,
  },
}

// Each row holds one (full width) or two (side by side) interviews.
export const interviews = {
  heading: 'Entrevistas',
  rows: [
    [
      {
        title: 'La entrevista a un año de nuestra fundacion',
        text: 'A un año de nuestra fundacion platicamos de las experiencias y planes a futuro',
        video: {
          title: 'Los Montañistas de Washington están apunto de alcanzar su primer aniversario',
          youtubeId: null,
        },
      },
    ],
    [
      {
        title: 'VT Radio',
        text: 'Invitado a la comunidad',
        video: { title: 'Montañistas de Washington quienes estan aun celebrando', youtubeId: null },
      },
      {
        title: 'VT Radio',
        text: 'Primera entrevista MW',
        video: { title: 'Montañistas en Washington nos visita esta tarde', youtubeId: null },
      },
    ],
    [
      {
        title: 'PBS, KCTS9, Cascade',
        text: 'Nuestra participacion en el evento de PBS canal 9 Seattle',
        video: {
          title: 'Explore The Outdoors Family Fair | Cascade PBS Montañistas De Washington',
          youtubeId: null,
        },
      },
    ],
    [
      {
        title: 'Informacion al publico',
        text: 'Informacion al publico en el programa estira tu dollar',
        video: { title: 'Los Montañistas de Washington, nos comentan en', youtubeId: null },
      },
      {
        title: 'Testimonio de las experiencias vivas',
        text: 'Nuestros compañeros dando su testimonio de las experiencias vivas dentro del grupo',
        video: { title: 'Los Montañistas de Washington en cabina hoy', youtubeId: null },
      },
    ],
    [
      {
        title: 'Testimonio de las experiencias vivas',
        text: 'Nuestros compañeros dando su testimonio de las experiencias vivas dentro del grupo',
        video: {
          title:
            'Los Montañistas de Washington, en entrevista con nosotros, sus alcances en el 2024 y planes en 2025.',
          youtubeId: null,
        },
      },
    ],
  ],
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
  heading: 'Contact Us',
  intro: 'Drop us a line!',
  visitTitle: 'Better yet, see us in person! Mejor aún, ¡véanos en persona!',
  visitLines: ['We love our community', 'Amamos a nuestra comunidad'],
  orgName: 'Montañistas de Washington',
  emails: [
    'marcosbueno@montanistasdewashington.org',
    'aliciatapia@montanistasdewashington.org',
    'hectortito@montanistasdewashington.org',
  ],
  // Index 0 is Monday.
  hours: [
    ['Mon', '09:00 am – 05:00 pm'],
    ['Tue', '09:00 am – 05:00 pm'],
    ['Wed', '09:00 am – 05:00 pm'],
    ['Thu', '09:00 am – 05:00 pm'],
    ['Fri', '09:00 am – 05:00 pm'],
    ['Sat', 'Closed'],
    ['Sun', 'Closed'],
  ],
}

export const subscribe = {
  heading: 'Subscribe',
  text: 'Sign up to hear from us about specials, sales, and events.',
}
