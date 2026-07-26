import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Currently deployed at https://rhyse76.github.io/immaculatewalls/ (no
// custom domain yet), so `base` must match the repo name or every
// root-relative link/asset 404s.
//
// `site` is the origin ONLY (no subpath) — Astro combines site + base
// automatically for the sitemap and canonical URLs. Once a custom domain
// (e.g. immaculatewalls.com) is attached via a public/CNAME file, change
// `site` to the domain root and `base` back to '/'.
export default defineConfig({
  site: 'https://rhyse76.github.io',
  base: '/immaculatewalls',
  output: 'static',
  integrations: [sitemap()],
});
