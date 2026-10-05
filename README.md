# MikeSedaFilms | Concert & Band Photography

Portfolio site built with React and Vite. Four pages: a filterable photo gallery, video work, services and booking, and an about page.

Live site: https://safianassiri.github.io/mikesedafilms/

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## Edit the content

Almost everything is in `src/data.js`:

| What | Where |
| --- | --- |
| Gallery photos, band names, venues, dates | `PHOTOS` |
| Featured reel and video grid (YouTube IDs) | `FEATURED`, `VIDEOS` |
| Service packages and prices | `TIERS` |
| Email, Instagram, booking form URL | `CONTACT` |
| Gear list and About photos | `KIT`, `ABOUT_MAIN`, `ABOUT_EXTRA` |

The bio text is in `src/pages/About.jsx`.

To use your own photos, put them in `public/photos/` and reference them as `/photos/name.jpg`.

A YouTube ID is the part of the link after `v=`.

## Booking form

The form sends requests through [Formspree](https://formspree.io). Create a free form there, then paste its URL into `CONTACT.formspree` in `src/data.js`.

## Project structure

```
src/
├─ main.jsx        starts the app
├─ App.jsx         header, nav, routes
├─ data.js         all editable content
├─ styles.css
└─ pages/
   ├─ Work.jsx     gallery, band filter, lightbox
   ├─ Video.jsx    featured reel, click-to-play grid
   ├─ Booking.jsx  price cards, request form
   └─ About.jsx    bio, photos, gear
```

## Deploy

Pushing to the `main` branch rebuilds and publishes the site through GitHub Actions (`.github/workflows/deploy.yml`). In the repo, set **Settings → Pages → Source** to **GitHub Actions**.

To build manually:

```bash
npm run build
```

The finished site is in `dist/`.
