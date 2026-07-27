# Immaculate Walls

Website for Immaculate Drywall and Construction, built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content

Editable business info (phone, email, services, testimonials, gallery images)
lives in [`src/data/site.js`](src/data/site.js) — update it there rather than
hunting through individual pages.

Gallery photos live in [`public/images/gallery`](public/images/gallery). Drop
new photos in that folder and add an entry to the `galleryImages` array in
`site.js` to have them show up on the Projects page.

Raw source material (screenshots, testimonial text, etc. pulled from the old
Canva site and Facebook page) is kept in `content-source/` for reference —
it isn't part of the built site.

## Before launch

- [x] Formspree account created, contact form wired to a real form ID.
- [ ] Domain (`immaculatewalls.com`) is purchased, pending client approval
      to attach it. Once approved: add a `public/CNAME` file with the domain
      name, and flip `site`/`base` in `astro.config.mjs` back to domain-root
      mode (see comments in that file).
- [ ] Add more project photos to `public/images/gallery`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages. In the repo's Settings → Pages, set the
source to "GitHub Actions".
