// Text shared by every page: labels, menu, contact details, footer.
//
// Languages: any text can be a plain string (shown in both languages) or
// `{ es: '...', en: '...' }` to show a different version per language.

import { image, logo } from './images'

export const site = {
  name: 'Montañistas de Washington',
  logo,
}

// Labels for buttons, forms and screen readers.
export const ui = {
  language: { es: 'Idioma', en: 'Language' },
  home: { es: 'Inicio', en: 'Home' },
  mainMenu: { es: 'Menú principal', en: 'Main menu' },
  menu: { es: 'Menú', en: 'Menu' },
  skipToContent: { es: 'Saltar al contenido', en: 'Skip to content' },
  seeMore: { es: 'Ver más', en: 'See more' },
  previous: { es: 'Anterior', en: 'Previous' },
  next: { es: 'Siguiente', en: 'Next' },
  play: { es: 'Reproducir', en: 'Play' },
  videoPending: { es: 'Video pendiente', en: 'Video coming soon' },
  sending: { es: 'Enviando…', en: 'Sending…' },
  sendFailed: {
    es: 'No se pudo enviar. Intenta de nuevo o escríbenos a uno de nuestros correos.',
    en: "It couldn't be sent. Try again or write to one of our emails.",
  },
  botField: { es: 'No llenes este campo', en: "Don't fill this out" },
  rightsReserved: { es: 'Todos los derechos reservados.', en: 'All Rights Reserved.' },
}

export const contactPage = {
  path: '/contacto',
  nav: { es: 'Contacto', en: 'Contact' },
  title: { es: 'Contacto', en: 'Contact' },
  intro: {
    es: 'Escríbenos para unirte a una caminata, colaborar con nosotros o simplemente saludar.',
    en: 'Write to us to join a hike, partner with us, or just say hello.',
  },
  heroImage: image('galleries/outdoors/04-alpine-lake'),
}

export const notFoundPage = {
  title: { es: 'Página no encontrada', en: 'Page not found' },
  text: {
    es: 'Parece que este sendero no existe. Volvamos al inicio.',
    en: "Looks like this trail doesn't exist. Let's head back to the start.",
  },
}

// Invitation shown at the end of activity pages.
export const joinBand = {
  title: { es: '¿Te gustaría acompañarnos?', en: 'Would you like to join us?' },
  text: {
    es: 'Todos son bienvenidos, desde tu primera caminata hasta tu primera cumbre.',
    en: 'Everyone is welcome, from your first hike to your first summit.',
  },
  cta: { es: 'Únete al grupo', en: 'Join the group' },
}

export const socialBand = {
  // Each entry is shown on its own line.
  title: {
    es: ['Montañistas de Washington', 'Redes sociales'],
    en: ['Montañistas de Washington', 'Social Media Links'],
  },
}

// Shown as icons in the social media band and the footer.
export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/groups/676517864532357/' },
  { name: 'Instagram', href: 'https://www.instagram.com/montanistas_de_washington/' },
  { name: 'Pinterest', href: 'https://mx.pinterest.com/gbualici/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@aliciadventures' },
  { name: 'YouTube', href: 'https://www.youtube.com/@aliciapnw5265' },
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
  // Netlify Forms takes up to 8 MB per message, text included.
  maxFiles: 3,
  maxFileMB: 7,
  attachLimit: {
    es: 'Hasta 3 archivos y 7 MB en total.',
    en: 'Up to 3 files, 7 MB in total.',
  },
  send: { es: 'Enviar', en: 'Send' },
  thanks: {
    es: '¡Gracias por escribirnos! Te responderemos pronto.',
    en: "Thanks for reaching out! We'll get back to you soon.",
  },
  visitTitle: { es: 'Mejor aún, ¡véanos en persona!', en: 'Better yet, see us in person!' },
  visitLines: { es: ['Amamos a nuestra comunidad'], en: ['We love our community'] },
  orgName: 'Montañistas de Washington',
  emails: [
    'info@montanistasdewashington.org',
    'marcosbueno@montanistasdewashington.org',
    'aliciatapia@montanistasdewashington.org',
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

export const footer = {
  tagline: {
    es: 'Una milla a la vez. Somos de la comunidad y para la comunidad.',
    en: 'One mile at a time. Of the community and for the community.',
  },
  activitiesTitle: { es: 'Actividades', en: 'Activities' },
  contactTitle: { es: 'Contacto', en: 'Contact' },
}
