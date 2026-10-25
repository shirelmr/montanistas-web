# Montañistas de Washington

Website for **Montañistas de Washington**, a hiking and mountaineering community in Washington State. Built with React and Vite, in Spanish and English, and responsive from small phones to wide screens.

## Running it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Pages

| Path                     | Page                                              |
| ------------------------ | ------------------------------------------------- |
| `/`                      | Home: featured video, activities, latest videos   |
| `/alta-montana`          | Senderismo y Alta Montaña                         |
| `/escalada`              | Escalada (ice climbing, Edgeworks, belay courses) |
| `/pequenos-senderistas`  | Pequeños Senderistas                              |
| `/comunidad`             | Comunidad (cleanups, tree planting, trail days)   |
| `/en-los-medios`         | Fox report and interviews                         |
| `/contacto`              | Contact form, emails and hours                    |

When hosting the site, configure the host to serve `index.html` for every path
(Vercel and Netlify do this for single-page apps), so links like `/escalada` work
when opened directly.

## Project structure

```
public/                     files served as-is (favicon)
scripts/
  optimize_images.py        prepares photos for the web (see "Adding photos")
src/
  assets/images/
    brand/                  logo
    hero/                   background of the home banner
    intro/                  extra group photos
    galleries/<name>/       one folder per photo gallery, + thumbs/ previews
  components/
    layout/                 on every page: Header (menu), Footer, CookieBanner…
    sections/               building blocks of the pages (Hero, galleries, videos…)
    ui/                     small reusable pieces (Photo, VideoEmbed, Logo…)
  data/
    activities.js           one entry per activity page (text, photos, videos)
    home.js                 home page: featured video, latest videos, about
    media.js                "En los medios" page
    common.js               shared text: labels, contact details, footer
    videos.js               every video and its YouTube ID, in one place
    navigation.js           main menu
    images.js               loads the images from src/assets/images
  hooks/                    small shared behaviours (page title, scroll state)
  i18n/                     language switching (Spanish / English)
  pages/                    one component per page
  router.jsx                which page shows at which path
  styles/global.css         colors, fonts and shared styles
```

## Editing content

All text lives in [`src/data/`](src/data/), one file per page. You don't need to
touch the components to update the site.

- **Add an activity:** add an entry to `activities.js`. It gets its own page, a
  menu link and a card on the home page automatically.
- **Change what's new on the home page:** edit `recent` in `home.js`.

### Languages

The site is in Spanish and English, switched with the ES / EN toggle in the top-right corner
(Spanish is the default, and the visitor's choice is remembered). In `content.js`, any text can be:

- a plain string, shown the same in both languages: `title: 'VT Radio'`
- a pair, shown per language: `title: { es: 'Entrevistas', en: 'Interviews' }`

### Adding photos

Galleries show every image in their folder under `src/assets/images/galleries/`, ordered by
file name:

| Folder               | Gallery                                    |
| -------------------- | ------------------------------------------ |
| `outdoors`           | Nuestros momentos favoritos (home)         |
| `trips`              | Un viaje por lo salvaje (Montaña)          |
| `ice-climbing`       | Escalada en hielo en Ouray (Escalada)      |
| `edgeworks-seattle`  | Edgeworks, Seattle tab (Escalada)          |
| `edgeworks-tacoma`   | Edgeworks, Tacoma tab (Escalada)           |
| `edgeworks-bellevue` | Edgeworks, Bellevue tab (Escalada)         |
| `belay-courses`      | Cursos de belay (Escalada)                 |
| `little-hikers`      | Pequeños Senderistas                       |

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

Banner and card photos are picked in the data files with `image('galleries/trips/16-summit-team')`
(the path inside `src/assets/images`, without `.webp`). For the home banner, use `--max-size 2400`.

### Videos

All videos are listed once in [`src/data/videos.js`](src/data/videos.js). Paste the ID from
the link, e.g. `https://www.youtube.com/watch?v=abc123XYZ` → `youtubeId: 'abc123XYZ'`, and the
video works on every page that shows it.
Videos only load the player once they're clicked, so the page stays fast.

### Forms

The contact and subscribe forms only show a confirmation on screen for now. To actually receive
messages, connect `handleSubmit` in `src/components/sections/Contact.jsx` and
`src/components/sections/Subscribe.jsx` to a service such as Formspree or EmailJS.
