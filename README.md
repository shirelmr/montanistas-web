# Montañistas de Washington

Website for **Montañistas de Washington**, a hiking and mountaineering community in Washington State. Built with React and Vite, in Spanish and English, and responsive from small phones to wide screens.

## Running it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Project structure

```
public/                     files served as-is (favicon)
scripts/
  optimize_images.py        prepares photos for the web (see "Adding photos")
src/
  assets/images/
    brand/                  logo
    hero/                   background of the top banner
    intro/                  photo next to the group description
    galleries/<name>/       one folder per photo gallery, + thumbs/ previews
  components/
    sections/               page sections (Hero, Contact, galleries…), each with its CSS
    layout/                 pieces shown on every page (Footer, LanguageToggle, CookieBanner)
    ui/                     small reusable pieces (Photo, VideoEmbed, Logo, SocialIcons)
  data/
    content.js              all text, links, videos and gallery titles
    images.js               loads the images from src/assets/images
  i18n/                     language switching (Spanish / English)
  styles/global.css         colors, fonts and shared styles
```

## Editing content

All text, emails, hours, social links and videos are in [`src/data/content.js`](src/data/content.js). You don't need to touch the components to update the site.

### Languages

The site is in Spanish and English, switched with the ES / EN toggle in the top-right corner
(Spanish is the default, and the visitor's choice is remembered). In `content.js`, any text can be:

- a plain string, shown the same in both languages: `title: 'VT Radio'`
- a pair, shown per language: `title: { es: 'Entrevistas', en: 'Interviews' }`

### Adding photos

Galleries show every image in their folder under `src/assets/images/galleries/`, ordered by
file name:

| Folder            | Gallery                             |
| ----------------- | ----------------------------------- |
| `outdoors`        | Nuestros momentos favoritos         |
| `trips`           | Un viaje por lo salvaje             |
| `ice-climbing`    | Escalada en hielo en Ouray          |
| `little-hikers`   | Pequeños Senderistas                |
| `climbing-nights` | Noches de Escalada                  |

A folder with no photos shows placeholders. Phone photos are large and carry the location where
they were taken, so always add them through the script, which resizes them, converts them to
WebP, strips that metadata, and makes the thumbnail:

```bash
pip install Pillow   # once
python3 scripts/optimize_images.py ~/Desktop/media/IMG_1234.HEIC \
    src/assets/images/galleries/little-hikers/01-trail-day.webp --thumb
```

Name files `NN-short-description.webp` (lowercase, dashes) so the order is easy to control.
HEIC photos from an iPhone need a Mac to convert. Original photos are not kept in the repo.

To change the hero, intro photo or logo, replace the file in its folder (keep the name) or
update the import in [`src/data/images.js`](src/data/images.js). For the hero, use
`--max-size 2400`.

### Videos

Each video has a `youtubeId` (or `vimeoId` for the featured video). Paste the ID from the link,
e.g. `https://www.youtube.com/watch?v=abc123XYZ` → `youtubeId: 'abc123XYZ'`.
Videos only load the player once they're clicked, so the page stays fast.

### Forms

The contact and subscribe forms only show a confirmation on screen for now. To actually receive
messages, connect `handleSubmit` in `src/components/sections/Contact.jsx` and
`src/components/sections/Subscribe.jsx` to a service such as Formspree or EmailJS.
