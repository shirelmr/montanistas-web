# Montañistas de Washington

Website for **Montañistas de Washington**, a hiking and mountaineering community in Washington State. Built with React and Vite.

## Running it

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

All text, emails, hours, social links, photos and videos are in [`src/data/content.js`](src/data/content.js). You don't need to touch the components to update the site.

### Photos and logo

The site currently shows placeholders. To use real images:

1. Put the files in `public/images/` (e.g. `public/images/logo.png`).
2. In `content.js`, set the path, starting with `/images/...`:
   - Logo: `site.logo = '/images/logo.png'`
   - Hero background: `hero.backgroundImage` (or `hero.backgroundVideo` for a looping `.mp4`)
   - Gallery photos: replace a gallery's `placeholders(...)` with a list such as
     `[{ src: '/images/trips/01.jpg', alt: 'Mount Rainier' }, ...]`

### Videos

Each video has a `youtubeId` (or `vimeoId` for the featured video). Paste the ID from the link,
e.g. `https://www.youtube.com/watch?v=abc123XYZ` → `youtubeId: 'abc123XYZ'`.
Videos only load the player once they're clicked, so the page stays fast.

### Forms

The contact and subscribe forms only show a confirmation on screen for now. To actually receive
messages, connect `handleSubmit` in `src/components/Contact.jsx` and `src/components/Subscribe.jsx`
to a service such as Formspree or EmailJS.

## Structure

```
src/
  data/content.js       site text, links and media
  components/           one component (+ CSS file) per page section
  index.css             colors, fonts and shared styles
```
