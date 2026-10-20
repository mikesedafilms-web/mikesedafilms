# Michael Seda — Concert Photography & Video

Portfolio site for concert photography and videography. Plain HTML, CSS, and JavaScript: no build step, no dependencies. Hosted on GitHub Pages.

## Pages

- **Work**: full-screen hero and an edge-to-edge photo gallery with band filters and a lightbox
- **Video**: featured reel and a grid of clips
- **Services & Booking**: packages, pricing, and a booking request form
- **About**: bio, gear, and contact links

## Project structure

```
index.html     page shell (header, footer, fonts)
styles.css     all styling
app.js         page rendering and routing
data.js        all editable content
public/
  photos/      images
  videos/      video files
```

## Editing content

Everything you'll change regularly is in `data.js`:

| To change | Edit |
| --- | --- |
| Gallery photos | `PHOTOS` |
| Home page hero photo | `HERO` |
| Video reels | `FEATURED` and `VIDEOS` |
| Packages and prices | `TIERS` |
| Gear list | `KIT` |
| Email and Instagram | `CONTACT` |

Add image files to `public/photos/` and videos to `public/videos/`, then reference them by filename in `data.js`. Filenames are case-sensitive on GitHub Pages.

## Booking form

By default, submitting the form opens a pre-filled email. To receive requests directly:

1. Create a free form at [formspree.io](https://formspree.io).
2. Paste its URL into `CONTACT.formspree` in `data.js`.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension. Nothing to install.

## Deploy

1. Push to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then save.

The site goes live at `https://<username>.github.io/<repo-name>/` after a minute or two.

## Video tips

Use H.264 `.mp4` files for the widest browser support. `.mov` files often won't play in Chrome. GitHub rejects files over 100 MB.

```
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac output.mp4
```
